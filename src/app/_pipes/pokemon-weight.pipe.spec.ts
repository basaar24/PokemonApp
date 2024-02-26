import { PokemonWeightPipe } from './pokemon-weight.pipe';

describe('PokemonWeightPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonWeightPipe();
    expect(pipe).toBeTruthy();
  });

  it('return a number as string + decimeters', () => {
    // Arrange
    const pipe = new PokemonWeightPipe();

    // Act
    const ret = pipe.transform(1.23);

    // Assert
    expect(ret.toString()).toBe("1.23 hectograms");
  });
});
