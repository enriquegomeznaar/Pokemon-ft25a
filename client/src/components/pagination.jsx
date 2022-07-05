import React from "react";

const styles = {
  ul: {
    display: "flex",
    listStyleType: "none",
    justifyContent: "center",
    margin: "0rem 10rem",
    borderRadius: "100px",
    backgroundColor: "rgba(80, 80, 80, 0.473)",
  },
  li: {
    padding: "1rem",
    borderadius: "20%",
    cursor: "pointer",
  },
  a: {
    fontSize: "20px",
    textDecoration: "none",
    color: "white",
  },
};
export default function Pagination({
  pokemonPerPage,
  estadoPokemon,
  paginado,
}) {
  const pageNumber = [];

  for (let i = 0; i < Math.ceil(estadoPokemon / pokemonPerPage); i++) {
    pageNumber.push(i + 1);
  }

  return (
    <nav>
      <ul style={styles.ul}>
        {pageNumber &&
          pageNumber.map((number) => (
            <li style={styles.li} key={number}>
              <a style={styles.a} onClick={() => paginado(number)}>
                {number}
              </a>
              {/* {console.log(pageNumber)} */}
            </li>
          ))}
      </ul>
    </nav>
  );
}
