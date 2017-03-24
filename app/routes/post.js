import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    destroyPost(post) {
      var answerDeletions = post.get('answers').map(function(answer){
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answerDeletions).then(function(){
        return post.destroyRecord();
      });
      this.transitionTo('index');
    },

    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    saveAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      var post = params.post;
      post.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return post.save();
      });
      this.transitionTo('post', post);
    },

    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    },
  }
});
