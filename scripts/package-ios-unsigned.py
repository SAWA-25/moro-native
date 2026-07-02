import os
import plistlib
import re
import sys
import time
import zipfile
from pathlib import Path


def usage() -> None:
    print(
        "Usage: python scripts/package-ios-unsigned.py "
        "<base.ipa> <public-dir> <out.ipa> <versionName> <buildNumber>",
        file=sys.stderr,
    )


def zip_dir_info(name: str) -> zipfile.ZipInfo:
    info = zipfile.ZipInfo(name if name.endswith("/") else f"{name}/")
    info.create_system = 3
    info.external_attr = (0o40755 << 16) | 0x10
    info.compress_type = zipfile.ZIP_STORED
    info.date_time = time.localtime()[:6]
    return info


def zip_file_info(name: str, source: Path) -> zipfile.ZipInfo:
    stat = source.stat()
    info = zipfile.ZipInfo(name)
    info.create_system = 3
    info.external_attr = 0o100644 << 16
    info.compress_type = zipfile.ZIP_DEFLATED
    info.date_time = time.localtime(stat.st_mtime)[:6]
    return info


def iter_public_files(public_dir: Path):
    for root, dirs, files in os.walk(public_dir):
        dirs.sort()
        files.sort()
        root_path = Path(root)
        rel_root = root_path.relative_to(public_dir)
        for directory in dirs:
            rel = (rel_root / directory).as_posix()
            yield root_path / directory, rel, True
        for filename in files:
            rel = (rel_root / filename).as_posix()
            yield root_path / filename, rel, False


def main() -> int:
    if len(sys.argv) != 6:
        usage()
        return 2

    base_ipa = Path(sys.argv[1])
    public_dir = Path(sys.argv[2])
    output_ipa = Path(sys.argv[3])
    version_name = sys.argv[4]
    build_number = sys.argv[5]

    if not base_ipa.is_file():
        raise FileNotFoundError(base_ipa)
    if not public_dir.is_dir():
        raise FileNotFoundError(public_dir)

    with zipfile.ZipFile(base_ipa, "r") as zin:
        entries = zin.infolist()
        app_prefix = next(
            (entry.filename for entry in entries if re.fullmatch(r"Payload/[^/]+\.app/", entry.filename)),
            None,
        )
        if not app_prefix:
            raise RuntimeError("Cannot find Payload/*.app in base IPA")

        public_prefix = f"{app_prefix}public/"
        info_plist_path = f"{app_prefix}Info.plist"
        info_plist = plistlib.loads(zin.read(info_plist_path))
        info_plist["CFBundleShortVersionString"] = version_name
        info_plist["CFBundleVersion"] = build_number
        plist_format = plistlib.FMT_BINARY if zin.read(info_plist_path).startswith(b"bplist") else plistlib.FMT_XML
        next_info_plist = plistlib.dumps(info_plist, fmt=plist_format, sort_keys=False)

        output_ipa.parent.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(output_ipa, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as zout:
            for entry in entries:
                if entry.filename.startswith(public_prefix):
                    continue
                data = next_info_plist if entry.filename == info_plist_path else zin.read(entry.filename)
                zout.writestr(entry, data)

            zout.writestr(zip_dir_info(public_prefix), b"")
            for source, rel, is_dir in iter_public_files(public_dir):
                zip_name = f"{public_prefix}{rel}"
                if is_dir:
                    zout.writestr(zip_dir_info(zip_name), b"")
                else:
                    zout.writestr(zip_file_info(zip_name, source), source.read_bytes())

    print(f"Wrote {output_ipa}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
