import { formatISO9075 } from "date-fns";

export default function Post({
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://lp-cms-production.imgix.net/2023-08/-CantoiStock-975466162-RFC.jpg"
          alt="Brazil"
        ></img>
      </div>
      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
