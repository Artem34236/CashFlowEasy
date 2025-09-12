import Link from "next/link";

export const marginForHeader =
  "2xl:mt-[71px] xl:mt-[54px] md:mt-[52px] mt-[46px]";

export default function Home() {
  return (
    <div className={`firstBg xl:py-[50px] ${marginForHeader} pb-[20px]`}>
      {/* Секция 1  */}

      <div className="relative mx-auto max-w-[1200px] h-[600px] bg-[url('/img/homeOldMan.webp')] bg-center bg-cover bg-no-repeat">
        <div className="absolute bg-black w-full h-full opacity-50"></div>

        <div className="absolute z-10 w-full h-full">
          <div className="xl:max-w-[590px] max-w-[380px] mx-auto mt-[180px]">
            <div className="flex items-center justify-between max-w-[300px] mx-auto mb-[30px]">
              <img src="/svg/leftPetalWhite.svg" alt="" />
              <p className="text-white a font-[500] xl:text-[24px] text-[20px]">
                Забота о бюджете
              </p>
              <img src="/svg/rightPetalWhite.svg" alt="" />
            </div>

            <h1 className="text-white a font-[500] 2xl:text-[64px] xl:text-[56px] text-[42px] text-center">
              Контроль расходов в ваших руках
            </h1>
          </div>
        </div>
      </div>

      {/* Секция 2  */}

      <div className="mx-auto max-w-[1200px] sm:p-0 px-[10px]">
        <div className="flex items-center justify-between xl:max-w-[500px] md:max-w-[400px] max-w-[300px] mx-auto xl:mt-[140px] md:mt-[100px] mt-[50px] mb-[50px]">
          <img
            src="/svg/leftPetalBlue.svg"
            alt=""
            className="w-[40px] md:w-[50px] xl:w-[60px]"
          />
          <p className="xl:text-[42px] md:text-[34px] text-[24px] font-[400] titleColor text-center">
            CASHFLOWEASE
          </p>
          <img
            src="/svg/rightPetalBlue.svg"
            alt=""
            className="w-[40px] md:w-[50px] xl:w-[60px]"
          />
        </div>

        <div className="flex md:flex-row flex-col items-center justify-between md:px-[85px] mb-[50px] gap-5">
          <div className="max-w-[415px] b ">
            <h3 className="xl:text-[26px] text-[24px] font-[500] mb-[16px] titleColor">
              Планирование бюджета
            </h3>
            <p className="xl:text-[20px] text-[18px] font-[400] textColor leading-[28px]">
              Контролируйте каждый рубль. CashFlowEase помогает вам легко
              отслеживать все поступления и расходы. Установите ежемесячные
              лимиты, распределите траты по категориям и мгновенно вносите
              изменения. Вы всегда знаете, куда уходят ваши деньги — и как их
              сохранить.
            </p>
          </div>
          <div>
            <img
              className="min-w-[270px]"
              src="/img/homeManyOldMen.webp"
              alt=""
            />
          </div>
        </div>

        <div className="flex md:flex-row-reverse flex-col items-center justify-between md:px-[85px] gap-5">
          <div className="max-w-[415px] b">
            <h3 className="xl:text-[26px] text-[24px] font-[500] mb-[16px] titleColor">
              Достижение финансовых целей
            </h3>
            <p className="xl:text-[20px] text-[18px] font-[400] textColor leading-[28px]">
              Финансовая цель — не мечта, а план. Укажите, к какой сумме вы
              хотите прийти и в какой срок — мы поможем построить путь. Система
              подскажет, как распределять доход и где можно сэкономить. Вы
              увидите чёткий прогресс, а не просто цифры.
            </p>
          </div>
          <div>
            <img
              className="min-w-[270px]"
              src="/img/homeManySmileOldMen.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Секция 3  */}

      <div className="mx-auto max-w-[1200px] md:px-0 px-[10px]">
        {/* Заголовок */}
        <div className="flex items-center justify-between xl:max-w-[500px] md:max-w-[400px] max-w-[300px] mx-auto xl:mt-[140px] md:mt-[100px] mt-[50px] mb-[50px]">
          <img
            src="/svg/leftPetalBlue.svg"
            alt=""
            className="w-[40px] md:w-[50px] xl:w-[60px]"
          />
          <p className="xl:text-[42px] md:text-[34px] text-[24px] font-[400] titleColor text-center">
            Что вы получите?
          </p>
          <img
            src="/svg/rightPetalBlue.svg"
            alt=""
            className="w-[40px] md:w-[50px] xl:w-[60px]"
          />
        </div>

        {/* Карточки преимуществ */}
        <div className="max-w-[1300px] w-full mx-auto grid md:grid-cols-3 gap-3 md:gap-6 text-center">
          {/* Левая колонка */}
          <div className="secondBg textColor rounded-[8px] px-[20px] py-[30px] flex items-center justify-center text-[14px] sm:text-[18px] md:text-[22px] xl:text-[28px] leading-snug">
            Безопасность данных <br /> — ваши финансы под надёжной защитой
          </div>

          {/* Центральная колонка с двумя карточками */}
          <div className="flex flex-col gap-3 md:gap-6">
            <div className="secondBg textColor rounded-[8px] px-[20px] py-[30px] flex items-center justify-center text-[14px] sm:text-[18px] md:text-[22px] xl:text-[28px] leading-snug">
              Удобство на всех устройствах <br /> — доступно с телефона и
              компьютера
            </div>
            <div className="secondBg textColor rounded-[8px] px-[20px] py-[30px] flex items-center justify-center text-[14px] sm:text-[18px] md:text-[22px] xl:text-[28px] leading-snug">
              Категоризация <br /> — делите траты по категориям для лучшего
              анализа
            </div>
          </div>

          {/* Правая колонка */}
          <div className="secondBg textColor rounded-[8px] px-[20px] py-[30px] flex items-center justify-center text-[14px] sm:text-[18px] md:text-[22px] xl:text-[28px] leading-snug">
            Планирование бюджета <br /> — задавайте финансовые цели и сроки их
            достижения
          </div>
        </div>
      </div>

      {/* Секция 4  */}

      <div className="mx-auto max-w-[1200px] px-[10px] flex flex-col md:flex-row-reverse items-center justify-between gap-10 mt-[120px] md:mt-[180px] lg:mt-[220px] 2xl:mt-[250px]">
        <div className="flex-shrink-0">
          <img
            className="w-full max-w-[320px] md:max-w-[400px] lg:max-w-[480px]"
            src="/img/homeHarmony.webp"
            alt="Финансовая гармония"
          />
        </div>

        <div className="max-w-[775px] text-center md:text-left">
          <h3 className="titleColor font-[500] text-[26px] md:text-[32px] lg:text-[36px] mb-[10px] leading-snug">
            Готовы взять финансы под контроль?
          </h3>

          <p className="textColor font-[400] md:font-[500] text-[20px] md:text-[24px] lg:text-[28px] mb-[40px] md:mb-[60px] leading-relaxed">
            Начните прямо сейчас — ваш путь к стабильности и уверенности
            начинается с одного шага.
          </p>

          <div>
            <Link
              href={"/tables"}
              className="inline-block text-white hover:bg-[#159097] bg-[#0EA5E9] text-[18px] md:text-[20px] lg:text-[22px] font-[500] transition-all duration-300  py-[12px] px-[32px] md:px-[38px] rounded-[6px] shadow-md"
            >
              Начнём?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
