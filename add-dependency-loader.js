module.exports = function addDependencyLoader(source, map) {
  this.addContextDependency(this.query.context);
  this.callback(null, source, map);
};
