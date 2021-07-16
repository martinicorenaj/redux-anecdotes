
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notificationChange } from '../reducers/notificationReducer'

export const createNotification=(action,content)=>{
  return action.type==='VOTE_ANECDOTE'?
  (`you have voted ${content}` )
  :(`you have added ${content}`)
}


const Notification = () => {
  const dispatch=useDispatch()
  const notification = useSelector(state=>state.notification)
  
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification