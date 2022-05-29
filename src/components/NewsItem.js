import React from 'react';

const NewsItem = ({
  link, pdf, title, subtitle, description,
}) => (
  <div
    className="news-card"
    onClick={() => {
      window.location.href = link || pdf.asset.url;
    }}
  >
    <h3>{title}</h3>
    {subtitle && subtitle.length > 0 && <p>{subtitle}</p>}
    {description && description.length > 0 && <p><i>{description}</i></p>}
  </div>
);

export default NewsItem;
