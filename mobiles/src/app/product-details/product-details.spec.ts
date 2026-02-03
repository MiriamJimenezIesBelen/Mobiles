import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProductDetailsComponent } from './product-details'; // Asegúrate de que el archivo se llame product-details.ts

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // En Angular 17/18/21, los componentes standalone van en 'imports'
      imports: [ProductDetailsComponent],
      providers: [
        provideRouter([]) // Necesario porque el tutorial usa rutas para los detalles
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Ejecuta la detección de cambios inicial
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
