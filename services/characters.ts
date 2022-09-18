import {
  CharacterResponse,
  CharacterFilter,
  Character,
} from "../types/character";

import api from "./api";

export const getCharacters = (filters: CharacterFilter, page: number) => {
  const params = { ...filters, page };
  return api.get<CharacterResponse>("/character", { params });
};

export const getCharacterDetails = (id: string | Array<string> | undefined) =>
  api.get<Character>(`/character/${id}`);
