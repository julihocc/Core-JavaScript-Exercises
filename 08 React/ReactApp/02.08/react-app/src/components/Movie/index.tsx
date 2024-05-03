import { extractUrl } from "../../utils/extractUtils";

export const Movie = ({ movie, details }: MovieProps) => {
  const { id, title, content } = movie;
  const { director } = details;
  const url = extractUrl(content) || undefined;
  console.log("url", url);

  return (
    <li key={`movie-${id}`} className="mb-3">
      <div className="card">
        <h5 className="card-header">
          {url && (
            <a className="text-decoration-none" href={url}>
              {title}
            </a>
          )}
        </h5>
        <div className="card-body">
          <p className="card-text">Director: {director}</p>
        </div>
      </div>
    </li>
  );
};
