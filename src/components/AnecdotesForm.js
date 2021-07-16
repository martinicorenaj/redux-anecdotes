import React from 'react'
import {useDispatch} from 'react-redux'
import {addNewAnecdote} from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdotesForm=(props)=>{ 
    const dispatch=useDispatch()
   
    const addAnecdote=(event)=>{
      event.preventDefault()
      const content=event.target.anec.value
      event.target.anec.value=''
      dispatch(addNewAnecdote(content))
      dispatch(notificationChange(`you have created '${content}'`))
      setTimeout(()=>dispatch(notificationChange('')),5000)
      
    }
    return (
      <div>
        <h2>create New</h2>
      <form onSubmit={addAnecdote}>
        <input name='anec'/>
        <button type='submit'>create</button>
        </form>
        </div>
    ) 

    }
    export default AnecdotesForm