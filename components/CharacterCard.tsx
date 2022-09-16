import Image from "next/image";
import RickAndMortyLogo from "../assets/rick-morty-logo.png";

import styles from "../styles/CharacterCard.module.scss";

function CharacterCard() {
  const character = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };
  const { name, status, species, image } = character;
  return (
    <div className={styles.cardContainer}>
      <Image src={image} width={100} height={100} alt={name} />
      <span className={styles.infoText}>{name}</span>
      <span className={styles.infoText}>{species}</span>
      <span className={styles.infoText}>{status}</span>
    </div>
  );
}

export default CharacterCard;
