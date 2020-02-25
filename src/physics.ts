export interface Velocity {
  angle: number;
  speed: number;
}

export interface Vector {
  x: number;
  y: number;
}

export const toVector = ({ angle, speed }: Velocity): Vector => ({
  x: Math.cos(angle) * speed,
  y: -Math.sin(angle) * speed,
});
