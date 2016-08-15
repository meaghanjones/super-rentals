import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

    save1() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedroom: this.get('bedroom'),
      };
      this.set('addNewRental', false);
      this.sendAction('save2', params);
    }
  }
});
