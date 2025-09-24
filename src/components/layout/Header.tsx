"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../other/Button";

type Props = {};

export default function Header({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="flex justify-between items-center 2xl:p-3 xl:p-2 p-2 secondBg fixed w-full max-w-[1920px] z-20 top-0">
      {/* Лого */}
      <Link href={"/"} className="flex items-center gap-2">
        <img
          src="/svg/logo.svg"
          className="2xl:w-[50px] w-[32px] xl:w-[40px]"
          alt="logo"
        />
        <p className="2xl:text-[18px] xl:text-[16px] text-[14px] font-[400] textBlue">
          CASHFLOWEASE
        </p>
      </Link>

      {/* Навигация (Desktop) */}
      <nav className="items-center justify-between w-full xl:max-w-[380px] max-w-[260px] md:flex hidden">
        <Link
          href={"/tables"}
          className="textBlue 2xl:text-[18px] xl:text-[16px] text-[14px] font-[500] text-center h-9 hover:scale-105 rounded-[4px] transition-all duration-200 flex items-center"
        >
          Запись
        </Link>
        <Link
          href={"/categories"}
          className="textBlue 2xl:text-[18px] xl:text-[16px] text-[14px] font-[500] text-center h-9 hover:scale-105 rounded-[4px] transition-all duration-200 flex items-center"
        >
          Категории
        </Link>
        <Link
          href={"/statistic"}
          className="textBlue 2xl:text-[18px] xl:text-[16px] text-[14px] font-[500] text-center h-9 hover:scale-105 rounded-[4px] transition-all duration-200 flex items-center"
        >
          Статистика
        </Link>
      </nav>

      {/* Кнопка входа (Desktop) */}
      <div className="md:block hidden">
        <Link
          href={"/login"}
          className="text-white 2xl:text-[16px] xl:text-[14px] font-[500] hover:bg-[#159097] transition-all duration-300 bg-[#0EA5E9] py-[8px] px-[20px] rounded-[6px]"
        >
          Вход
        </Link>
      </div>

      {/* Кнопка меню (Mobile) */}
      <button
        className="md:hidden block cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src="/svg/menu.svg" alt="menu" className="w-[22px]" />
      </button>

      {/* Фон для мобильного меню */}
      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black transition-all duration-300 opacity-40 z-20 ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>

      {/* Мобильное меню */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`md:hidden fixed top-0 right-0 py-[16px] px-[24px] h-full z-30 w-[40%] transition-all duration-300 overflow-hidden bg-cyan-950 flex flex-col items-center ${
          isOpen ? "block" : "translate-x-full"
        }`}
      >
        <img
          src="/svg/cross.svg"
          onClick={() => setIsOpen(false)}
          className="cursor-pointer ml-auto mb-6"
          width={22}
          alt="close"
        />
        <div className="mb-6">
          <Button link={true} href="/login" text='Вход'/>
        </div>
        <nav className="flex-col items-center w-full max-w-[240px] flex gap-3">
          <Link
            onClick={() => setIsOpen(false)}
            href={"/tables"}
            className="text-white text-[16px] font-[500] text-center hover:font-bold transition-all duration-200"
          >
            Запись
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href={"/categories"}
            className="text-white text-[16px] font-[500] text-center hover:font-bold transition-all duration-200"
          >
            Категории
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href={"/statistic"}
            className="text-white text-[16px] font-[500] text-center hover:font-bold transition-all duration-200"
          >
            Статистика
          </Link>
        </nav>
      </div>
    </div>
  );
}
