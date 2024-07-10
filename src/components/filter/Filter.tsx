"use client";

import { useState } from "react";
import s from "./Filter.module.css";
import FilterList from "../filterList/FilterList";
import { TrackType } from "@/types";

const Filter = ({ tracks }: { tracks: TrackType[] }) => {
  const [activeFilter, setActivFilter] = useState<string | null>(null);

  const filters = [
    {
      title: "Исполнителю",
      list: Array.from(new Set(tracks?.map((track) => track.author))),
    },
    {
      title: "Году выпуска",
      list: ["По умолчанию", "Сначала новые", "Сначала старые"],
    },
    {
      title: "Жанру",
      list: Array.from(new Set(tracks?.map((track) => track.genre))),
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
            key={filter.title}
            isOpened={activeFilter === filter.title}
            handleFilterClick={handleFilterClick}
            title={filter.title}
            list={filter.list}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;

// TODO: создать еще один компонент FilterList, который будети отдавать опции, а принимать список фильтра

// TODO: создать state вот здесь, он будет иметь по дефолту значение null, еще три значения которые он будет принимать "authors/genros/years", в зависимости от значения состояния будет отображатся тот или иной список фильтра
