import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> Task 1 </label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> Task 2 </label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> Task 3 </label><br><br>`
})
export class AppComponent  { name = 'World'; }
