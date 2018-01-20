import fetch from 'fetch';
import Route from '@ember/routing/route';


export default Route.extend({
  model() {
    return fetch("https://api.watttime.org/api/v1/datapoints/17969688/")
      .then(
        function(response) {
          return response.json();
        }
      );
  }
});
