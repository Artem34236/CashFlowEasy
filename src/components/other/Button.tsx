import Link from "next/link";
import { MouseEventHandler } from "react";

type Props = {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  link?: boolean;
  href?: string;
  text:string
};

export default function Button({
  onClick,
  className,
  link = false,
  href = "",
  text
}: Props) {
  return link ? (
    <Link
      href={href}
      className={`b sm:w-max w-full sm:text-left text-center text-[14px] cursor-pointer font-[500] px-[16px] py-[8px] hover:bg-[#159097] bg-[#0EA5E9] rounded-md text-white transition-all duration-300 ${
        className ?? ""
      }`}
    >
      {text}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`b sm:w-max w-full sm:text-left text-center text-[14px] cursor-pointer font-[500] px-[16px] py-[8px] hover:bg-[#159097] bg-[#0EA5E9] rounded-md text-white transition-all duration-300 ${
        className ?? ""
      }`}
    >
      {text}
    </button>
  );
}
