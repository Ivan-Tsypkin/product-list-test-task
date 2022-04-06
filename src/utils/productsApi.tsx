import { BASE_PRODUCTS_URL, HEADERS } from "./constants";

function handleResponse(res: Response) {
  if (res.ok) {return res.json()}
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getProducts = () => {
  return fetch(`${BASE_PRODUCTS_URL}`, {
    method: 'GET',
    headers: HEADERS,
  })
    .then(res => handleResponse(res))
}