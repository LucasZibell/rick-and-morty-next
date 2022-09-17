import Image from "next/image";
import { useRouter } from "next/router";

import { Character } from "../types/character";

import styles from "../styles/CharacterCard.module.scss";

type Props = {
  character: Character;
};

const CharacterCard = ({ character }: Props) => {
  const router = useRouter();
  const { id, name, status, species, image } = character;

  const handleClick = () => router.push(`/character/${id}`);
  return (
    <div className={styles.cardContainer}>
      <Image src={image} width={100} height={100} alt={name} />
      <span className={styles.infoText}>{name}</span>
      <span className={styles.infoText}>{species}</span>
      <span className={styles.infoText}>{status}</span>
      <button
        className={styles.detailCardButton}
        type="button"
        onClick={handleClick}
      >
        Details
      </button>
    </div>
  );
};

export default CharacterCard;
