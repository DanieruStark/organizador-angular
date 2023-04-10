import { TestBed } from '@angular/core/testing';

import { DespesaResolver } from './despesa.resolver';

describe('DespesaResolver', () => {
  let resolver: DespesaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DespesaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
