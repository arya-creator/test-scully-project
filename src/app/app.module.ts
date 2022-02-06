import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './home/components/footer/footer.component';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    ScullyLibModule.forRoot({
      useTransferState: true,
      alwaysMonitor: true,
    }),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
