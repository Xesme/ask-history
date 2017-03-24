import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,

  actions: {
    answerShowForm(){
      this.set('addNewAnswer', true);
    },
    saveAnswer(){
      var params = {
        author: this.get('author'),
        comment: this.get('comment'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
