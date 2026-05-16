// HoneyTrip v4
// Base currency is GBP.

const ratesToGBP = {
  GBP: 1,
  USD: 1.33,
  AMD: 490.80,
  TOMAN: 239910
};

const currencies = [
  { code: "GBP", name: "UK Pound", flag: "🇬🇧", symbol: "£", decimals: 2 },
  { code: "USD", name: "US Dollar", flag: "🇺🇸", symbol: "$", decimals: 2 },
  { code: "AMD", name: "Armenian Dram", flag: "🇦🇲", symbol: "֏", decimals: 0 },
  { code: "TOMAN", name: "Iranian Toman", flag: "🇮🇷", symbol: "", decimals: 0 }
];

const places = [
  {
    title: "میدان جمهوری",
    subtitle: "Republic Square",
    emoji: "🏛️",
    description: "یکی از معروف‌ترین نقاط ایروان. برای قدم زدن، عکس گرفتن و دیدن فواره‌های موزیکال در شب خیلی محبوب است.",
    time: "زمان پیشنهادی: عصر یا شب",
    cost: "هزینه: رایگان",
    map: "https://www.google.com/maps/search/?api=1&query=Republic+Square+Yerevan"
  },
  {
    title: "کاسکاد",
    subtitle: "Cascade Complex",
    emoji: "⛰️",
    description: "پله‌های بزرگ و معروف ایروان با منظره‌ی خوب از شهر. اطرافش کافه، مجسمه و فضای هنری دارد.",
    time: "زمان پیشنهادی: نزدیک غروب",
    cost: "هزینه: رایگان",
    map: "https://www.google.com/maps/search/?api=1&query=Cascade+Complex+Yerevan"
  },
  {
    title: "ماتناداران",
    subtitle: "Matenadaran",
    emoji: "📜",
    description: "موزه و مرکز نسخه‌های خطی قدیمی ارمنستان. برای کسانی که تاریخ و فرهنگ دوست دارند جای خاصی است.",
    time: "زمان پیشنهادی: روز",
    cost: "هزینه: معمولاً بلیط دارد",
    map: "https://www.google.com/maps/search/?api=1&query=Matenadaran+Yerevan"
  },
  {
    title: "بازار ورنیساژ",
    subtitle: "Vernissage Market",
    emoji: "🛍️",
    description: "بازار روباز برای خرید سوغاتی، صنایع دستی، نقاشی، فرش کوچک و چیزهای سنتی ارمنی.",
    time: "زمان پیشنهادی: آخر هفته و روز",
    cost: "هزینه: رایگان برای ورود",
    map: "https://www.google.com/maps/search/?api=1&query=Vernissage+Market+Yerevan"
  },
  {
    title: "مسجد کبود ایروان",
    subtitle: "Blue Mosque",
    emoji: "🕌",
    description: "یکی از مکان‌های تاریخی و آرام شهر که برای ایرانی‌ها هم حس آشنایی دارد.",
    time: "زمان پیشنهادی: روز",
    cost: "هزینه: معمولاً رایگان",
    map: "https://www.google.com/maps/search/?api=1&query=Blue+Mosque+Yerevan"
  },
  {
    title: "موزه تاریخ ارمنستان",
    subtitle: "History Museum of Armenia",
    emoji: "🏺",
    description: "کنار میدان جمهوری قرار دارد و برای شناخت تاریخ و فرهنگ ارمنستان گزینه‌ی خوبی است.",
    time: "زمان پیشنهادی: روز",
    cost: "هزینه: معمولاً بلیط دارد",
    map: "https://www.google.com/maps/search/?api=1&query=History+Museum+of+Armenia+Yerevan"
  }
];

