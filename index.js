exports.onWindow = (win) => {
  win.once('show', () => {
    win.setFullScreen(true);
  });
};
