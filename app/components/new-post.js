import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,

  actions: {
    postShowForm(){
      this.set('addNewPost', true);
    },
    savePost(){
      var params = {
        author: this.get('author'),
        date: Date.now(),
        title: this.get('title'),
        content: this.get('content'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
