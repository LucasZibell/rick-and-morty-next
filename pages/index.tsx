import type { NextPage } from "next";
import { useState, ChangeEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import Sidebar from "../components/Sidebar";
import CharacterCard from "../components/CharacterCard";
import Paginator from "../components/Paginator";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

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
  const [currentPage, setPage] = useState<number>(1);
  const { data, isLoading } = useQuery(
    [GET_CHARACTERS, filters, currentPage],
    () => getCharacters(filters, currentPage),
    { keepPreviousData: true }
  );

  const hadleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = event.target;
    setFilters(() => ({ ...filters, [id]: value }));
  };

  const hadleNameChange = (name: string) =>
    setFilters(() => ({ ...filters, name: name }));

  const handlePageChange = (newPage: number) => setPage(newPage);

  if (isLoading) return <Loader />;

  if (!data) return <ErrorMessage />;

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
        <Paginator
          onChangePage={handlePageChange}
          currentPage={currentPage}
          totalPages={data?.data.info.pages || 1}
        />
      </div>
    </>
  );
};

export default CharacterList;
