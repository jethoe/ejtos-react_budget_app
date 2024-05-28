import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch,currency,remaining,budget } = useContext(AppContext);
    
    const handleBudgetChange = (event) => {
        var value = event.target.value;        
        var expenses = budget-remaining;
        if (((typeof(value) !== 'number') && isNaN(value)) || value==="")
        {                
            alert("Do not allow non-numeric input!");         
        }
        
        if (expenses>Number(value))
        {                
            alert("There is not enough budget!");         
        }

        if (value>20000)
        {                
            alert("The value cannot exceed the limit of 20'000!");
        }
            
        dispatch({
            type: 'SET_BUDGET',
            payload: value
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={budget} onChange={event=>handleBudgetChange(event)}></input>
        </div>
    );
};
export default Budget;
