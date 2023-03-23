function Figure({ className, src, alt, caption }) {
  return (
    <figure className={ className }>
      <img src={ src } alt={ alt } />
      <figcaption>{ caption }</figcaption>
    </figure>
  );
}

export default Figure;