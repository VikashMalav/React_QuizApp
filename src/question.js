import React, { useEffect, useState } from "react";
import { quiz } from "./QuizQue";


function PrintQue() {
    let [queArr, setQueArray] = useState({})
    let [queIndex, setQueIndex] = useState(0)
    let [storeAns, setStoreAns] = useState([])
    let [correct, setCorrect] = useState([])
    let [QueFinish, setQueFinish] = useState(false)

    useEffect(() => {

        setQueArray(quiz[queIndex])

    }, [queIndex])

    function handleClick(e) {
        if (quiz.length > queIndex + 1) {

            setQueIndex(queIndex + 1)
            const correctAns = storeAns.filter((UserSelectAns) => {
                return UserSelectAns === queArr.answer
            })
            setCorrect([...correct, ...correctAns])
            console.log(correct)
        }
        else {
            setQueFinish(true)
        }





    }
    function change(e) {
        setStoreAns([...storeAns, e.target.value])
        console.log(storeAns)
    }
    return (

        (!QueFinish) ?

            <div className="Que_box">

                <h2>{queArr.id}.{queArr.question}</h2>

                <div className="option">
                    {
                        queArr?.options?.map((each, index) => {

                            return (<div>

                                <input className="" type='radio' name="option" id={index} value={each} onChange={change} /><label htmlFor={index}>{each}</label>
                            </div>
                            )
                        })
                    }
                </div>
                <br />
                <button onClick={(e) => handleClick(e)}>Next Question</button>
            </div>
            : <div>
                <h1>Quiz Completed!!</h1>
                <h2>SCORE:<span>{correct.length}/5</span></h2>
            </div>


    )
}

export default PrintQue