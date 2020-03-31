import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThoughtComponent } from './thought/thought.component';
import { ThoughtDetailComponent } from './thought-detail/thought-detail.component';
import { HighlightDirective } from './highlight.directive';
import { ThoughtFormComponent } from './thought-form/thought-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ThoughtComponent,
    ThoughtDetailComponent,
    HighlightDirective,
    ThoughtFormComponent
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
