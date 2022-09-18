import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import format from "date-fns/format";

import { GET_CHARACTER_DETAILS } from "../../constants/queries";

import { getCharacterDetails } from "../../services/characters";

import styles from "../../styles/CharacterDetails.module.scss";
import Episodes from "../../components/Episodes";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";

const Details: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useQuery(
    [GET_CHARACTER_DETAILS, id],
    () => getCharacterDetails(id),
    {
      enabled: !!id,
      keepPreviousData: true,
      select: (response) => ({
        ...response.data,
        episode: response.data.episode.map((ep: string) => ep.split("/").pop()),
      }),
    }
  );

  if (isLoading) return <Loader />;

  if (!data) return <ErrorMessage />;

  const {
    image,
    name,
    status,
    species,
    type,
    gender,
    origin,
    created,
    episode,
  } = data;

  const createdTime = format(new Date(created || ""), "MM/dd/yyyy");

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsGrid}>
        <div className={styles.characterImage}>
          <Image src={image} width={200} height={200} alt={name} />
        </div>
        <span className={styles.name}>{`Name: ${name}`}</span>
        <span className={styles.status}>{`Status: ${status}`}</span>
        <span className={styles.species}>{`Species: ${species}`}</span>
        <span className={styles.type}>{`Type: ${type}`}</span>
        <span className={styles.gender}>{`Gender: ${gender}`}</span>
        <span className={styles.origin}>{`Origin: ${origin.name}`}</span>
        <span className={styles.created}>{`Created: ${createdTime}`}</span>
      </div>
      <Episodes episodes={episode} />
    </div>
  );
};

export default Details;
