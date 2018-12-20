import { Component, OnInit } from '@angular/core';
import { Caucasien } from '../developer';
import { VARIABLESTOCKELISTE } from '../mock-developers';

// ng generate component heroes ___ to generate a new component 
// You used the CLI to create a second HeroesComponent.

@Component({
  selector: 'app-developers',
  // selector— the component's CSS element selector
  // The CSS element selector, 'app-developers', matches the name of the HTML element that identifies this component within a parent component's template.
  templateUrl: './developers.component.html',
  // templateUrl— the location of the component's template file.
  styleUrls: ['./developers.component.css']
  // styleUrls— the location of the component's private CSS styles.
})
// Always export the component class so you can import it elsewhere ... like in the AppModule.
export class DevelopersComponent implements OnInit {
  // hero = 'IngénieurAL';
  //   Return to the DevComponent class and import the Dev class.
  // Refactor the component's hero property to be of type Hero. Initialize it with an id of 1 and the name Windstorm.
  superhero: Caucasien = {
    id: 1,
    name: 'Soubise Charles',
    age: 35
  }
  menOfTheSituation = VARIABLESTOCKELISTE;
  constructor() { }
  // The ngOnInit is a lifecycle hook. Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit() {
  }
}
