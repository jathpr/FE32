const API_URL = 'http://localhost:3004';
const USERS = 'users';

const getUsersInner = async () => {
  const responce = await fetch(`${API_URL}/${USERS}`);
  const users = await responce.json();
  return users;
};

const sendUserInner = async (data) => {
  const response = await fetch(`${API_URL}/${USERS}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const user = await response.json();
  return user;
};

const wrapRequest = (request, onError = () => null) => {
  async function makeRequest() {
    try {
      const data = await request(...arguments);
      return data;
    } catch (error) {
      console.error('Ошибка:', error);
      return onError();
    }
  }
  return makeRequest;
};

export const getUsers = wrapRequest(getUsersInner);
export const sendUser = wrapRequest(sendUserInner);
