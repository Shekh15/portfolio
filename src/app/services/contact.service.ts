import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private http = inject(HttpClient);

  private apiUrl =
    'https://portfolio-contact-api.shekhareful.workers.dev/';

  sendContact(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}