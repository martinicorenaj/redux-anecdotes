import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {voteAnecdote} from '../reducers/anecdoteReducer'

const AnecdotesList=()=>{
    const anecdotes = useSelector(state => state.sort((a,b)=>b.votes-a.votes))
    const dispatch = useDispatch()
  
    const vote = (id) => {
      console.log('vote', id)
    }
return  (
  <div>

    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => dispatch(voteAnecdote(anecdote.id))}>vote</button>
        </div>
      </div>
    )}
</div>
)
  }

export default AnecdotesList