import "./styles.css";
import UserList from "./UserList";
import React, { useRef } from "react";
//배열 렌더링 하기
export default function App() {
  const users = [
    {
      id: 1,
      username: "make",
      email: "make111@gmail.com"
    },
    {
      id: 2,
      username: "jane",
      email: "jane6988@gmail.com"
    },
    {
      id: 3,
      username: "john",
      email: "john244@gmail.com"
    }
  ];
  //useRef 가 변경된다고 리랜더링 X
  const nextId = useRef(4);

  const onCreat = () => {
    console.log(nextId.current); //4
    nextId.current += 1;
  };
  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}
