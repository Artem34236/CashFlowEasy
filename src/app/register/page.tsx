"use client";

import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  return (
    <div
      className={`firstBg h-screen xl:py-[20px] pb-[15px] xl:px-[60px] sm:px-[30px] px-[10px] pt-[10px] flex items-center justify-center`}
    >
      <form className="max-w-[500px] bg-white p-[20px] rounded-md w-full">
        <h1 className="text-center mb-[30px] text-[20px] font-[600]">
          Регистрация
        </h1>

        <div className="flex flex-col items-center justify-center gap-[10px] mb-10">
          <label
            htmlFor="login"
            className="bg-blue-500 rounded-sm p-1 px-3 w-full flex justify-between gap-2"
          >
            <input
              required
              className="outline-0 text-white w-full"
              placeholder="Введите логин"
              type="text"
              name="login"
              id="login"
            />
          </label>

          <label
            htmlFor="login"
            className="bg-blue-500 rounded-sm p-1 px-3 w-full flex justify-between gap-2"
          >
            <input
              required
              className="outline-0 text-white w-full"
              placeholder="Введите пароль"
              type="text"
              name="login"
              id="login"
            />
            <button className="cursor-pointer" type="button">
              <img src="/svg/openYay.svg " alt="" />
            </button>
          </label>

            <label
            htmlFor="login"
            className="bg-blue-500 rounded-sm p-1 px-3 w-full flex justify-between gap-2"
          >
            <input
              required
              className="outline-0 text-white w-full"
              placeholder="Подтвердите пароль"
              type="text"
              name="login"
              id="login"
            />
            <button className="cursor-pointer" type="button">
              <img src="/svg/openYay.svg " alt="" />
            </button>
          </label>
        </div>

        <button className="blueBg px-[20px] py-[10px] rounded-sm mx-auto block text-white font-[600] cursor-pointer mb-4">
          Регистрация
        </button>

        <p className="text-right">
          Уже есть аккаунт? <Link className="text-amber-400" href={"login"}>Вход</Link>
        </p>
      </form>
    </div>
  );
}
