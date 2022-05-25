export const setLocalStorage = (name, value) => {
  localStorage.setItem(`@desafio-softplan/${name}`, JSON.stringify(value));
}

export const getLocalStorage = (name) => {
  return localStorage.getItem(`@desafio-softplan/${name}`);
};

