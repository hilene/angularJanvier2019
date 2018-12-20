import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopersComponent } from './developers/developers.component';
import { FormsModule } from '@angular/forms'; 
// <-- NgModel lives here and you need to add FormsModule into the import section
// You learned about the AppModule.
// You imported the FormsModule in the AppModule so that Angular would recognize and apply the ngModel directive. 

@NgModule({
  declarations: [
    AppComponent,
    DevelopersComponent
    // You learned the importance of declaring components in the AppModule and appreciated that the CLI declared it for you.
    // Every component must be declared in exactly one NgModule.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
