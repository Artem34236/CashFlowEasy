"use client";

import { marginForHeader } from "@/app/(home)/page";
import AddUndefinedProduct from "@/components/modal/AddUndefinedProduct";
import Button from "@/components/other/Button";
import { useParams } from "next/navigation";
import { useState } from "react";

type Props = {};

export default function Page({}: Props) {
  const { id } = useParams();
  const [search, setSearch] = useState<string>("");
  const [isAddCategoryProduct, setIsAddCategoryProduct] = useState<boolean>();

  return (
    <div
      className={`firstBg pb-4 sm:px-4 px-2 pt-2 flex-grow ${marginForHeader}`}
    >
      {isAddCategoryProduct && (
        <AddUndefinedProduct close={() => setIsAddCategoryProduct(false)} />
      )}
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
        <div className="flex w-full flex-col sm:flex-row justify-between items-center gap-2 py-3 border-b">
          <h2 className="titleColor text-center text-[20px] font-[700]">Еда</h2>
          <Button
            onClick={() => setIsAddCategoryProduct(true)}
            text="Добавить"
          />
        </div>

        <div className="flex items-center justify-between textColor px-3 py-2 min-h-[40px] w-full rounded-md mt-2">
          <p className="text-sm font-medium max-w-[150px] w-full text-center">
            Имя
          </p>
          <p className="text-sm font-medium max-w-[150px] w-full text-center">
            Категория
          </p>
          <p className="text-sm font-medium max-w-[150px] w-full text-center">
            Дата
          </p>
          <p className="text-sm font-medium max-w-[150px] w-full text-center">
            Цена
          </p>
          <p className="text-sm font-medium max-w-[150px] w-full text-center">
            Количество
          </p>
        </div>

        {/* cards */}
        <div className="flex flex-col gap-3 mt-3">
          {/* 1 card */}
          <div className="flex text-blue-700 secondBg items-center justify-between textColor px-3 py-2 min-h-[40px] w-full rounded-md mt-2">
            <p className="text-sm font-medium max-w-[150px] w-full text-center">
              кола
            </p>
            <p className="text-sm font-medium max-w-[150px] w-full text-center">
              Напитки
            </p>
            <p className="text-sm font-medium max-w-[150px] w-full text-center">
              12.08.2024
            </p>
            <p className="text-sm font-medium max-w-[150px] w-full text-center">
              1995
            </p>
            <p className="text-sm font-medium max-w-[150px] w-full text-center">
              1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
