export interface Palestre {
  id: number;
  name: string;
  position: string;
  training: string;
  description: String;
}

export const palestres = [
  {
    id: 1,
    name: 'Fitness Lab',
    position: 'Roma',
    training: 'Pump-Fit, sala pesi, MMA, zumba',
    description: 'La palestra è bella, bellissima, magnifica, come il padrone',
  },
  {
    id: 2,
    name: 'Fitness Prog',
    position: 'Napoli',
    training: 'Pump-Fit,MMA, zumba',
    description: 'La palestra è bella, dico sul serio',
  },
  {
    id: 3,
    name: 'Fitness Pump',
    position: 'Milano',
    training: 'Pump-Fit, sala pesi',
    description: 'La palestra è bella, ma io di più',
  },
  {
    id: 4,
    name: 'Muscle Lab',
    position: 'Torino',
    training: 'MMA, zumba',
    description: 'La palestra è bella, veramente',
  },
];
