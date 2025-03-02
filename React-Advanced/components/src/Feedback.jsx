import React, { useState } from 'react'

const Feedback = () => {
  const[score,setScore] = useState('10')
  const[comment,setComment] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(Number(score)<=5 && comment.length<=5){
      alert('Please Provice a Comment explaining why the experience poor.')
      return;
    }
    console.log('Form Submitted')
    setComment('')
    setScore('10')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className='Filed' style={{display:'flex',flexDirection:'column'}}>
            <label>Score:{score}⭐️</label>
            <input type="range" min="0" max="10" value={score} onChange={(e)=>setScore(e.target.value)}
            />

          </div>
          <div>
            <textarea value={comment} onChange={(e)=>setComment(e.target.value)} />
          </div>

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Feedback