const foods = [
  {
    armenian: "Խորոված",
    persian: "خورواتس / کباب ارمنی",
    pronounce: "Khorovats",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80",
    description: "کباب معروف ارمنی، معمولاً با گوشت گوسفند، گاو یا مرغ روی زغال درست می‌شود.",
    ingredients: "گوشت، پیاز، نمک، فلفل، ادویه، گاهی سبزیجات کبابی"
  },
  {
    armenian: "Տոլմա",
    persian: "دلمه ارمنی",
    pronounce: "Tolma",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=80",
    description: "شبیه دلمه خودمان؛ معمولاً با برگ انگور یا سبزیجات پرشده.",
    ingredients: "برگ انگور یا فلفل/بادمجان، گوشت چرخ‌کرده، برنج، سبزی، پیاز، ادویه"
  },
  {
    armenian: "Լավաշ",
    persian: "نان لواش ارمنی",
    pronounce: "Lavash",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=80",
    description: "نان نازک و سنتی ارمنی که کنار بیشتر غذاها سرو می‌شود.",
    ingredients: "آرد، آب، نمک، خمیرمایه"
  },
  {
    armenian: "Հարիսա",
    persian: "هاریسا",
    pronounce: "Harissa",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=80",
    description: "غذای سنتی غلیظ شبیه حلیم، معمولاً با گندم و مرغ یا گوشت درست می‌شود.",
    ingredients: "گندم پوست‌کنده، مرغ یا گوشت، کره، نمک"
  },
  {
    armenian: "Ղափամա",
    persian: "قاپاما / کدو پرشده",
    pronounce: "Ghapama",
    image: "https://images.unsplash.com/photo-1506917728037-b6af01a7d403?auto=format&fit=crop&w=1000&q=80",
    description: "کدوی شکم‌پر ارمنی، معمولاً طعم شیرین و مجلسی دارد.",
    ingredients: "کدو، برنج، کشمش، زردآلو خشک، آلو، عسل، دارچین، مغزها"
  },
  {
    armenian: "Գաթա",
    persian: "گاتا / شیرینی ارمنی",
    pronounce: "Gata",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    description: "شیرینی سنتی ارمنی، مناسب کنار چای یا قهوه.",
    ingredients: "آرد، کره، شکر، تخم‌مرغ، وانیل، گاهی مغزها"
  },
  {
    armenian: "Սպաս",
    persian: "سوپ اسپاس",
    pronounce: "Spas",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80",
    description: "سوپ ماستی ارمنی، سبک و متفاوت. بعضی نسخه‌ها گرم و بعضی سرد سرو می‌شوند.",
    ingredients: "ماست، گندم یا بلغور، سبزی، تخم‌مرغ، آب، نمک"
  },
  {
    armenian: "Լահմաջո",
    persian: "لهمجون",
    pronounce: "Lahmajo",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80",
    description: "نان نازک با لایه‌ای از گوشت و ادویه، شبیه پیتزای خیلی نازک.",
    ingredients: "خمیر نازک، گوشت چرخ‌کرده، گوجه، فلفل، پیاز، سبزی، ادویه"
  }
];

const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("fromCurrency");
const resultsDiv = document.getElementById("results");
const placesList = document.getElementById("placesList");
const foodList = document.getElementById("foodList");
const tabButtons = document.querySelectorAll(".tab-button");
const pages = document.querySelectorAll(".page");

function formatNumber(value, decimals) {
  return new Intl.NumberFormat("en-GB", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

function convert() {
  const amount = Number(amountInput.value) || 0;
  const fromCode = fromCurrencySelect.value;
  const fromRate = ratesToGBP[fromCode];
  const amountInGBP = amount / fromRate;

  resultsDiv.innerHTML = "";

  currencies.forEach(currency => {
    const convertedValue = amountInGBP * ratesToGBP[currency.code];
    const formattedValue = formatNumber(convertedValue, currency.decimals);
    const displayValue = currency.symbol
      ? `${currency.symbol}${formattedValue}`
      : `${formattedValue} Toman`;

    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `
      <div class="currency-left">
        <div class="flag">${currency.flag}</div>
        <div>
          <div class="currency-name">${currency.name}</div>
          <div class="currency-code">${currency.code}</div>
        </div>
      </div>
      <div class="value">${displayValue}</div>
    `;

    resultsDiv.appendChild(card);
  });
}

function renderPlaces() {
  placesList.innerHTML = "";

  places.forEach(place => {
    const card = document.createElement("article");
    card.className = "place-card";
    card.innerHTML = `
      <div class="place-image">${place.emoji}</div>
      <div class="place-content">
        <h3 class="place-title">${place.title}</h3>
        <div class="place-subtitle">${place.subtitle}</div>
        <p class="place-description">${place.description}</p>
        <div class="place-meta">
          <div>🕒 ${place.time}</div>
          <div>💰 ${place.cost}</div>
        </div>
        <a class="map-link" href="${place.map}" target="_blank" rel="noopener">باز کردن در نقشه</a>
      </div>
    `;

    placesList.appendChild(card);
  });
}

function renderFoods() {
  foodList.innerHTML = "";

  foods.forEach(food => {
    const card = document.createElement("article");
    card.className = "place-card";

    card.innerHTML = `
      <div class="place-image">
        <img src="${food.image}" alt="${food.persian}" loading="lazy">
      </div>
      <div class="place-content">
        <div class="armenian-name">${food.armenian}</div>
        <h3 class="place-title">${food.persian}</h3>
        <div class="place-subtitle">${food.pronounce}</div>
        <p class="place-description">${food.description}</p>
        <div class="ingredients">
          <strong>مواد اصلی:</strong><br>
          ${food.ingredients}
        </div>
      </div>
    `;

    foodList.appendChild(card);
  });
}

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const pageId = button.dataset.page;

    tabButtons.forEach(tab => tab.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(pageId).classList.add("active");
  });
});

amountInput.addEventListener("input", convert);
fromCurrencySelect.addEventListener("change", convert);

convert();
renderPlaces();
renderFoods();
