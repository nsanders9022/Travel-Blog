import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(comment, params) {
      this.sendAction('update', comment, params);
    },
    delete(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
