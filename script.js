// HoneyTrip v1
// Base currency is GBP.
// You can manually update these rates whenever needed.

const ratesToGBP = {
  GBP: 1,
  USD: 1.33,
  AMD: 490.80,
  TOMAN: 239910
};

const currencies = [
  {
    code: "GBP",
    name: "UK Pound",
    flag: "🇬🇧",
    symbol: "£",
    decimals: 2
  },
  {
    code: "USD",
    name: "US Dollar",
    flag: "🇺🇸",
    symbol: "$",
    decimals: 2
  },
  {
    code: "AMD",
    name: "Armenian Dram",
    flag: "🇦🇲",
    symbol: "֏",
    decimals: 0
  },
  {
    code: "TOMAN",
    name: "Iranian Toman",
    flag: "🇮🇷",
    symbol: "",
    decimals: 0
  }
];

const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("fromCurrency");
const resultsDiv = document.getElementById("results");

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

  // Convert selected currency amount back to GBP first.
  const amountInGBP = amount / fromRate;

  resultsDiv.innerHTML = "";

  currencies.forEach(currency => {
    const convertedValue = amountInGBP * ratesToGBP[currency.code];

    const card = document.createElement("div");
    card.className = "result-card";

    const formattedValue = formatNumber(convertedValue, currency.decimals);
    const displayValue = currency.symbol
      ? `${currency.symbol}${formattedValue}`
      : `${formattedValue} Toman`;

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

amountInput.addEventListener("input", convert);
fromCurrencySelect.addEventListener("change", convert);

convert();
