import Ember from 'ember';

export default Ember.Component.extend({
  addNewTag: false,
  actions: {
    tagFormShow() {
      this.set('addNewTag', true);
    },
    saveTag() {
     var params = {
       type: this.get('type'),
       post: this.get('post')
     };
     this.set('addNewTag', false);
     this.sendAction('saveTag', params);
   }
  }
});
