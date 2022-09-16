import { CharacterResponse } from "../types/character";

import api from "./api";

export const getCharacters = () => api.get<CharacterResponse>("/character");
