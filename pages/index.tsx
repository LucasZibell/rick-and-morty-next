import type { NextPage } from "next";
import { useState, ChangeEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import Sidebar from "../components/Sidebar";
import CharacterCard from "../components/CharacterCard";
import Paginator from "../components/Paginator";

import GET_CHARACTERS from "../constants/queries";

import { getCharacters } from "../services/characters";

import { Character, CharacterFilter } from "../types/character";

import styles from "../styles/Home.module.scss";

const defaultFilter = {
  name: "",
  status: "",
  gender: "",
};

const CharacterList: NextPage = () => {
  const [filters, setFilters] = useState<CharacterFilter>(defaultFilter);
  const { data } = useQuery([GET_CHARACTERS, filters], getCharacters);

  const hadleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = event.target;
    setFilters(() => ({ ...filters, [id]: value }));
  };

  const hadleNameChange = (name: string) =>
    setFilters(() => ({ ...filters, name: name }));

  return (
    <>
      <Sidebar
        onSelectChange={hadleSelectChange}
        onNameChange={hadleNameChange}
      />
      <div className={styles.container}>
        <div className={styles.characterGrid}>
          {data?.data.results.map((character: Character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
        <Paginator currentPage={1} totalPages={data?.data.info.pages} />
      </div>
    </>
  );
};

export default CharacterList;
