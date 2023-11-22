import { useState } from "react";
import AppButton from "./Appbutton";
import Display from "./Display";

function Counter()
{

     // var count = 20;
   const [count ,setCount] = useState(10);
   const [color ,setColor] = useState("red");
   
    function increment()
    {
       setCount(count+1);
       setColor("green");
    }
    function decrement()
    {
       setCount(count-1);
       setColor("red");
    }

    return (<>
        <AppButton title="-" handleClick={decrement}/>
        <Display count={count} bg={color}/>
        <AppButton title="+" handleClick ={increment}/>
      </>
  );
}

export default Counter;