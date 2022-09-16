import { QueryFunction } from "@tanstack/react-query";
import { CharacterResponse, CharacterFilter } from "../types/character";

import api from "./api";

export const getCharacters = ({ queryKey }: any) => {
  const [_, params] = queryKey;
  return api.get<CharacterResponse>("/character", { params });
};
