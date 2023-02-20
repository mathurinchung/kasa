function Tags({ data }) {
  return (
    <ul className="tags">
      { data.tags.map((tag, index) => <div className="tag" key={ index }>{ tag }</div>) }
    </ul>
  );
}

export default Tags;
