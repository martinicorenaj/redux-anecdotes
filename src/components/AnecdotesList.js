import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {voteAnecdote} from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const Anecdote=({anecdote,handleClick})=>{
  return (
    <li>
      <div>
        <div>
      {anecdote.content}
      </div>
      <div>
      has{anecdote.votes}
      <button onClick={handleClick}>vote</button>
      </div>
      </div>
    </li>
    
  )
  
}
const AnecdotesList=()=>{
    const dispatch = useDispatch()
    const anecdotes = useSelector(({filter,anecdotes}) =>{
    
      if (filter==="") {
     return anecdotes.sort((a,b)=>b.votes-a.votes)
    }
    return anecdotes.filter(anec=>anec.content.includes(filter))
 
  
    })
return  (
  <ul>
     {anecdotes.map(anecdote =>
    <Anecdote
    key={anecdote.id}
    anecdote={anecdote}
    handleClick={() => {dispatch(voteAnecdote(anecdote.id))
                                  dispatch(notificationChange(`you have voted '${anecdote.content}'`))
                                  setTimeout(()=>dispatch(notificationChange('')),5000)}
    }
    />    
    )}
</ul>
)
  }

export default AnecdotesList