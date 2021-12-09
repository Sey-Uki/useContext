import { useContext } from "react";
import { Context } from "../Context";

export const PageTwo = () => {
    const { context } = useContext(Context);
    return (
        <div>
            <h1>PageTwo</h1>
            {context.map((item: string, pos: number) => {
                return <div key={pos}>{item + " " + (+pos+1)}</div>
            })}
        </div>
    )
}