import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { TabMenuModule } from 'primeng/tabmenu';
import { TooltipModule } from 'primeng/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { TabMenuComponent } from './Components/tab-menu/tab-menu.component';
import { FrontendComponent } from './Components/projects/frontend/frontend.component';
import { DatavisComponent } from './Components/projects/datavis/datavis.component';
import { MicroservicesComponent } from './Components/projects/microservices/microservices.component';
import { FullstackComponent } from './Components/projects/fullstack/fullstack.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    DatavisComponent,
    FooterComponent,
    FrontendComponent,
    FullstackComponent,
    MicroservicesComponent,
    NavbarComponent,
    SideNavComponent,
    TabMenuComponent,
    PageNotFoundComponent,
    AboutMeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CardModule,
    SidebarModule,
    TabMenuModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
