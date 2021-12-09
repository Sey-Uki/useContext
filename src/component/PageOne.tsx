import { useContext } from "react";
import { Context } from "../Context";

export const PageOne = () => {
  const { context, setContext } = useContext(Context);
  const onClick = () => {
    const arr = [...context];
    arr.push('Пункт')
    setContext(arr)
  }
  return (
    <div>
      <h1>PageOne</h1>
      <button onClick={onClick}>
        Добавить пункт
      </button>
    </div>
  );
}