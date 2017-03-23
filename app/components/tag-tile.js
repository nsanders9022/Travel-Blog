import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(tag) {
      if (confirm('Are you sure you want to delete this tag?')) {
        this.sendAction('destroyTag', tag);
      }
    }
  }
});
