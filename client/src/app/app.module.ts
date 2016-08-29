import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { BotComponent } from './bot/bot.component';

@NgModule({
  declarations: [ //components
    AppComponent,
    TopComponent,
    BotComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [], //services
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
