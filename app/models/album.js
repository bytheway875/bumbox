import DS from 'ember-data';
var attr = DS.attr,
  hasMany = DS.hasMany,
  computed = Ember.computed;

export default DS.Model.extend({
  name: attr('string'),
  artwork: attr('string'),
  artist: attr('string'),
  isExplicit: attr('boolean'),
  songs: hasMany('song'),
  songDurations: computed.mapBy('songs', 'duration'),
  totalDuration: computed.sum('songDurations'),
  songCount: computed.alias('songs.length')
});

// Examples of how these computed properties would look without the use of computed macros:

//totalDuration: function(){
//  this.get('songs').reduce(function(total, song) {
//    return total + song.get('duration');
//  }, 0);
//}.property('songs.@each.duration');
//songCount: function(){
//  return this.get('songs.length')
//}.property('songs.length')
