type Info = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type CharacterFilter = {
  name: string;
  status: string;
  gender: string;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
};

export type CharacterResponse = {
  info: Info;
  results: Character[];
};
