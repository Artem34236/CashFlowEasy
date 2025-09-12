"use client";

import { marginForHeader } from "@/app/(home)/page";
import AddUndefinedProduct from "@/components/modal/AddUndefinedProduct";
import Link from "next/link";
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
          <button
            onClick={() => setIsAddCategoryProduct(true)}
            className="b sm:w-max w-full text-[14px] font-[500] px-[16px] py-[8px] hover:bg-[#159097] bg-[#0EA5E9] rounded-md text-white transition-all duration-300"
          >
            Добавить продукт
          </button>
        </div>

        <div className="flex items-center justify-between textColor px-3 py-2 min-h-[40px] w-full max-w-[260px] rounded-md mt-2">
          <p className="text-sm font-medium">Имя</p>
          <p className="text-sm font-medium">Дата</p>
        </div>

        {/* cards */}
        <div className="flex flex-col gap-3 mt-3">
          {/* 1 card */}
          <div className="textBlue flex flex-col sm:flex-row items-center gap-3 sm:border-0 border-b pb-3 sm:pb-0">
            <div className="px-4 py-2 flex text-sm font-[600] items-center justify-between secondBg rounded-md sm:max-w-[280px] w-full">
              <p>Кола</p>
              <p className="text-xs sm:text-sm">12.08.2024</p>
            </div>

            <div className="px-3 py-2 secondBg rounded-md w-full flex flex-col sm:flex-row sm:gap-3 gap-2 items-center justify-between">
              <div className="flex sm:justify-start justify-center items-center w-full sm:max-w-[150px] gap-2">
                <p className=" text-center text-sm font-medium">Цена:</p>
                <p className=" text-center text-sm font-medium">
                  1995
                </p>
              </div>
            </div>

            <button className="b text-center text-xs font-[500] px-4 py-2 hover:bg-[#159097] bg-[#0EA5E9] rounded-md text-white transition cursor-pointer w-full sm:w-auto">
              Изменить
            </button>
             <button className="b text-center text-xs font-[500] px-4 py-2 hover:bg-[#971715] bg-[#e9360e] rounded-md text-white transition cursor-pointer w-full sm:w-auto">
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
