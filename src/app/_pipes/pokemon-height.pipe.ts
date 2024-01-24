import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'pokemonHeight'
})
export class PokemonHeightPipe implements PipeTransform {

  transform(value: number): string {
    return value.toString() + " decimeters";
  }

}
