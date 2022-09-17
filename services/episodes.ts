import api from "./api";

import { Episode } from "../types/episode";

export const getEpisodeDetails = (id: string) =>
  api.get<Episode>(`/episode/${id}`);
