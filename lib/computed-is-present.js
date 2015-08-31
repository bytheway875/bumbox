// when you want to import this computed property to use in another file,
// copy and paste:
// import computedIsPresent from 'projects/lib/computed-is-present'
// and call using
// computedIsPresent(propertyName)

import Ember from 'ember';

export default function(propertyName){
  return function(){
    // special ember method for seeing if the property is present!
    return Ember.isPresent(this.get(propertyName));
    // return this.get(‘description’).trim().length > 0
  }.property(PropertyName);
}

