import { Component } from '@angular/core';

  // ng new angular-tour-of-heroes _____commande pour créer un projet 
  // cd angular-tour-of-heroes____puis____ng serve --open _____ pour faire tourner l'appli dans le localhost 4200

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Developers!';
  // You learned that Angular components display data. cf the html file of the component
}
