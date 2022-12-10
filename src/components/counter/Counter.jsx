import CustomButton from "../customButton/CustomButton"

import { useState } from "react" 

const Counter = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(0)

  return (
    <div>

        <h2>{counter}</h2>

        <CustomButton texto={"sumar"} counter={counter} setCounter={setCounter} />
    </div>
  )
}

export default Counter