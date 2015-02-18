var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-shape',
  summary : 'Semantic UI - Shape (official): Single component release of shape',
  version : '1.9.9',
  git     : 'git://github.com/Semantic-Org/UI-Shape.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
