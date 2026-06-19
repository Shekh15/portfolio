import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  constructor() {}

  ngOnInit() {}

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'resumes/shekh_areful_latestcv.pdf';
    link.download = 'Shekh_Areful_Resume.pdf';
    link.click();
  }
}
