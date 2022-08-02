import React, { useState } from "react";
import "./App.css";
import { InputAdd } from "./components/InputAdd";
import { Schedule } from "./components/Schedule";
import { Progress } from "./components/Progress";
import { Complete } from "./components/Complete";

export const App = () => {
  const [todo, setTodo] = useState(""); //入力データ
  const [scheduleTodo, setScheduleTodo] = useState([]); //予定TODOのデータ
  const [progressTodo, setProgressTodo] = useState([]); //進行中TODOのデータ
  const [completeTodo, setCompleteTodo] = useState([]); //完了TODOのデータ
  //入力データの変更
  const changeTodo = (event) => setTodo(event.target.value);
  //入力内容が予定TODOへ
  const onClickTodoAdd = () => {
    if (todo === "") return;
    const newScheduleTodo = [...scheduleTodo, todo];
    setScheduleTodo(newScheduleTodo);
    setTodo("");
  };
  //予定TODOの内容が進行中TODOへ
  const onClickSchedule = (index) => {
    const newProgress = [...progressTodo, scheduleTodo[index]];
    scheduleTodo.splice(index, 1);
    setProgressTodo(newProgress);
    setScheduleTodo(scheduleTodo);
  };
  //予定TODOの内容を削除
  const onClickScheduleDelete = (index) => {
    const newScheduleDelete = [...scheduleTodo];
    newScheduleDelete.splice(index, 1);
    setScheduleTodo(newScheduleDelete);
  };
  //進行中TODOの内容を完了TODOへ
  const onClickComplete = (index) => {
    const newComplete = [...completeTodo, progressTodo[index]];
    progressTodo.splice(index, 1);
    setCompleteTodo(newComplete);
    setProgressTodo(progressTodo);
  };
  //進行中TODOの内容を予定TODOへ
  const onClickProgressBack = (index) => {
    const newProgressBack = [...progressTodo];
    newProgressBack.splice(index, 1);
    const newSchedule = [...scheduleTodo, progressTodo[index]];
    setScheduleTodo(newSchedule);
    setProgressTodo(newProgressBack);
  };
  //完了TODOの内容を削除
  const onClickCompleteDelete = (index) => {
    const CompleteDelete = [...completeTodo];
    CompleteDelete.splice(index, 1);
    setCompleteTodo(CompleteDelete);
  };
  //完了TODOの内容を進行中TODOへ
  const onClickCompleteBack = (index) => {
    const newCompleteBack = [...completeTodo];
    newCompleteBack.splice(index, 1);
    const newProgress = [...progressTodo, completeTodo[index]];
    setProgressTodo(newProgress);
    setCompleteTodo(newCompleteBack);
  };
  return (
    <>
      {/* 見出し */}
      <h1>~ React TODO App ~</h1>
      {/* インプット */}
      <InputAdd
        todo={todo}
        change={changeTodo}
        add={onClickTodoAdd}
        disabled={scheduleTodo.length >= 5}
      />
      {/* ここからTODO全体 */}
      <div className="container">
        {/* 予定TODO */}
        <Schedule
          todo={scheduleTodo}
          onClickSchedule={onClickSchedule}
          onClickScheduleDelete={onClickScheduleDelete}
        />
        {/* 進行中TODO */}
        <Progress
          todo={progressTodo}
          onClickComplete={onClickComplete}
          onClickProgressBack={onClickProgressBack}
        />
        {/* 完了TODO */}
        <Complete
          todo={completeTodo}
          onClickCompleteDelete={onClickCompleteDelete}
          onClickCompleteBack={onClickCompleteBack}
        />
      </div>
    </>
  );
};
