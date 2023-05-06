export const Tag = ({ tagName, tagQuantity, id, tagHandler }) => {
  const onClick = () => {};

  return (
    <p id={id} onClick={() => tagHandler(tagName)}>
      {tagName}({tagQuantity})
    </p>
  );
};
