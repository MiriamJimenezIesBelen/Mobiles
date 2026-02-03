import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
  items = [
    { name: 'Phone XL', price: 799 },
    { name: 'Phone Mini', price: 699 }
  ];

  onSubmit(): void {
    window.alert('Your order has been submitted!');
    this.items = [];
  }
}
