import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

// Angular material components
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { ExerciseService } from './services/exercise.service';



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,

    // Angular Material
    MatListModule,
    MatGridListModule,
    MatCheckboxModule,
    MatButtonModule

  ],
  providers: [
    ExerciseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
