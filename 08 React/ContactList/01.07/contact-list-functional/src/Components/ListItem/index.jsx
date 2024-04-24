const ListElement = ({ data }) => {
  return (
    <li>
      <h3>{data.title}</h3>
      {/* <p>{data.content}</p> */}
      <div
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      >
      </div>
    </li>
  );
};

export default ListElement;
