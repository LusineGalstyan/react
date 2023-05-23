import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { setMessage, deleteMessage } from '../redux/reducers/messageSlice';

export default function Message() {
  const message = useSelector(state => state.message.text);
  const dispatch = useDispatch();

  const handleInputChange = ({target : {value}})=>{
    dispatch(setMessage(value));
  };
  
  return (
    <div>
      <div>
      <h5>{message}</h5>
      <input type='text' value={message} onChange={handleInputChange}/>

        <button
          aria-label="Increment value"
          onClick={() => dispatch(deleteMessage())}
        >
         Reset message
        </button> 
  
      </div>
    </div>
  )
}