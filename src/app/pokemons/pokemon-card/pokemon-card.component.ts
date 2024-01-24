import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/_models/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonCard: Pokemon | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
