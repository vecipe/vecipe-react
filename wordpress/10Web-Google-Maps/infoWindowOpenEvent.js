const addInfoWindowOpenEventListener = (
  overlay,
  row,
  overlayWindow,
  map,
  openEvent,
  overlayWindows,
  infoWindowtype,
  _key
) => {
  google.maps.event.addListener(overlay, "click", () => {
    if (row.link_url) {
      window.open(row.link_url);
    }
    if (openEvent == "click") {
      if (overlayWindow && row.enable_info_window == 1) {
        for (var j = 0; j < overlayWindows.length; j++) {
          overlayWindows[j].open(null, null);
        }

        if (overlayWindow && infoWindowtype == 0) {
          overlayWindow.open(map, overlay);
        } else if (infoWindowtype == 1) {
          gmwdAdvancedInfoWindow(row, _key);
        }
      }
    }
  });
  google.maps.event.addListener(overlay, "mouseover", () => {
    if (openEvent == "hover") {
      if (row.enable_info_window == 1) {
        for (var j = 0; j < overlayWindows.length; j++) {
          overlayWindows[j].open(null, null);
        }
        if (overlayWindow && infoWindowtype == 0) {
          overlayWindow.open(map, overlay);
        } else if (infoWindowtype == 1) {
          gmwdAdvancedInfoWindow(row, _key);
        }
      }
    }
  });
};
