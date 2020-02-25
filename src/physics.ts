interface Velocity {
  angle: number;
  speed: number;
}

interface Vector {
  x: number;
  y: number;
}

const toVector = ({ angle, speed }: Velocity): Vector => ({
  x: Math.cos(angle) * speed,
  y: -Math.sin(angle) * speed,
});
