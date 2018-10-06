exports.onWindow = (win) => {
  win.maximize();
  win.focusOnWebView();
  win.setFullScreen(true);
  win.setAlwaysOnTop(true, "normal", 1);
  win.show();
};
