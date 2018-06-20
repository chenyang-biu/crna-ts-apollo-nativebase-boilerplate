//let currencyJson: any;
let currencyJson = require('./../Assets/Data/Currency.json');

export const getCurrencyNameByCode = (code: String) => {
  let name = '';
  currencyJson.currency.forEach((currency: any) => {
    if (currency.code === code) {
      name = currency.name;
    }
    return name;
  });
  return name.length > 0 ? name : code;
}

export const getCryptocurrency = async () => {
  try {
    let response = await fetch('https://min-api.cryptocompare.com/data/all/coinlist', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });
    let responseJson = await response.json();
    return processCryptocurrency(responseJson);
    //return responseJson;
  } catch (error) {
    console.error(error);
  }
}

function processCryptocurrency(object: any): any {
  let result: any = {};
  result.baseImageUrl = object.BaseImageUrl;
  result.baseLinkUrl = object.BaseLinkUrl;
  result.coinList = [];
  let temp = object.Data;
  
  for (let key in temp) {
    if (temp.hasOwnProperty(key)) {
      result.coinList.push(temp[key]);
    }
  }
  result.coinList.sort((a: any, b: any): number => {
    // Ascending: first age less than the previous
    return a.SortOrder - b.SortOrder;
  });
  return result;
}

export const getAllCurrency = () => {
  return currencyJson;
}
