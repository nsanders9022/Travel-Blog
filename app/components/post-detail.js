import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      this.transitionTo('post-detail');
    }
  }
});
