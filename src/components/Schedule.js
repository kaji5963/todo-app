import React from "react";

export const Schedule = (props) => {
  const { todo, onClickSchedule, onClickScheduleDelete } = props;
  return (
    <section className="schedule">
      <p className="title">{todo.length < 5 ? '予定TODO' : 'TODOを処理してください' }</p>
      <div className="schedule-section">
        <ul>
          {todo.map((todo, index) => {
            return (
              <div key={index} className="schedule-item">
                <li>{todo}</li>
                <button onClick={() => onClickSchedule(index)}>進行</button>
                <button onClick={() => onClickScheduleDelete(index)}>
                  削除
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
