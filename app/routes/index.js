import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      tags: this.store.findAll('tag')
    });
  },

  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },
    saveTag(params) {
      var newTag = this.store.createRecord('tag', params);
      var post = params.post;
      post.get('tags').addObject(newTag);
      newTag.save().then(function() {
        return post.save();
      });
      this.transitionTo('index');
    }
  }
});
