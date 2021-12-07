import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <input type="checkbox" id="task1" name="task1" value="Task1">
  <label for="task1"> Task 1 </label><br>
  <input type="checkbox" id="task2" name="task2" value="Task2">
  <label for="task2"> Task 2 </label><br>
  <input type="checkbox" id="task3" name="task3" value="Task3">
  <label for="vehicle3"> Task 3 </label><br><br>`
})
export class AppComponent  { name = 'World'; }
