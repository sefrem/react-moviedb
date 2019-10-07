import queryString from "query-string"
import { reject } from "q";

export const API_URL = "https://api.themoviedb.org/3";

export const API_KEY_3 = "3f4ca4f3a9750da53450646ced312397";

export const API_KEY_4 =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjRjYTRmM2E5NzUwZGE1MzQ1MDY0NmNlZDMxMjM5NyIsInN1YiI6IjVhYzlmNWRkOTI1MTQxNjJhZTA1Njk0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fc4f9DVB6pFWh6hIjYe0NCC4pImdmNzDIfi_3Nb3tC4";

export async function fetchApi(url, options = {}) {
  try {
    let response = await fetch(url, options);
    if (response.status < 400) {
      return await response.json();
    } else {
      throw response;
    }
  } catch (error) {
    let errorJ = await error.json();
    return await reject(errorJ);
  }
}

export default class CallApi {
 static get(url, options) {
    const { params } = options;
    const queryStringParams = {
      api_key: API_KEY_3,
      ...params
    }
   return fetchApi(`${API_URL}${url}?${queryString.stringify(queryStringParams)}`, {
    mode: "cors",
    headers: {
      "Content-type": "application/json"
    }
  }
    )}
}
  
