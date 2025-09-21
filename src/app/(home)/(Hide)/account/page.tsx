import EmptyImage from "@/components/other/EmptyImage";
import { marginForHeader } from "../../page";

type Props = {};

export default function page({}: Props) {
  return (
    <div
      className={`firstBg xl:py-[20px] pb-[15px] xl:px-[60px] sm:px-[30px] px-[10px] pt-[10px] flex-grow ${marginForHeader}`}
    >
      <div className="bg-white p-5">
        <div className="flex justify-between">
          <div>
            <EmptyImage />
          </div>
          <div className="w-[70%] flex flex-col gap-[20px] mt-[20px]">
            <label
              htmlFor="login"
              className="bg-blue-500 rounded-sm p-1 px-3 w-full flex justify-between gap-2 max-w-[300px]"
            >
              <input
                required
                className="outline-0 text-white w-full"
                placeholder="Имя"
                type="text"
                name="login"
                id="login"
              />

              <button className="cursor-pointer" type="button">
                <img src="/svg/edit.svg " alt="" />
              </button>
            </label>

            <label
              htmlFor="login"
              className="bg-blue-500 rounded-sm p-1 px-3 w-full flex justify-between gap-2 max-w-[300px]"
            >
              <input
                required
                className="outline-0 text-white w-full"
                placeholder="Пароль"
                type="text"
                name="password"
                id="password"
              />

              <button className="cursor-pointer" type="button">
                <img src="/svg/edit.svg " alt="" />
              </button> 
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
