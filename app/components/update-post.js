import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        name: this.get('name'),
        city: this.get('city'),
        country: this.get('country'),
        highlight: this.get('highlight'),
        body: this.get('body'),
        image: this.get('image'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
