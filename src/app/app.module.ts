import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { FormsModule } from '@angular/forms';
import { QuestionListComponent } from './questionlist/questionlist.component';
import{CountdownModule} from 'ngx-countdown'



@NgModule({
  declarations: [
    AppComponent,
    CandidateFormComponent,
    QuestionListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
