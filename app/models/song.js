import DS from 'ember-data';
import Ember from 'ember';

var attr = DS.attr,
  belongsTo = DS.belongsTo,
  computed = Ember.computed;

export default DS.Model.extend({
  track: attr('number'),
  duration: attr('number'),
  name: attr('string'),
  url: attr('string'),
  album: belongsTo('album'),
  artwork: computed.alias('album.artwork'),
  artist: computed.alias('album.artist')
});
