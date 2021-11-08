import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AbouComponent } from './abou/abou.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BandymaiComponent } from './bandymai/bandymai.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AbouComponent,
    AboutComponent,
    ContactsComponent,
    HomepageComponent,
    BandymaiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
