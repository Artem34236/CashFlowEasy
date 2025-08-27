"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {};

export default function Header({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="flex justify-between items-center 2xl:p-5 xl:p-3 p-2 bg-[#F4631A] fixed w-full max-w-[1920px] z-20 top-0">
      <Link href={"/"} className="flex items-center gap-3 a">
        <img
          src="./svg/logo.svg"
          className="2xl:w-[69px] w-[40px] xl:w-[50px]"
          alt=""
        />
        <p className="2xl:text-[24px] xl:text-[18px] font-[400] text-white xl:pt-[14px] pt-[6px]">
          CASHFLOWEASE
        </p>
      </Link>

      <nav className="items-center justify-between w-full xl:max-w-[440px] max-w-[330px] xl:pt-[14px]  pt-[6px] a md:flex hidden">
        <Link
          href={"/tables"}
          className="text-white 2xl:text-[24px] xl:text-[18px] font-[500] text-center h-11 hover:font-bold px-3 rounded-[4px] transition-all duration-200 flex items-center"
        >
          Таблицы
        </Link>
        <Link
          href={"/categories"}
          className="text-white 2xl:text-[24px] xl:text-[18px] font-[500] text-center h-11 hover:font-bold px-3 rounded-[4px] transition-all duration-200 flex items-center"
        >
          Категории
        </Link>
        <Link
          href={"/statistic"}
          className="text-white 2xl:text-[24px] xl:text-[18px] font-[500] text-center h-11 hover:font-bold px-3 rounded-[4px] transition-all duration-200 flex items-center"
        >
          Статистика
        </Link>
      </nav>
      <div className="b  xl:pt-[14px]  pt-[6px] md:block hidden">
        <Link
          href={"/login"}
          className="text-white 2xl:text-[24px] xl:text-[18px] font-[500] hover:bg-[#0e656a] transition-all duration-400 bg-[#021C1E] py-[12px] px-[38px] rounded-[8px]"
        >
          Вход
        </Link>
      </div>

      {/* Медиа для мобилок */}

      <button
        className="md:hidden block cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src="/svg/menu.svg" alt="" />
      </button>

      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden block fixed top-0 left-0 w-full h-full bg-black transition-all duration-300 opacity-40 z-20 ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`md:hidden fixed top-0 right-0 py-[20px] px-[20px] h-full z-21 transition-all duration-400 overflow-hidden bg-cyan-950 ${
          isOpen ? "block" : "translate-x-full"
        }`}
      >
        <img
          src="/svg/cross.svg"
          onClick={() => setIsOpen(false)}
          className="cursor-pointer ml-auto mb-9  "
          width={28}
          alt=""
        />
        <div className="b xl:pt-[14px] md:pt-[6px] mb-[30px]">
          <Link
            href={"/login"}
            className="text-white 2xl:text-[24px] xl:text-[18px] font-[500] hover:bg-[#0e656a] transition-all duration-400 bg-[#021C1E] py-[12px] px-[38px] rounded-[8px]"
          >
            Вход
          </Link>
        </div>
        <nav className="flex-col items-center w-full xl:max-w-[440px] max-w-[300px] xl:pt-[14px]  pt-[6px] a flex">
          <Link
            href={"/tables"}
            className="text-white 2xl:text-[24px] xl:text-[18px] font-[500] text-center h-11 hover:font-bold px-3 rounded-[4px] transition-all duration-200 flex items-center"
          >
            Таблицы
          </Link>
          <Link
            href={"/categories"}
            className="text-white 2xl:text-[24px] xl:text-[18px] font-[500] text-center h-11 hover:font-bold px-3 rounded-[4px] transition-all duration-200 flex items-center"
          >
            Категории
          </Link>
          <Link
            href={"/statistic"}
            className="text-white 2xl:text-[24px] xl:text-[18px] font-[500] text-center h-11 hover:font-bold px-3 rounded-[4px] transition-all duration-200 flex items-center"
          >
            Статистика
          </Link>
        </nav>
      </div>
    </div>
  );
}
