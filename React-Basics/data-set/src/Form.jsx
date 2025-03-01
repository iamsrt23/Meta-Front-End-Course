import React,{useState} from 'react'

const Form = () => {
  const[form,setForm] = useState({
    firstName:"Raviteja",
    lastName:"Sure",
    email:"rteja170@gmail.com"
  })
  return (
    <div>
      <label>FirstName:</label>
      <input value={form.firstName} onChange={(e)=> {setForm({...form,firstName:e.target.value})}} />
      <label>LastName:</label>
      <input value={form.lastName} onChange={(e)=>setForm({
        ...form,lastName:e.target.value
      })}/>
      <label>Email:</label>
      <input value={form.email} onChange={(e)=>setForm({
        ...form,email:e.target.value
      })} />

      <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email})
      </p>
    </div>
  )
}

export default Form