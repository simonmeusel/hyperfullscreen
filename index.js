'use strict';

exports.decorateBrowserOptions = defaults => Object.assign({}, defaults, {
  fullscreen: true
});

// Expose a no-op API method to workaround Hyper issue:
// https://github.com/zeit/hyper/issues/2377
exports.decorateConfig = config => config;
