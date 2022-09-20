import type { NextPage } from "next";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import Sidebar from "../components/Sidebar";
import CharacterCard from "../components/CharacterCard";
import Paginator from "../components/Paginator";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import useIsMobile from "../hooks/useIsMobile";
import UpArrow from "../assets/up_arrow.png";

import { GET_CHARACTERS } from "../constants/queries";

import { getCharacters } from "../services/characters";

import { Character, CharacterFilter } from "../types/character";

import styles from "../styles/CharacterList.module.scss";

const defaultFilter = {
  name: "",
  status: "",
  gender: "",
};

const CharacterList: NextPage = () => {
  const isMobile = useIsMobile();
  const [filters, setFilters] = useState<CharacterFilter>(defaultFilter);
  const [currentPage, setPage] = useState<number>(1);
  const { data, isLoading } = useQuery(
    [GET_CHARACTERS, filters, currentPage],
    () => getCharacters(filters, currentPage),
    { keepPreviousData: true, retry: 0 }
  );

  const hadleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = event.target;
    setFilters(() => ({ ...filters, [id]: value }));
  };

  const hadleNameChange = (name: string) =>
    setFilters(() => ({ ...filters, name: name }));

  const handlePageChange = (newPage: number) => setPage(newPage);

  const goTop = () => window.scrollTo(0, 0);

  if (isLoading) return <Loader />;

  return (
    <>
      <Sidebar
        onSelectChange={hadleSelectChange}
        onNameChange={hadleNameChange}
      />
      <div className={styles.container}>
        {data ? (
          <>
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
            <button
              onClick={goTop}
              className={`${styles.goTopButton} ${isMobile ? "" : "hidden"}`}
              type="button"
            >
              <Image src={UpArrow} alt="up arrow icon" width={20} height={20} />
            </button>
          </>
        ) : (
          <span className={styles.noResults}>
            No results for the selected filters
          </span>
        )}
      </div>
    </>
  );
};

export default CharacterList;
