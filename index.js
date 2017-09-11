exports.onWindow = (win) => {
  win.once('show', () => {
    setTimeout(() => {
      win.setFullScreen(true);
    }, 50);
  });
};
