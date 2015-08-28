import DS from 'ember-data';
var attr = DS.attr,
  hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr('string'),
  artwork: attr('string'),
  artist: attr('string'),
  isExplicit: attr('boolean'),
  songs: hasMany('song')
});
