import React from "react";

export const InputAdd = (props) => {
  const { todo, change, add, disabled } = props;
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="TODO入力"
        value={todo}
        onChange={change}
        disabled={disabled}
      />
      <button disabled={disabled} onClick={add}>
        追加
      </button>
    </div>
  );
};
