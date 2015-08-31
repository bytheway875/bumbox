import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    confirm: function(){
      this.sendAction('confirm');
    },
    cancel: function(){
      this.sendAction('cancel');
    }

  }
});
