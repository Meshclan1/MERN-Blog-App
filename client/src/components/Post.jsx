export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://lp-cms-production.imgix.net/2023-08/-CantoiStock-975466162-RFC.jpg"
          alt="Brazil"
        ></img>
      </div>
      <div className="texts">
        <h2>Brazil Trip Idea</h2>
        <p className="info">
          <a className="author">Ayo M.</a>
          <time>2023-11-23 13:59</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
          numquam illum quasi ad asperiores, laboriosam sapiente praesentium?
          Harum debitis ea voluptas eveniet inventore sapiente animi, excepturi
          illo consectetur quod natus!
        </p>
      </div>
    </div>
  );
}
