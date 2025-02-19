import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comments',
  imports: [CommonModule, FormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  firstName = signal('');
  lastName = signal('');
  addresses = signal([{ street: '', city: '', zip: '' }]);
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
  isFormValid = computed(
    () =>
      this.firstName() &&
      this.lastName() &&
      this.addresses().every((addr) => addr.street && addr.city && addr.zip),
  );
  updateAddress(index: number, field: string, value: string) {
    const updatedAddresses = [...this.addresses()];
    updatedAddresses[index] = { ...updatedAddresses[index], [field]: value };
    this.addresses.set(updatedAddresses);
  }
  addAddress() {
    this.addresses.set([
      ...this.addresses(),
      { street: '', city: '', zip: '' },
    ]);
  }

  protected readonly HTMLInputElement = HTMLInputElement;
}
