"use client";

type Props = {
  close: () => void;
};

export default function AddCategoryProduct({ close }: Props) {
  return (
    <div onClick={close} className="fixed inset-0 z-[21] bg-black/50 flex items-center justify-center px-4 sm:px-6">
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-[500px] secondBg rounded-2xl shadow-xl p-4 sm:p-6 relative">
        <button
          onClick={close}
          className="absolute top-3 right-3 textColor hover:textBlue transition cursor-pointer text-lg sm:text-xl"
        >
          ✕
        </button>

        <h2 className="text-lg sm:text-xl font-semibold textColor text-center mb-5 sm:mb-6">
          Добавить продукт
        </h2>

        {/* Форма */}
        <form className="flex flex-col gap-3 sm:gap-4">
          <label className="flex items-center gap-3 firstBg rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm focus-within:ring-2 focus-within:ring-blueBg transition">
            <img
              src="/svg/account.svg"
              alt="Название"
              className="w-5 h-5 textBlue"
            />
            <input
              name="productName"
              type="text"
              placeholder="Название продукта"
              className="flex-1 bg-transparent outline-none textColor placeholder:text-gray-400 text-sm sm:text-base"
            />
          </label>

          <label className="flex items-center gap-3 firstBg rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm focus-within:ring-2 focus-within:ring-blueBg transition">
            <img src="/svg/sale.svg" alt="Цена" className="w-5 h-5 textBlue" />
            <input
              name="productPrice"
              type="text"
              placeholder=""
              className="flex-1 bg-transparent outline-none textColor placeholder:text-gray-400 text-sm sm:text-base"
            />
          </label>

          <button className="b w-full text-[14px] sm:text-[15px] font-[500] px-[14px] sm:px-[16px] py-[10px] sm:py-[12px] hover:bg-[#159097] bg-[#0EA5E9] rounded-lg text-white transition-all duration-300">
            Добавить продукта
          </button>
        </form>
      </div>
    </div>
  );
}
