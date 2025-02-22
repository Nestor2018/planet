export interface PlanetType {
  id: string;
  englishName: string;
  rel: string;
}

export interface PlanetProps {
  planets: PlanetType[];
  favorites: string[];
}
