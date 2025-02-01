import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoDePokemonsComponent } from './catalogo-de-pokemons.component';

describe('CatalogoDePokemonsComponent', () => {
  let component: CatalogoDePokemonsComponent;
  let fixture: ComponentFixture<CatalogoDePokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoDePokemonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoDePokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
