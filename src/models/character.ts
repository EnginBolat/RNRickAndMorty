export enum GenderEnum {
  female = 'Female',
  male = 'male',
  unknown = 'unknown',
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: GenderEnum;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}
