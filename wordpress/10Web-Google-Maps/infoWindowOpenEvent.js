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
  console.log({
    overlay,
    row, // 店舗情報が格納されている
    overlayWindow,
    map,
    openEvent, // click
    overlayWindows, // length === 38
    infoWindowtype, // 0
    _key, // 1
  });
  google.maps.event.addListener(overlay, "dblclick", () => {
    if (row.link_url) {
      window.open(row.link_url);
    }
  });
  google.maps.event.addListener(overlay, "click", () => {
    if (openEvent == "click") {
      if (overlayWindow && row.enable_info_window == 1) {
        for (var j = 0; j < overlayWindows.length; j++) {
          overlayWindows[j].open(null, null);
        }
        // 情報ウィンドウを表示
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
