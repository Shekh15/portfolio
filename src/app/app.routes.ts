import { Routes } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
