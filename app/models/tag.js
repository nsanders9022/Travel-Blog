import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
