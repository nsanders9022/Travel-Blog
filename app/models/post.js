import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  city: DS.attr(),
  country: DS.attr(),
  highlight: DS.attr(),
  body: DS.attr(),
  image: DS.attr(),
  tags: DS.hasMany('tag', { async: true})
});
