import { computeHeadingLevel } from '@testing-library/react'
import react, { useEffect, useState } from 'react'
import { quiz } from './QuizQue'

function App() {
  let [queArray, setQueArray] = useState([])
  let[ansChecker,setAnsChecker]=useState([])
  useEffect(() => { 

    setQueArray(quiz)

  }, [])
  console.log(queArray)

  function handleSubmit(e,choice){
    console.log(e)
    setAnsChecker(choice.filter((each)=>{
      return each===e.target.value
    }))
console.log(ansChecker)


  }

  function handleChange(e){
console.log(e.target.value)

  }
  return (

    <div>
      {
        quiz.map((que) => {
          return (
            <div key={que.id}>
              <h2> {que.question}</h2>
              <div>
                {
                  que.options.map((choice, id) => {
                    return (
                      <div key={id}>
                        <input type='radio' value={choice} name='option' onChange={handleChange}  ></input>
                        <span>{choice}</span>

                      </div>
                    )
                  })
                }

              </div>
              <button  onClick={(e)=>handleSubmit(e,que.options)} >check answer</button>
            </div>
          )
        })}
    </div>
  )
}
export default App