import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isSubmitting = false;
  isSubmitted = false;

  formData = {
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  };

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      this.isSubmitting = false;
      this.isSubmitted = true;

      // Reset form after 3 seconds
      setTimeout(() => {
        this.isSubmitted = false;
        this.formData = {
          name: '',
          email: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        };
      }, 3000);
    }, 1000);
  }
}
