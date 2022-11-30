import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooteerComponent } from './components/footeer/footeer.component';
import { HeaderrComponent } from './components/headerr/headerr.component';
import { SecInnovativeComponent } from './components/sec-innovative/sec-innovative.component';
import { BoxesComponent } from './components/boxes/boxes.component';
import { SecProjectsComponent } from './components/sec-projects/sec-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    FooteerComponent,
    HeaderrComponent,
    SecInnovativeComponent,
    BoxesComponent,
    SecProjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
