import Ember from 'ember';

export default Ember.Component.extend({
  fullLocation: Ember.computed('city.cityName', 'city.country', function() {
    return this.get('city.cityName') + ', ' + this.get('city.country');
  }),

  sortBy:['cost:asc'],
  sortedRentals: Ember.computed.sort('city.rentals', 'sortBy'),

  actions: {
    destroyCity(city) {
      if (confirm('Are you sure you want to delete this city?')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
