import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Proveedores</h2>
    @for (provider of providers; track provider.id) {
      <div class="provider-item">
        <h3>{{ provider.name }}</h3>
        <p>Web: <a [href]="'http://' + provider.site" target="_blank">{{ provider.site }}</a></p>
        <a [routerLink]="['/']" [queryParams]="{ providerId: provider.id }">
          Ver todos sus productos
        </a>
      </div>
    }
  `
})
export class ProviderListComponent implements OnInit {
  providers: any[] = [];
  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get<any[]>('/assets/providers.json').subscribe(data => {
      this.providers = data;
    });
  }
}
