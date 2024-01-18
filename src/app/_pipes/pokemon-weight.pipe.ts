import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'pokemonWeight'
})
export class PokemonWeightPipe implements PipeTransform {

  transform(value: number): string {
    return value.toString() + " hectograms";
  }

}
