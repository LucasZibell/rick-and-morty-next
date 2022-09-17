import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import GET_CHARACTER_DETAILS from "../../constants/queries";

import { getCharacterDetails } from "../../services/characters";

import styles from "../../styles/CharacterDetails.module.scss";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";

const defaultCharacter = {
  image: "",
  name: "",
};

const Details: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, isRefetching, isError } = useQuery(
    [GET_CHARACTER_DETAILS],
    () => getCharacterDetails(id),
    {
      enabled: !!id,
    }
  );

  if (isLoading || isRefetching) return <Loader />;

  if (!data) return <ErrorMessage />;

  const { image, name, status, species, type, gender, origin, created } =
    data.data;

  const createdTime = new Date(created).toDateString();

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
      <div className={styles.episodesContainer}>Episodes</div>
    </div>
  );
};

export default Details;
