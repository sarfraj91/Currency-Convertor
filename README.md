# Currency Converter

A lightweight, browser-based currency converter built with HTML, CSS, and vanilla JavaScript. Choose a starting currency, select a destination currency, enter an amount, and fetch the latest available exchange rate.

## Features

- Convert between a broad selection of currencies
- Fetch exchange rates from the [Frankfurter API](https://www.frankfurter.app/)
- Display the currencies' country flags and the calculated result
- Validate the amount and show a message if the rate request fails
- Start with USD as the source currency and INR as the destination

## Get started

No installation or build tools are needed.

1. Download or clone this project.
2. Open `index.html` in a modern web browser.
3. Enter an amount, choose the source and destination currencies, and select **Exchange**.

An internet connection is required to retrieve exchange rates and load flag images. Rates are provided by Frankfurter and may not be suitable for financial decisions or time-sensitive transactions.

## Project structure

```text
Currency Convertor/
├── index.html   # Converter interface
├── style.css    # Layout and visual styling
├── code.js      # Currency-to-country code mapping
├── index.js     # Currency selection, flags, and conversion
└── README.md
```

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- [Frankfurter API](https://www.frankfurter.app/) for exchange rates
- [FlagsAPI](https://flagsapi.com/) for flag images
- [Font Awesome](https://fontawesome.com/) for the exchange icon

## How it works

The page populates currency selectors from the currency mapping in `code.js`. When a currency changes, its flag is updated. On page load and when **Exchange** is selected, `index.js` requests the rate for the selected currency pair and multiplies it by the entered amount.

If the entered amount is blank, invalid, or not greater than zero, the converter uses `1`. If the rate request fails, an error message is displayed.
