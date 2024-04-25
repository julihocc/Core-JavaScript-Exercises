import extractUrl from "../../utils/extractUtils";

const ListElement = ({ movie, details }) => {
  const { id, title, content } = movie;
  const { director } = details;
  const url = extractUrl(content);
  console.log("url", url);

  // return (
  //   <li key={`movie-${id}`}>
  //     <div className="card">
  //       <h5 className="card-title">
  //         <a className="" href={url}>
  //           {title}
  //         </a>
  //       </h5>
  //       <div className="card-body">
  //         <p className="card-text">Director: {director}</p>
  //       </div>
  //     </div>
  //   </li>
  // );
  return (
    <li key={`movie-${id}`} className="mb-3">
      <div className="card">
        <h5 className="card-header">
          <a className="text-decoration-none" href={url}>
            {title}
          </a>
        </h5>
        <div className="card-body">
          <p className="card-text">Director: {director}</p>
        </div>
      </div>
    </li>
  );
};

export default ListElement;
