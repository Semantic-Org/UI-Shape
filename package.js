
Package.describe({
  name    : 'semantic:ui-shape',
  summary : 'Semantic UI - Shape: Single component release',
  version : '2.0.8',
  git     : 'git://github.com/Semantic-Org/UI-Shape.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'shape.css',
    'shape.js'
  ], 'client');
});
