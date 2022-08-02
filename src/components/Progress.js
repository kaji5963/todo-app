import React from "react";

export const Progress = (props) => {
  const { todo, onClickComplete, onClickProgressBack } = props;
  return (
    <section className="progress">
      <p className="title">{todo.length < 5 ? '進行TODO' : 'TODOを処理してください' }</p>
      <div className="progress-section">
        <ul>
          {todo.map((todo, index) => {
            return (
              <div key={index} className="progress-item">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickProgressBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
