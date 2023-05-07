function EventRank(props) {
  const { rank } = props;
  if (typeof rank !== "number") return null;
  if (rank < 0 || rank > 10) return null;
  let stars = [];
  for (let index = 0; index < rank; index++) {
    stars.push(<span>⭐</span>);
  }
  return (
    <span>
      {stars} ({rank}/10)
    </span>
  );
}

export default EventRank;
