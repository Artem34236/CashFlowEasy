"use client";

import AddUndefinedProduct from "@/components/modal/AddUndefinedProduct";
import Link from "next/link";
import { useState } from "react";
import { marginForHeader } from "../../page";
import AddCategory from "@/components/modal/AddCategory";

type Props = {};

export default function Page({}: Props) {
  const [search, setSearch] = useState<string>("");
  const [isAddUndefinedProduct, setIsAddUdefinedProduct] = useState<boolean>();

  return (
    <div
      className={`firstBg xl:py-[20px] pb-[15px] xl:px-[60px] sm:px-[30px] px-[10px] pt-[10px] flex-grow ${marginForHeader}`}
    >
      {isAddUndefinedProduct && (
        <AddCategory close={() => setIsAddUdefinedProduct(false)} />
      )}

      {/* Поиск */}
      <div className="secondBg w-full md:py-[10px] py-[6px] flex justify-end md:px-[10px] px-[6px] rounded-[4px]">
        <input
          className="blueText outline-0 border border-[#E5E5E5] md:w-max w-full md:text-[13px] text-[12px] md:px-[12px] px-[8px] md:py-[6px] py-[4px] rounded-[4px]"
          placeholder="Поиск..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          type="text"
        />
      </div>

      <div className="md:px-[24px]">
        {/* Заголовок и кнопка */}
        <div className="sm:flex w-full justify-between items-center xl:py-[20px] md:py-[12px] py-[6px] border-b">
          <h2 className="titleColor text-center mb-[6px] sm:mb-0 xl:text-[22px] text-[18px] font-[700]">
            Изменение категорий
          </h2>
          <button
            onClick={() => setIsAddUdefinedProduct(true)}
            className="b sm:w-max w-full text-[14px] font-[500] px-[16px] py-[8px] hover:bg-[#159097] bg-[#0EA5E9] rounded-md text-white transition-all duration-300"
          >
            Добавить категорию  
          </button>
        </div>

        {/* Шапка таблицы */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:gap-4 lg:gap-6 mt-3">
          <div className="flex items-center justify-between sm:justify-start gap-6 textColor px-4 py-2 min-h-[48px] sm:min-h-[56px] w-full sm:max-w-[360px] rounded-md">
            <p className="text-[13px] sm:text-[14px] font-medium">Имя</p>
            <p className="text-[13px] sm:text-[14px] font-medium">Дата</p>
          </div>
          <div className="px-4 py-2 rounded-md w-full flex items-center justify-between text-[13px] sm:text-[14px]">
            Описание
          </div>
        </div>

        {/* cards */}
        <div className="flex flex-col gap-[10px] mt-3">
          {/* 1 card */}
          <div className="textBlue flex flex-col sm:flex-row items-center gap-[10px] sm:border-b-0 border-b">
            <div className="px-[20px] py-[12px] flex text-[14px] font-[600] items-center justify-between secondBg rounded-[6px] sm:max-w-[360px] w-full">
              <p>Еда</p>
              <p>12.08.2024</p>
            </div>
            <div className="px-[20px] py-[12px] secondBg rounded-[6px] w-full sm:flex-row flex flex-col sm:gap-3 gap-2 items-center justify-between">
              <div className="flex">
                <p className="max-w-[150px] sm:max-w-[200px] md:max-w-[250px] xl:max-w-[400px] overflow-hidden whitespace-nowrap">
                  Кола - 120, вода - 40, водка - 1280, мороженное - 60
                </p>
                <span> ...</span>
              </div>
              <Link
                href={"/categories/2"}
                className="b sm:text-start text-center cursor-pointer text-[13px] w-full sm:w-max font-[500] px-[14px] py-[6px] hover:bg-[#159097] bg-[#0EA5E9] rounded-md text-white transition-all duration-300"
              >
                Изменить
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
