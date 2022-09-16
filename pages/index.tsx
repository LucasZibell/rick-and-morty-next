import type { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";
import Sidebar from "../components/Sidebar";
import CharacterCard from "../components/CharacterCard";

import GET_CHARACTERS from "../constants/queries";

import { getCharacters } from "../services/characters";

import { Character } from "../types/character";

import styles from "../styles/Home.module.scss";

const CharacterList: NextPage = () => {
  const { data } = useQuery([GET_CHARACTERS], getCharacters);

  return (
    <>
      <Sidebar />
      <div className={styles.container}>
        <div className={styles.videoGrid}>
          {data?.data.results.map((character: Character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CharacterList;
