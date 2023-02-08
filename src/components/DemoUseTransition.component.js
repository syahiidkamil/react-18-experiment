import React, { useState, useTransition } from "react";
import { nameList } from "../utils/getNameList.util";

const ListItem = ({ name, highlight, isPending }) => {
  const index = name.toLowerCase().indexOf(highlight.toLowerCase());
  const prefixText = name.slice(0, index);
  const highlightText = name.slice(index, index + highlight.length); // highlight is might have different lower/capital case
  const suffixText = name.slice(index + highlight.length);

  const notFound = index === -1;

  if(isPending) {
    return <div>Pending...</div>;
  }

  if (notFound) {
    return <div>{name}</div>;
  }
  return (
    <div>
      {prefixText}
      <span className="highlight">{highlightText}</span>
      {suffixText}
    </div>
  );
};

const DemoUseTransition = () => {
  const [query, setQuery] = useState("");
  const [hightlight, setHightlight] = useState("");
  const [isPending, startTransition] = useTransition();

  const changeHandler = ({ target: { value } }) => {
    setQuery(value);
    startTransition(() => setHightlight(value));
  };

  return (
    <div>
      <input onChange={changeHandler} value={query} type="text" />
      {nameList.map((name, i) => (
        <ListItem
          key={i}
          name={name}
          highlight={hightlight}
          isPending={isPending}
        />
      ))}
    </div>
  );
};

export default DemoUseTransition;
