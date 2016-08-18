import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
  },

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params); // Create a new rental with the information from our parameters, save it to the database, and call it "newRental".
      var city = params.city; // Refer to the city in those parameters as "city".
      city.get('rentals').addObject(newRental); // Retrieve the list of rentals located in "city", and add "newRental" to that list.
      newRental.save().then(function() { // Save "newRental", so it remembers what city it belongs in.
        return city.save(); // Wait until "newRental" has finished saving, then save "city'" too, so it remembers it contains "newRental".
      });
      this.transitionTo('city', params.city); // Afterwards, take us to the page displaying details for "city".
    },

    destroyCity(city) {
      var rental_deletions = city.get('rentals').map(function(rental) {
        return rental.destroyRecord();
      });
      Ember.RSVP.all(rental_deletions).then(function() {
        return city.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
