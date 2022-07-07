import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { DateComponent } from './date/date.component';
import { ButtonComponent } from './button/button.component';
import { TwoComponent } from './two/two.component';
import { FormsModule } from '@angular/forms';
import { StyleComponent } from './style/style.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    DateComponent,
    ButtonComponent,
    TwoComponent,
    StyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
