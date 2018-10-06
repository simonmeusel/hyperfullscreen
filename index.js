exports.onWindow = (win) => {
  win.focusOnWebView();
  win.setAlwaysOnTop(true, "floating", 1)
  win.maximize();
  win.setFullScreen(true);
};
