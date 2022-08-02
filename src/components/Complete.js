import React from "react";

export const Complete = (props) => {
  const { todo, onClickCompleteDelete, onClickCompleteBack } = props;
  return (
    <section className="complete">
      <p className="title">{todo.length < 5 ? '完了TODO' : 'TODOを処理してください' }</p>
      <div className="complete-section">
        <ul>
          {todo.map((todo, index) => {
            return (
              <div key={index} className="complete-item">
                <li>{todo}</li>
                <button onClick={() => onClickCompleteDelete(index)}>
                  削除
                </button>
                <button onClick={() => onClickCompleteBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
