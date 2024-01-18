import { TestBed } from '@angular/core/testing';

import { PokemonsService } from './pokemons.service';

describe('PokemonServiceService', () => {
  let service: PokemonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
