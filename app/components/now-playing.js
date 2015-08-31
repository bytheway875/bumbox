import Ember from 'ember';
var inject = Ember.inject,
    computed = Ember.computed;

export default Ember.Component.extend({
  tagName: 'footer',
  classNames: ['now-playing'],
  player: inject.service(),
  song: computed.readOnly('player.song'),
  isPlaying: computed.readOnly('player.isPlaying'),
  actions: {
    resume: function(){
      this.get('player').resume();
    },
    pause: function(){
      this.get('player').pause();
    }
  }
});
