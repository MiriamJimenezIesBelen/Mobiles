import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  products = [
    { id: 1, name: 'Phone XL', price: 799, description: 'A large phone with one of the best screens' },
    { id: 2, name: 'Phone Mini', price: 699, description: 'A great phone with one of the best cameras' },
    { id: 3, name: 'Phone Standard', price: 299, description: '' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));


    this.product = this.products.find(p => p.id === productIdFromRoute);
  }

  addToCart(product: any) {
    window.alert('Your product has been added to the cart!');
  }
}
