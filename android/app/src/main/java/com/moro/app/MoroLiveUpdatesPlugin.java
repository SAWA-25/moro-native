package com.moro.app;

import com.capacitorjs.liveupdates.LiveUpdatesPlugin;
import com.getcapacitor.PluginConfig;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "MoroLiveUpdates")
public class MoroLiveUpdatesPlugin extends LiveUpdatesPlugin {
    @Override
    public void load() {
        PluginConfig liveUpdatesConfig = getBridge().getConfig().getPluginConfiguration("LiveUpdates");
        init(liveUpdatesConfig);
    }
}
