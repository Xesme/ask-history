# ask-history

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ask-history`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Action Plan

* Install npm, bower, ember, install bootstrap!
* Create application template ($ ember g template application)
* Set-up READMe.me
* Make a plan!
* Set up Home route (index)
* Set up About route (about)
* Set up Contact route (contact)
* Add a nav bar with links inside the application .hbs! Also, add a header of some kind with
the website name
* Create Firebase for project
* Update rules for FireBase project
* Add Firebase key to config/environment.js
* Set up Model (post(remember models are plural in some cases))
* Set-up project.json (historia.json)
* Install emberfire ($ ember install emberfire)
* Import seedling project.json (historia.json) in Firebase
* Create project-tile ($ ember g component post-tile)
* Render project-tile within index.hbs using an #each loop
* Create a export findAll() for model, like this:

  model() {
    return this.store.findAll('model-name(singular)');
  },

* Implement Delete {{action}}
* Create component new-project ($ ember g component new-post)
* Set up form in new-project.hbs (new-post.hbs)
* Add action to new-project.js (new-post.js)
* Don't forget! All of this needs to be added to index.hbs (Data down! Action up!)
* Add to actions: savePost( with it params ) in new-project.js  (new-post.js)
* Add hide and show of the form! index.hbs, new-project.hbs, and new-project.js
* Create a component to update-project ($ ember g component update-post)
* Add it to the project-tile so can d.d.a.a that update
* Create a form in the update-project.hbs to you can update (don't forget you have to hide
  and show the form with an action handler)
* Add to actions: updatePost( with the this.get params) in the update-project.js and send
  that action up!
* Add the action to project-tile.js
* Add the action to index.hbs
* Add the action to index.js (because this route handler talks to the model and don't forget  
  to save and transition back home!)
* Add a dynamic segment so you can view posts by their individual route
* Add route ($ ember g route post)
* Got into the router.js and and add a path with the id, like this:
  this.route('post', {path: '/post/:post_id'});
* Add a model hook in the exports routes/post.js, like this:
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
* REMEMBER when you're on post.hbs you can call this information with {{model.whatever}} this
  route handler is getting information directly from the model.
* Create a post-detail ($ ember g component post-detail)
* It needs a path to be visible on routes/post so don't forget to render {{post-detail post=model}}
* Set up post-detail.hbs, refactor some code and move the delete button over here
* Add to the actions: delete in post-detail.js
_* Only the action helper {{savePost}} should be on index.hbs at this point*_
* Add a new model for answers ($ ember g model answer)
* Refactor the exports findAll() in index.js
* Add answers to project.json file and import it to Firebase
* Start by pulling the model through index.hbs to make sure your are accessing the  
  information correctly before creating components and refactoring (This serves as a tool don't skip it)
* Add compnent new-answer ($ ember g component new-answer)
* Add form for new answer (with hide and show!)
* Add to actions: saveAnswer ( with params )
* Add to actions in index.js, so it can be save to the models
* Actions up! it needs to be added to index.hbs too
* Add async in both models to join them
* Implement refactor to .hbs
* Implement answer deletion
* Implement Styling


* Set up routes
  routes needed for phase 1:
    about.js
    contact.js
    index.js
 * Set up components
  components needed for phase 1:
    post (.js, .hbs)
    post-tile (.js, .hbs)
    post-detail (.js, .hbs)
    new-post (.js, .hbs)
    update-post(.js, .hbs)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
