import Ember from 'ember'

export default Ember.Component.extend({
  // by default, it is a div. You can change this by specifying such in the tagName
  tagName: 'span',
  classNames: ['expander'],
  // when isExpanded is true, the class expanded will be added. When it is false, collapsed will be added.
  classNameBindings: ['isExpanded:expanded:collapsed'],
  isExpanded: false,
  actions: {
    toggle: function() {
      this.toggleProperty('isExpanded');
    }
  }
});
