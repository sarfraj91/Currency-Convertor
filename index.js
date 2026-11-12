// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
let drowpdowns = document.querySelectorAll(".dropdown select");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
for (let select of drowpdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = select;
    } else if (select.name === "IND" && currCode === "INR") {
      newOption.selected = select;
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evn) => {
    updateFlag(evn.target);
  });
}

//flag change logic
let updateFlag = (ele) => {
  let currCode = ele.value;
  let countryCode = countryList[currCode];
  newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = ele.parentElement.querySelector("img");
  img.src = newSrc;
};

let btn = document.querySelector(".btn");
let msg = document.querySelector(".msg");

// currency covertor logics
const BASE_URL = "https://api.frankfurter.dev/v2/rate/";
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = parseFloat(amount.value);
  if (isNaN(amtVal) || amtVal <= 0) {
    amtVal = 1;
    amount.value = "1";
  }
  const from = fromCurr.value;
  const to = toCurr.value;
  const URL = `${BASE_URL}${from}/${to}`;
  try {
    let response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch exchange rate");
    }
    let data = await response.json();
    let rate = data.rate;
    let finalAmount = (amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal} ${from} = ${finalAmount} ${to}`;
  } catch (error) {
    msg.innerText = "Error fetching exchange rate. Please try again.";
    console.error(error);
  }
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
 
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
