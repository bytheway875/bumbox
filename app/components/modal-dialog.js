import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    open: function() {
      this.set('isOpen', true)
    },
    save: function(){
      alert('I "saved" your thing. But not really. Oops');
      this.set('isOpen', false);
    }
  }
})
