import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  loading = false;

  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
  ) {}

  ngOnInit() {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });

  }

  sendMessage() {

    console.log("Sending contact form data:::",this.contactForm.getRawValue());
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.contactService.sendContact(this.contactForm.getRawValue()).subscribe({
      next: () => {
        this.loading = false;

        alert('Message sent successfully');

        this.contactForm.reset();
      },

      error: (err) => {
        this.loading = false;

        console.error(err);

        alert('Failed to send message');
      },
    });
  }
}
