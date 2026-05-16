// HoneyTrip v6
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
    emoji: "🥩",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Armenian%20khorovats%20barbecue%20on%20grill.jpg",
    description: "کباب معروف ارمنی، معمولاً با گوشت گوسفند، گاو یا مرغ روی زغال درست می‌شود.",
    ingredients: "گوشت، پیاز، نمک، فلفل، ادویه، گاهی سبزیجات کبابی"
  },
  {
    armenian: "Տոլմա",
    persian: "دلمه ارمنی",
    pronounce: "Tolma",
    emoji: "🍃",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yalanchi%20sarma.jpg",
    description: "دلمه برگ مو یا سبزیجات پرشده؛ یکی از غذاهای آشنای منطقه و محبوب در ارمنستان.",
    ingredients: "برگ انگور، گوشت چرخ‌کرده یا نسخه گیاهی، برنج، سبزی، پیاز، ادویه"
  },
  {
    armenian: "Լավաշ",
    persian: "نان لواش ارمنی",
    pronounce: "Lavash",
    emoji: "🫓",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lavash%20arm%C3%A9nien.jpg",
    description: "نان نازک و سنتی ارمنی که کنار بیشتر غذاها سرو می‌شود.",
    ingredients: "آرد، آب، نمک، خمیرمایه"
  },
  {
    armenian: "Հարիսա",
    persian: "هاریسا",
    pronounce: "Harissa",
    emoji: "🍲",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Armenian%20Harisa.JPG",
    description: "غذای سنتی غلیظ شبیه حلیم، معمولاً با گندم و مرغ یا گوشت درست می‌شود.",
    ingredients: "گندم پوست‌کنده، مرغ یا گوشت، کره، نمک"
  },
  {
    armenian: "Ղափամա",
    persian: "قاپاما / کدو پرشده",
    pronounce: "Ghapama",
    emoji: "🎃",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ghapama.jpg",
    description: "کدوی شکم‌پر ارمنی، معمولاً طعم شیرین و مجلسی دارد.",
    ingredients: "کدو، برنج، کشمش، زردآلو خشک، آلو، عسل، دارچین، مغزها"
  },
  {
    armenian: "Գաթա",
    persian: "گاتا / شیرینی ارمنی",
    pronounce: "Gata",
    emoji: "🥐",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Armenian%20Gata%20in%20slices%20%281%29.jpg",
    description: "شیرینی سنتی ارمنی، مناسب کنار چای یا قهوه.",
    ingredients: "آرد، کره، شکر، تخم‌مرغ، وانیل، گاهی مغزها"
  },
  {
    armenian: "Սպաս",
    persian: "سوپ اسپاس",
    pronounce: "Spas",
    emoji: "🥣",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Armenian%20Spas%20Soup.jpg",
    description: "سوپ ماستی ارمنی، سبک و متفاوت. بعضی نسخه‌ها گرم و بعضی سرد سرو می‌شوند.",
    ingredients: "ماست، گندم یا بلغور، سبزی، تخم‌مرغ، آب، نمک"
  },
  {
    armenian: "Լահմաջո",
    persian: "لهمجون",
    pronounce: "Lahmajo",
    emoji: "🍕",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Armenian%20lahmacun%20%282%29.JPG",
    description: "نان نازک با لایه‌ای از گوشت و ادویه، شبیه پیتزای خیلی نازک.",
    ingredients: "خمیر نازک، گوشت چرخ‌کرده، گوجه، فلفل، پیاز، سبزی، ادویه"
  },
  {
    armenian: "Ժենգյալով հաց",
    persian: "ژینگیالوف هاتس / نان سبزیجات",
    pronounce: "Zhingyalov Hats",
    emoji: "🌿",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jengyalov%20Hac.JPG",
    description: "نان نازک پرشده با سبزی‌های مختلف؛ بیشتر با منطقه آرتساخ شناخته می‌شود و در ارمنستان هم پیدا می‌شود.",
    ingredients: "خمیر نازک، سبزیجات معطر، اسفناج یا تره، نمک، کمی روغن"
  },
  {
    armenian: "Մանթի",
    persian: "مانتی",
    pronounce: "Manti",
    emoji: "🥟",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Manti%20in%20a%20bowl.jpg",
    description: "خمیرهای کوچک پرشده با گوشت که معمولاً با ماست یا سس سرو می‌شود.",
    ingredients: "خمیر، گوشت چرخ‌کرده، پیاز، ادویه، ماست یا سس"
  },
  {
    armenian: "Բաստուրմա",
    persian: "باستورما",
    pronounce: "Basturma",
    emoji: "🥓",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pastirma.jpg",
    description: "گوشت خشک و ادویه‌دار با طعم قوی؛ معمولاً به صورت ورقه‌ای سرو می‌شود.",
    ingredients: "گوشت گاو خشک‌شده، سیر، فلفل، ادویه مخصوص"
  },
  {
    armenian: "Սուջուխ",
    persian: "سوجوخ",
    pronounce: "Sujukh",
    emoji: "🌭",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sujuk.jpg",
    description: "سوسیس خشک و ادویه‌دار که در منطقه قفقاز و ارمنستان محبوب است.",
    ingredients: "گوشت، فلفل، سیر، نمک، ادویه"
  },
  {
    armenian: "Խաշ",
    persian: "خاش",
    pronounce: "Khash",
    emoji: "🍖",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Khash%20dish.jpg",
    description: "غذای سنتی سنگین که معمولاً صبح زود و در فصل سرد خورده می‌شود.",
    ingredients: "پاچه یا قسمت‌های ژلاتینی گوشت، سیر، نمک، نان خشک"
  },
  {
    armenian: "Փախլավա",
    persian: "باقلوا ارمنی",
    pronounce: "Pakhlava",
    emoji: "🍯",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Baklava%281%29.png",
    description: "شیرینی لایه‌ای با مغزها و شربت شیرین؛ برای چای عالی است.",
    ingredients: "خمیر لایه‌ای، گردو یا پسته، شکر، عسل یا شربت"
  },
  {
    armenian: "Պոնչիկ",
    persian: "پونچیک",
    pronounce: "Ponchik",
    emoji: "🍩",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ponchik.jpg",
    description: "شیرینی شبیه دونات، معمولاً با کرم یا مربا پر می‌شود.",
    ingredients: "آرد، تخم‌مرغ، شیر، شکر، روغن، کرم یا مربا"
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
      <div class="place-image emoji-image">${place.emoji}</div>
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
        <img src="${food.image}" alt="${food.persian}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
        <div class="image-fallback">${food.emoji}</div>
      </div>
      <div class="place-content">
        <div class="armenian-name">${food.armenian}</div>
        <div class="food-divider"></div>
        <h3 class="food-persian-name">${food.persian}</h3>
        <div class="food-pronounce">${food.pronounce}</div>
        <p class="place-description">${food.description}</p>
        <div class="ingredients">
          <strong>مواد اولیه:</strong><br>
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
