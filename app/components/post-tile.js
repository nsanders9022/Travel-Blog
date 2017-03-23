import Ember from 'ember';

export default Ember.Component.extend({
  isPostShowing: false,
  actions: {
    postShow: function() {
      this.set('isPostShowing', true);
    },
    postHide: function() {
      this.set('isPostShowing', false);
    }
  }
});
