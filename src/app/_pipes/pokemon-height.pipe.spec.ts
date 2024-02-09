import { PokemonHeightPipe } from './pokemon-height.pipe';

describe('PokemonHeightPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonHeightPipe();
    expect(pipe).toBeTruthy();
  });

  it('return a number as string + decimeters', () => {
    // Arrange
    const pipe = new PokemonHeightPipe();

    // Act
    const ret = pipe.transform(1.23);

    // Assert
    expect(ret.toString()).toBe("1.23 decimeters");
  });
});
