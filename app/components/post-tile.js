import Ember from 'ember';

export default Ember.Component.extend({
  isPostShowing: false,
  actions: {
    postShow: function() {
      this.set('isPostShowing', true);
    },
    postHide: function() {
      this.set('isPostShowing', false);
    },
    update(post, params) {
      this.sendAction('update', post, params);
    },
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
