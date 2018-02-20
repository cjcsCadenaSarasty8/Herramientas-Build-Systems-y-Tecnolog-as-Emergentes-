/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatosArticuloService } from './datos-articulo.service';

describe('DatosArticuloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosArticuloService]
    });
  });

  it('should ...', inject([DatosArticuloService], (service: DatosArticuloService) => {
    expect(service).toBeTruthy();
  }));
});
