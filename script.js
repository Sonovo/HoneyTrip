// HoneyTrip v2
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

const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("fromCurrency");
const resultsDiv = document.getElementById("results");
const placesList = document.getElementById("placesList");
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
