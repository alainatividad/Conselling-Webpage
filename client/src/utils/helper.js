export function storeInLocalStorage(userState) {
  const { name, value } = userState;
  localStorage.setItem(name, value);
}

export function getFromLocalStorage(state) {
  return localStorage.getItem(state);
}
