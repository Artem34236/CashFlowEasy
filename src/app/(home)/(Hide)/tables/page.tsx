"use client";

import AddUndefinedProduct from "@/components/modal/AddUndefinedProduct";
import Link from "next/link";
import { useState } from "react";
import { marginForHeader } from "../../page";
import Button from "@/components/other/Button";

type Props = {};

export default function Page({}: Props) {
  const [search, setSearch] = useState<string>("");
  const [isAddUndefinedProduct, setIsAddUdefinedProduct] = useState<boolean>();

  return (
    <div
      className={`firstBg pb-4 lg:px-4 px-2 pt-2 flex-grow ${marginForHeader}`}
    >
      {isAddUndefinedProduct && (
        <AddUndefinedProduct close={() => setIsAddUdefinedProduct(false)} />
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
        <div className="lg:flex w-full justify-between items-center xl:py-[20px] md:py-[12px] py-[6px] border-b">
          <h2 className="titleColor text-center mb-[6px] :mb-0 xl:text-[22px] text-[18px] font-[700]">
            Запись
          </h2>
          <Button text="Добавить продукт" />
        </div>

        {/* Шапка таблицы */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2 mt-3">
          <div className="flex items-center justify-between gap-6 textColor px-4 py-2 min-h-[48px] lg:min-h-[56px] w-full lg:max-w-[360px] rounded-md">
            <p className="text-[13px] text-left lg:text-[14px] font-medium max-w-[200px] w-full">
              Имя
            </p>
            <p className="text-[13px] text-center lg:text-[14px] font-medium max-w-[90px] w-full">
              Дата
            </p>
          </div>
          <div className="px-4 py-2 rounded-md w-full flex items-center justify-between text-[13px] lg:text-[14px]">
            Описание
          </div>
        </div>

        {/* cards */}
        <div className="flex flex-col gap-[10px] mt-3">
          {/* 1 card */}
          <div className="textBlue flex flex-col lg:flex-row items-stretch gap-[10px] lg:border-b-0 border-b">
            <div className="px-[20px] py-[12px] flex text-[14px] font-[600] items-center justify-between secondBg rounded-[6px] lg:max-w-[360px] w-full">
              <p className="max-w-[200px] text-left w-full">Еда</p>
              <p className="max-w-[80px] text-center w-full">12.08.2024</p>
            </div>
            <div className="px-[20px] py-[12px] secondBg rounded-[6px] w-full lg:flex-row flex flex-col lg:gap-3 gap-2 items-center justify-between">
              <div className="flex">
                <p className="max-w-[150px] lg:max-w-[200px] md:max-w-[250px] xl:max-w-[400px] overflow-hidden whitespace-nowrap">
                  Кола - 120, вода - 40, водка - 1280, мороженное - 60
                </p>
                <span> ...</span>
              </div>
              <Button link={true} href="/tables/2" text="Детально" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
