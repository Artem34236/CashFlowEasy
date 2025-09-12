import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="flex justify-between items-center px-3 py-2 secondBg overflow-hidden">
      {/* Лого */}
      <Link href="/" className="flex items-center gap-2">
        <img
          src="/svg/logo.svg"
          alt="Logo"
          className="w-[28px] sm:w-[36px] xl:w-[44px] 2xl:w-[50px]"
        />
        <p className="textBlue font-[400] text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[18px] leading-none">
          CASHFLOWEASE
        </p>
      </Link>

      {/* Контакты */}
      <Link
        href="https://github.com/Artem34236"
        target="_blank"
        rel="noopener noreferrer"
        className="textBlue text-right font-[400] text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-tight"
      >
        Сделано: <br />
        <span className="underline hover:text-blue-950 transition">
          ascarovartem.base@gmail.com
        </span>
      </Link>
    </div>
  );
}
