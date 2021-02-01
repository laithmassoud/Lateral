import React from "react";
import "./card.scss";

const Card = ({ imageUrl, title, published, url, similarity, author }) => {
  const roundNumber = num => {
    return parseInt(num * 100) + "%";
  };

  const date = publishedDate => {
    const dateObj = new Date(publishedDate);
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return day + "." + month + "." + year;
  };

  const checkForAuthor = author => {
    if (!author) return <strong className="author"> No Author</strong>;
    else return author;
  };

  return (
    <div className="card">
      <a href={url}>
        <div className="card_media_wrapper">
          <img className="card_media" src={imageUrl} alt="article-cover" />
        </div>
        <div className="card_content">
          <h1>
            {title}
          </h1>
          <div className="card_content_sub">
            <span className="similarity">
              {" "}{roundNumber(similarity)} Similar
            </span>
            |
            <span className="date">{date(published)}</span>
            |
            <span className="author">{checkForAuthor(author)}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
