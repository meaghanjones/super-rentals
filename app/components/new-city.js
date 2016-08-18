import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions:{
    cityFormShow(){
      this.set('addNewCity', true);
    },

    save1() {
      var params = {
        cityName: this.get('cityName'),
        country: this.get('country')
      };
      this.set('addNewCity', false);
      this.sendAction('save2', params); // first argument here needs to match the name you 'pass through' in the parent of this component (save2="methodName")
    }
  }
});
