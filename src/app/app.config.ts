import { ApplicationConfig, Component, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpFeature, HttpFeatureKind, provideHttpClient, withFetch } from '@angular/common/http';
import { CalendarComponent } from './calendar/calendar.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { RaceResultsComponent } from './raceresults/raceresults.component';
import { ChallengeRulesComponent } from './challenge-rules/challenge-rules.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ChallengeclubComponent } from './challengeclub/challengeclub.component';
import { MemberresultsComponent } from './memberresults/memberresults.component';

const routes: Routes = [
  {
    path: 'page',
    component: PageComponent,
    children: [
      { path:'calendar',component: CalendarComponent, title : "calendrier"},
      { path:'results',component: ResultsComponent, title : "Classements Courses"}, 
      { path:'raceResults/:id',component: RaceResultsComponent, title : "Classements Courses"},
      { path:'challengerules',component: ChallengeRulesComponent, title : "Règlement du Challenge"},
      { path:'presentation',component: PresentationComponent, title : "Présentation Club"}, 
      { path:'challengeclub',component: ChallengeclubComponent, title : "Challenge Club"},
      { path:'memberresults/:id',component: MemberresultsComponent, title : "Résultats Individuels"}                  
        ]
    },
    {
      path: '', 
      component: HomeComponent,
      title : "Accueil"
    }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withFetch()),]
};



