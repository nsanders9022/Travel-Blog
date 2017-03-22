import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost() {
      var params = {
        name: this.get('name'),
        city: this.get('city'),
        country: this.get('country'),
        highlight: this.get('highlight'),
        body: this.get('body'),
        image: this.get('image'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
