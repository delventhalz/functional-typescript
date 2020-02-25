import { toVector } from '../src/physics';

describe('toVector', () => {
  it('converts a angle/speed velocity to a x/y vector', () => {
    const right = toVector({ angle: 0, speed: 100 });
    expect(right.x).toBeCloseTo(100);
    expect(right.y).toBeCloseTo(0);

    const down = toVector({ angle: Math.PI / 2, speed: 100 });
    expect(down.x).toBeCloseTo(0);
    expect(down.y).toBeCloseTo(-100);
  });
});
