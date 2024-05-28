import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch,currency} = useContext(AppContext);
        
    const handleCurrencyChange = (event) => {        
        var value = event.target.value;
        if (value !== ""){
            dispatch({
                type: 'CHG_CURRENCY',
                payload: value
            });
            event.target.selectedIndex = 0;
        }
    }

    const map = new Map();
    map.set('$', "$ Dollar");
    map.set('£', "£ Pound");
    map.set('€', "€ Euro");
    map.set('₹', "₹ Ruppee");
    
    return (
        <div className='alert alert-secondary'>
            <select name="Currency" 
                    style={{backgroundColor:"lime",color:"white"}} 
                    onChange={event=> handleCurrencyChange(event)}>                
                <option value = "" disabled selected hidden>{"Currency "+map.get(currency)}</option>' 
                <option value="$">&#36;  Dollar</option>
                <option value="£">&#163; Pound</option>
                <option value="€">&#8364; Euro</option>
                <option value="₹">&#8377; Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;