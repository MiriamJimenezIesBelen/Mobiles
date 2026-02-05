import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  products = [
    // Añadimos la propiedad quantity
    { id: 1, name: 'Phone XL', price: 799, description: 'A large phone with one of the best screens',quantity:0 },
    { id: 2, name: 'Phone Mini', price: 699, description: 'A great phone with one of the best cameras',quantity:12 },
    { id: 3, name: 'Phone Standard', price: 299, description: '',quantity:2 }
  ];

  share() {
    window.alert('The product has been shared!');
  }
}
