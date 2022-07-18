# CURRENCY-CONVERTER

# Currency Converter

The Currency Converter iOS app is a simple, fast, and efficient way of converting currency from USD to INR, EUR, & GBP. The app also features ‘Associations’, allowing users to associate their conversions for future reference. The conversion interface is the initial view of the app, in the Convert tab. The app stores saved conversions along with its associations and displays them in the History tab.

## About The App
**Convert**: Converting currencies has never been simpler. Just select the Currency (a USD amount) using the built-in app , and voila, you have conversions in real-time, as you type. The app maintains a simple UI across all its views, so everything is crystal clear, always.

**Conversion Rates**: Users need not worry about conversion rates, since the latest rates are automatically fetched before a user makes a conversion. The app includes a Refresh button to fetch the most recent rates from the currencylayer API. Do not have internet? No worries. The app automatically defaults to the last used conversion rates, so users can utilize the most recent conversion rate for conversions. If the app has no access to the internet on first launch, conversion rates will default to those on 2022-07-18. This will automatically be updated when the app connects to the internet and the user refreshes, or on the next launch.

**Alerts**: Having problems fetching the latest conversion rates? No worries. The app will present an alert letting you know exactly what the problem is (whether its your internet, or the API server, or something else), and tell you what steps the app is taking as a contingency option.

## Technical
* API - "api.frankfurter.app"  and  `http://${host}/latest?amount=${amount}&from=${currencies1}&to=${currencies2}` (free account)
* Persistence Techniques - NSUserDefaults (for previous rates)
* Core Data (conversion data)
* UIControl Aspects - UIButtons, UITextfields, & UIActivitySelect


## Motivation
As an international student at a US university, I have always had the urge to convert from USD to my local currency on-the-fly and not worry about any conversion rates, etc. Currency Converter is just the app I wanted - a simple super-quick solution - being the light app it is. On top of that, adding associations to my conversions makes it awesome for future reference and comparisons!

## How I Make

I make this app by fetching  the api which is open-source 

then we write a function to conver the rate

this function use for conver the currency 
function convert(currencies1, currencies2, amount) {
    console.log(currencies1, currencies2, amount)
    const host = "api.frankfurter.app"
    fetch(
            `http://${host}/latest?amount=${amount}&from=${currencies1}&to=${currencies2}`
        ).then((value) => value.json())
        .then((value) => {
            console.log(value)

            from.innerHTML = amount + " " + currencies1 + " = " + Object.values(value.rates)[0] + " " + currencies2;
            date.innerHTML = value.date;
        });
}
