import type { NextPage } from "next";
import Sidebar from "../components/Sidebar";
import CharacterCard from "../components/CharacterCard";

import styles from "../styles/Home.module.scss";

const CharacterList: NextPage = () => {
  const character = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };
  return (
    <>
      <Sidebar />
      <div className={styles.container}>
        <div className={styles.videoGrid}>
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
        </div>
      </div>
    </>
  );
};

export default CharacterList;
