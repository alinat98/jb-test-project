import ListItem from "./ListItem";

const List = ({
  listOfKeys,
  dataCollection,
  level = -1,
  ...rest
}) => {
  return (
    <>
      {listOfKeys.map((key) => !!dataCollection[key] && (
        <ListItem
          item={{
            ...dataCollection[key],
            level: dataCollection[key].level + level,
          }}
          key={key}
          {...rest}
        />
      ))}
    </>
  );
};

export default List;
