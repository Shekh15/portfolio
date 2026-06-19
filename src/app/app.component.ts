import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ResumeComponent } from './components/resume/resume.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    HomepageComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';
}
