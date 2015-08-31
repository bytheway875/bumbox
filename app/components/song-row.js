import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['isCurrentSong'],
  song: null,
  player: inject.service(),
  isCurrentSong: function(){
    return this.get('player.song') === this.get('song');
  }.property('player.song', 'song'),
  isPlaying: function(){
    return this.get('isCurrentSong') && this.get('player.isPlaying');

  }.property('player.isPlaying', 'isCurrentSong'),

  actions: {
    pause: function() {
      this.get('player').pause(this.get('song'));
    },
    play: function() {
      this.get('player').play(this.get('song'));
    }
  }
});
