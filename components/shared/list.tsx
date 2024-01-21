import React from "react";

type ListProps = {
  items: string[];
  listType: "ol" | "ul";
};

const List = ({ items, listType }: ListProps) => {
  const ListComponent = listType === "ol" ? "ol" : "ul";
  const listItemClass = listType === "ol" ? "list-lower-alpha" : "list-disc";

  return (
    <div>
      <ListComponent
        className={`list-outside font-medium text-base leading-8 font-inter pl-5 ${listItemClass}`}
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ListComponent>
    </div>
  );
};

export default List;
