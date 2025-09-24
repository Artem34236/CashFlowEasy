"use client";

import { marginForHeader } from "@/app/(home)/page";
import Button from "@/components/other/Button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

type Props = {};

export default function Page({}: Props) {
  const { id } = useParams();
  const [search, setSearch] = useState<string>("");

  return (
    <div
      className={`firstBg pb-4 sm:px-4 px-2 pt-2 flex-grow ${marginForHeader}`}
    >
      <div className="secondBg w-full py-2 flex justify-end px-3 rounded-md">
        <input
          className="blueText outline-0 border border-[#E5E5E5] w-full sm:w-[220px] text-sm px-3 py-1.5 rounded-md"
          placeholder="Поиск..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          type="text"
        />
      </div>

      <div className="px-2 sm:px-6">
        <div className="flex w-full justify-between items-center py-3 border-b">
          <h2 className="titleColor text-center text-[20px] font-[700]">Еда</h2>
        </div>

        <div className="flex items-center justify-between textColor px-3 py-2 min-h-[40px] w-full max-w-[260px] rounded-md mt-2">
          <p className="text-sm font-medium">Имя</p>
          <p className="text-sm font-medium">Дата</p>
        </div>

        {/* cards */}
        <div className="flex flex-col gap-3 mt-3">
          {/* 1 card */}
          <div className="textBlue flex flex-col items-center sm:flex-row gap-3 sm:border-0 border-b pb-3 sm:pb-0">
            <div className="px-4 py-2 flex text-sm font-[600] items-stretch justify-between secondBg rounded-md sm:max-w-[280px] w-full">
              <p>Кола</p>
              <p className="text-xs sm:text-sm">12.08.2024</p>
            </div>

            <div className="px-3 py-2 secondBg rounded-md w-full flex flex-col sm:flex-row sm:gap-3 gap-2 items-center justify-between">
              <div className="flex items-center justify-between w-full sm:max-w-[150px] gap-2">
                <button className="w-[28px] h-[28px] flex items-center justify-center text-white rounded-full font-bold text-[16px] cursor-pointer bg-[#004cff] hover:bg-[#102148] transition">
                  -
                </button>
                <p className="flex-1 text-center text-sm font-medium overflow-hidden whitespace-nowrap">
                  1995
                </p>
                <button className="w-[28px] h-[28px] flex items-center justify-center text-white rounded-full font-bold text-[16px] cursor-pointer bg-[#004cff] hover:bg-[#102148] transition">
                  +
                </button>
              </div>

              <div className="text-emerald-700 text-sm font-bold text-center sm:text-right flex gap-2">
                <p>20X</p>
                <p>10095</p>
              </div>
            </div>

            <Button text="Добавить" />
          </div>
        </div>
      </div>
    </div>
  );
}
