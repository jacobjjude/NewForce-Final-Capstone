export const getTop8Friends = (id) => {
  return fetch(`https://localhost:5001/api/Top8Friend?id=${id}
    `).then((res) => res.json());
};
