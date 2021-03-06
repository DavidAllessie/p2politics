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
import { ConvertDate } from './utils/convert-date';

import { AppComponent } from './app.component';
import { ContractRpcServiceAgent } from './service-agents';
import { InfoServiceAgent } from './service-agents';
import { ProposalService } from './services/proposal.service';
import { UserService } from './services/user.service';
import { VoteService } from './services/vote.service';
import { Web3Service } from './services/web3.service';

import { SideMenuModule } from './side-menu';
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
    SideMenuModule,
    SharedModule,
    CoreModule.forRoot(),
    BaseHttpModule.forRoot(),
    BaseUtilsModule.forRoot()
  ],
  providers: [
    FormBuilder,
    Broadcaster,
    AppReadyEvent,
    ConvertDate,
    ContractRpcServiceAgent,
    InfoServiceAgent,
    ProposalService,
    UserService,
    VoteService,
    Web3Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
