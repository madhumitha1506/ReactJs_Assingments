import React,{useState} from "react"
import "./App.css"

const Counter= ()=>{
    let[score,setScore] = useState(0)
    return(
       
        <div>
             <h1>Counter App</h1>
            <div className="count">{score}</div>
            <button onClick={()=>score<25?setScore(score+1):""} className="inc">+</button>
            <button onClick={()=>score>0?setScore(score-1):""} className="dec">-</button>
            <button onClick={()=>{setScore(score=0)}} className="reset">Reset</button>
        </div>
    )
}

export default Counter