import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontendComponent } from './Components/projects/frontend/frontend.component';
import { TributePageComponent } from './Components/projects/frontend/tribute-page/tribute-page.component';
import { SurveyFormComponent } from './Components/projects/frontend/survey-form/survey-form.component';
import { LandingPageComponent } from './Components/projects/frontend/landing-page/landing-page.component';
import { TechnicalDocumentationComponent } from './Components/projects/frontend/technical-documentation/technical-documentation.component';
import { MarkdownPreviewerComponent } from './Components/projects/frontend/markdown-previewer/markdown-previewer.component';
import { VincenzosPlaceComponent } from './Components/projects/frontend/vincenzos-place/vincenzos-place.component';
import { DrumMachineComponent } from './Components/projects/frontend/drum-machine/drum-machine.component';
import { DatavisComponent } from './Components/projects/datavis/datavis.component';
import { MicroservicesComponent } from './Components/projects/microservices/microservices.component';
import { FullstackComponent } from './Components/projects/fullstack/fullstack.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'frontend', component: FrontendComponent },
  { path: 'frontend/projects/tributepage', component: TributePageComponent },
  { path: 'frontend/projects/surveyform', component: SurveyFormComponent },
  { path: 'frontend/projects/landingpage', component: LandingPageComponent },
  { path: 'frontend/projects/technicaldocumentation', component: TechnicalDocumentationComponent },
  { path: 'frontend/projects/markdownpreviewer', component: MarkdownPreviewerComponent },
  { path: 'frontend/projects/vincenzosplace', component: VincenzosPlaceComponent },
  { path: 'frontend/projects/drummachine', component: DrumMachineComponent },
  { path: 'frontend/projects/', component: FrontendComponent },
  { path: 'datavis', component: DatavisComponent },
  { path: 'microservices', component: MicroservicesComponent },
  { path: 'fullstack', component: FullstackComponent },
  { path: '', redirectTo: 'frontend', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
