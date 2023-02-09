import React, { useState, useDeferredValue } from "react";
import { SAME_NAME_LIST } from "../utils/getNameList.util";

const slowingDownFunction = () => {
  JSON.stringify(SAME_NAME_LIST.slice(0, 5000));
};

const ListItem = ({ name, query, isPending }) => {
  const highlight = useDeferredValue(query);
  // const highlight = query; // without useDeferredValue to compare
  slowingDownFunction();
  const index = name.toLowerCase().indexOf(highlight.toLowerCase());
  const prefixText = name.slice(0, index);
  const highlightText = name.slice(index, index + highlight.length); // highlight is might have different lower/capital case
  const suffixText = name.slice(index + highlight.length);

  const notFound = index === -1;

  if (isPending) {
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

const DemoUseDeferredValue = () => {
  const [query, setQuery] = useState("");

  const changeHandler = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <div>
      <input onChange={changeHandler} value={query} type="text" />
      {SAME_NAME_LIST.map((name, i) => (
        <ListItem key={i} name={name} query={query} isPending={false} />
      ))}
    </div>
  );
};

export default DemoUseDeferredValue;
