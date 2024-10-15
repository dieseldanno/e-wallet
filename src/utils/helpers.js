// function for random id
export function getId() {
  let id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  return id;
}
