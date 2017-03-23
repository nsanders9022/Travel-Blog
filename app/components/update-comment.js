import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    update(rental) {
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        content: this.get('content'),
      };
      this.set('updateCommentForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
