const api = "http://213.252.244.67:8091";

import currencyData from "./data/currency.json";

// http://213.252.244.67:8091/api/DataHistory?symbol=EURUSD&period=1

export interface ApiResponse<T> {
  data: T;
  message: string;
}

export interface AssetsData {
  symbols: string;
  exch: string;
  priceSettle: number;
  digits: number;
}

export async function getAssets() {
  // TODO: Implement the getCurrencies api
  const response: ApiResponse<AssetsData[]> = {
    data: currencyData as AssetsData[],
    message: "",
  };

  return response;
}

export async function loadChartHistory(symbol: string, period: number) {
  const response: ApiResponse<any> = await fetchData(
    `api/DataHistory?symbol=${symbol}&period=${period}`,
    null
  );
  return response;
}

async function fetchData<T>(subUrl: string, body: any) {
  try {
    let response: Response;
    if (body) {
      response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    } else {
      response = await fetch(api, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // Check if the request was successful (status code 2xx)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response

    const data: ApiResponse<T> = {
      data: await response.json(),
      message: "",
    };

    return data;
  } catch (error: any) {
    // Handle errors
    console.error("Error:", error);
    return {
      data: null,
      message: error.message,
    };
  }
}
