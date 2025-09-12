export default function Custom404() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#004d4d] text-white">
      <div className="text-center px-6">
        {/* Большой заголовок */}
        <h1 className="text-8xl font-bold text-orange-500 drop-shadow-lg">404</h1>
        <p className="mt-4 text-xl text-gray-200">
          Упс... Страница не найдена
        </p>

        {/* Иллюстрация (опционально картинка/иконка) */}
        <div className="mt-6">
          <svg
            className="mx-auto h-24 w-24 text-orange-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Кнопка */}
        <a
          href="/"
          className="mt-8 inline-block rounded-xl bg-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-orange-600"
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  );
}