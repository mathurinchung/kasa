function Tags({ data }) {
  return (
    <ul className="tags">
      { data.tags.map((tag, index) => <li className="tag" key={ index }>{ tag }</li>) }
    </ul>
  );
}

export default Tags;
