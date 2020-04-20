import { API } from './config';

export const getMainData = () => {
  return fetch(`${API}/main`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const getPostData = (id) => {
  return fetch(`${API}/post?id=${id}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
