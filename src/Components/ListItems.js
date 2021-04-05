import React,{useReducer, useEffect, useState} from 'react'
import './listItems.css';
import {Reducer,state} from './../Reducer';

function ListItems() {
    const [item, setItem] = useState(null)
  const [stat, dispatch] = useReducer(Reducer, state)

  useEffect(() => {
    
    console.log(stat);
    setTimeout(() => {
      dispatch({
        type:'Add',
        item:'Apple'
      });
    }, 1000);
    
  }, [])

  const handleChange = e => {
    setItem(e.target.value);
  }

  const handleSubmit = () => {

    if(item && item !== '') {
      dispatch({
        type:'Add',
        item:item
      });
    }
    else {
      alert('item is empty')
    }
      setItem('');
  }

  const removeItem = i => {
    dispatch({
      type:'Remove',
      payload : {
        id : i
      }
    })
  }
    return (
        <>
            <div className='add_item'>
            <input onChange={e => handleChange(e)} value={item} type='text' />
            <button onClick={() => handleSubmit()}>Add Item</button>
            </div>
            <ul>
            {stat.basket?.map((li,i) => <li key={i}>{li} &nbsp; 
            <button key={i} onClick={() => removeItem(i)} >X</button></li>)}
            </ul>
        </>
    )
}

export default ListItems
