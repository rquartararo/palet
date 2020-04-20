import { API } from './config';

export const getMainData = () => {
  return (
    fetch(`${API}/main`, {
      method: 'GET',
    })
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .catch((err) => console.log(err))
  );
};

export const getPostData = (id) => {
  return (
    fetch(`${API}/post?id=${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .catch((err) => console.log(err))
  );
};

// export const getMainData = async () => {};
