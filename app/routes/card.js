import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return params.play_id;
  },
  afterModel(){
    /*Ember.run.later((() => {
      Ember.$('#carta').removeClass("cara2");
      console.log("removeClass()");
    }), 8000);*/
  }
});
