import DS from 'ember-data';
var attr = DS.attr,
  belongsTo = DS.belongsTo;

export default DS.Model.extend({
  track: attr('number'),
  duration: attr('number'),
  name: attr('string'),
  url: attr('string'),
  album: belongsTo('album')
});
