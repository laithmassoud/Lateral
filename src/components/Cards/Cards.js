import React from "react";
import Filter from "../Filter/Filter";
import Card from "./Card";

const Cards = ({ result }) => {
  return (
    <div className="cards_section">
      <h1>Similar articles</h1>
      <Filter />
      <ul className="cards_wrapper">
        {result.map(item => {
          return (
            <li key={item.document_id}>
              <Card
                url={item.url}
                imageUrl={item.image}
                similarity={item.similarity}
                title={item.title}
                published={item.published}
                author={item.author}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cards;
