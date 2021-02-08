import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { TabMenuModule } from 'primeng/tabmenu';
import { TooltipModule } from 'primeng/tooltip';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DialogModule} from 'primeng/dialog';

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
import { TributePageComponent } from './Components/projects/frontend/tribute-page/tribute-page.component';
import { SurveyFormComponent } from './Components/projects/frontend/survey-form/survey-form.component';
import { LandingPageComponent } from './Components/projects/frontend/landing-page/landing-page.component';
import { TechnicalDocumentationComponent } from './Components/projects/frontend/technical-documentation/technical-documentation.component';
import { MarkdownPreviewerComponent } from './Components/projects/frontend/markdown-previewer/markdown-previewer.component';
import { VincenzosPlaceComponent } from './Components/projects/frontend/vincenzos-place/vincenzos-place.component';
import { DrumMachineComponent } from './Components/projects/frontend/drum-machine/drum-machine.component';

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
    AboutMeComponent,
    TributePageComponent,
    SurveyFormComponent,
    LandingPageComponent,
    TechnicalDocumentationComponent,
    MarkdownPreviewerComponent,
    VincenzosPlaceComponent,
    DrumMachineComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CardModule,
    DialogModule,
    SidebarModule,
    TabMenuModule,
    TooltipModule,
    ToggleButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
