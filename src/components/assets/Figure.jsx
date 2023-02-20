function Figure({ src, alt, caption }) {
  return (
    <figure>
      <img src={ src } alt={ alt } />
      <figcaption>{ caption }</figcaption>
    </figure>
  );
}

export default Figure;
