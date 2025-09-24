export default function Custom404() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#f0f8ff] text-gray-800 px-4">
      <div className="text-center">
        {/* Заголовок */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-[#0077b6] drop-shadow-sm">
          404
        </h1>
        <p className="mt-3 text-lg md:text-xl text-gray-600">
          Упс... страница не найдена
        </p>
        {/* Кнопка */}
        <a
          href="/"
          className="mt-6 inline-block rounded-lg bg-[#0096c7] px-5 py-2 text-base md:text-lg font-medium text-white shadow transition hover:bg-[#0077b6]"
        >
          На главную
        </a>
      </div>
    </div>
  );
}
