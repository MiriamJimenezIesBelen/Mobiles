import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private http = inject(HttpClient);

  getProviders() {
    // Apunta al archivo providers.json que tienes en la raíz de src
    return this.http.get<any[]>('/providers.json');
  }
}
