import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { BotComponent } from './bot/bot.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [ //components
    AppComponent,
    TopComponent,
    BotComponent
  ],
  imports: [ //modules
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [AppService], //services
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
