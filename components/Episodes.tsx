import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import ErrorMessage from "./ErrorMessage";

import { GET_EPISODE_DETAILS } from "../constants/queries";

import { getEpisodeDetails } from "../services/episodes";

import styles from "../styles/CharacterDetails.module.scss";

type Props = {
  episodes: Array<string | undefined>;
};

const Episodes = ({ episodes }: Props) => {
  const [selectedEpisode, setSelectedEpisode] = useState<string>("");

  const { data, isLoading } = useQuery(
    [GET_EPISODE_DETAILS, selectedEpisode],
    () => getEpisodeDetails(selectedEpisode),
    {
      enabled: !!selectedEpisode,
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    setSelectedEpisode(episodes[0] || "");
  }, [episodes]);

  const handleEpisodeSelect = (ep: string) => setSelectedEpisode(ep);

  const createdDate = new Date(data?.data.created || "").toDateString();

  return (
    <div className={styles.episodesContainer}>
      <div className={styles.episodeList}>
        {episodes.map((ep: any) => (
          <button
            type="button"
            className={`${styles.episode} ${
              selectedEpisode === ep ? styles.selected : ""
            }`}
            key={ep}
            onClick={() => handleEpisodeSelect(ep)}
          >{`Episode ${ep}`}</button>
        ))}
      </div>
      <div className={styles.episodesContainer}>
        {selectedEpisode && (
          <>
            <span>{data?.data.name}</span>
            <span>{data?.data.id}</span>
            <span>{data?.data.air_date}</span>
            <span>{createdDate}</span>
            <span>{data?.data.episode}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Episodes;
