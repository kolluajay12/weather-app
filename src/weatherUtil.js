const convertToFahrenheit = (celsiusTemp) => {
    return ((celsiusTemp * 9) / 5 + 32).toFixed(1);
};


export {convertToFahrenheit};