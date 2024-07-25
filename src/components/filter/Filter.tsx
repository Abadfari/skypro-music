"use client";

import { useState } from "react";
import s from "./Filter.module.css";
import FilterList from "../filterList/FilterList";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setFilter } from "@/store/features/playlistSlice";

const Filter = () => {
  const [activeFilter, setActivFilter] = useState<string | null>(null);
  const filterOptions = useAppSelector((state) => state.playlist.filterOptions);
  const initialTracks = useAppSelector((state) => state.playlist.initialTracks);
  const dispatch = useAppDispatch();
  const handleFilter = (type) => (item) => {
    const currentFilter = filterOptions[type];
    if (currentFilter instanceof Array) {
      const updatedFilter = currentFilter.includes(item)
        ? currentFilter.filter((el) => el !== item)
        : [...currentFilter, item];
      dispatch(setFilter({ ...filterOptions, [type]: updatedFilter }));
    } else {
      dispatch(setFilter({ ...filterOptions, [type]: item }));
    }
  };

  const filters = [
    {
      title: "Исполнителю",
      list: Array.from(new Set(initialTracks?.map((track) => track.author))),
      handleActiveFilter: handleFilter("authors"),
      type: "authors",
      filter: filterOptions.authors,
    },
    {
      title: "Году выпуска",
      list: ["По умолчанию", "Сначала новые", "Сначала старые"],
      handleActiveFilter: handleFilter("order"),
      type: "order",
      filter: filterOptions.order,
    },
    {
      title: "Жанру",
      list: Array.from(new Set(initialTracks?.map((track) => track.genre))),
      handleActiveFilter: handleFilter("genres"),
      type: "genres",
      filter: filterOptions.genres,
    },
  ];

  function handleFilterClick(newFilter: string) {
    setActivFilter((prev) => (prev === newFilter ? null : newFilter));
  }

  return (
    <div className={s.centerblockFilter}>
      <div className={s.filterTitle}>Искать по:</div>
      <div className={s.wrapperBtn}>
        {filters?.map((filter) => (
          <FilterList
            filter={filter.filter}
            type={filter.type}
            key={filter.title}
            isOpened={activeFilter === filter.title}
            handleFilterClick={handleFilterClick}
            title={filter.title}
            list={filter.list}
            handleActiveFilter={filter.handleActiveFilter}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
