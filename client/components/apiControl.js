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

export const createPost = (body) => {
  return fetch(`${API}/post`, {
    method: 'POST',
    body: body
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};