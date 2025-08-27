import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="flex justify-between items-center px-5 py-4 bg-[#F4631A]">
      {/* Лого */}
      <Link href="/" className="flex items-center gap-3">
        <img
          src="/svg/logo.svg"
          alt="Logo"
          className="w-[40px] sm:w-[50px] xl:w-[60px] 2xl:w-[69px]"
        />
        <p className="text-white font-[400] text-[14px] sm:text-[16px] xl:text-[20px] 2xl:text-[24px] leading-none">
          CASHFLOWEASE
        </p>
      </Link>

      {/* Контакты */}
      <Link
        href="https://github.com/Artem34236"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-right font-[400] text-[12px] sm:text-[14px] xl:text-[18px] 2xl:text-[20px] leading-tight"
      >
        Сделано: <br />
        <span className="underline hover:text-gray-200 transition">
          ascarovartem.base@gmail.com
        </span>
      </Link>
    </div>
  );
}
