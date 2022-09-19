import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import format from "date-fns/format";

import { GET_EPISODE_DETAILS } from "../../constants/queries";

import { getEpisodeDetails } from "../../services/episodes";

import styles from "./styles.module.scss";

type Props = {
  episodes: Array<string | undefined>;
};

const Episodes = ({ episodes }: Props) => {
  const [selectedEpisode, setSelectedEpisode] = useState<string>("");

  const { data } = useQuery(
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

  const createdDate = format(
    new Date(data?.data.created || Date()),
    "MM/dd/yyyy"
  );

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
      <div className={styles.episodesDetailsContainer}>
        {selectedEpisode && (
          <>
            <span className={styles.episodeInfo}>{data?.data.name}</span>
            <span className={styles.episodeInfo}>{data?.data.id}</span>
            <span className={styles.episodeInfo}>{data?.data.air_date}</span>
            <span className={styles.episodeInfo}>{createdDate}</span>
            <span className={styles.episodeInfo}>{data?.data.episode}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Episodes;
