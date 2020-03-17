import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontendComponent } from './Components/projects/frontend/frontend.component';
import { DatavisComponent } from './Components/projects/datavis/datavis.component';
import { MicroservicesComponent } from './Components/projects/microservices/microservices.component';
import { FullstackComponent } from './Components/projects/fullstack/fullstack.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'frontend', component: FrontendComponent },
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
