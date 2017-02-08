import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import './rxjs-extensions';

import { CoreModule } from './core/module';
import { BaseHttpModule } from './services/base/http/module';
import { BaseUtilsModule } from './services/base/utils/module';

import { Routing } from './app.routing';
import { Broadcaster } from './utils/broadcaster';
import { AppReadyEvent } from './utils/app-ready-event';

import { AppComponent } from './app.component';
import { InfoServiceAgent } from './service-agents';

import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Routing,
    SharedModule,
    CoreModule.forRoot(),
    BaseHttpModule.forRoot(),
    BaseUtilsModule.forRoot()
  ],
  providers: [
    FormBuilder,
    Broadcaster,
    AppReadyEvent,
    InfoServiceAgent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
