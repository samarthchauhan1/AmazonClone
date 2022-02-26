import React from 'react'
import  "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router';




function Subtotal() {
    const Navigate=useNavigate();
    const [{basket}, dispatch] = useStateValue();
    
  return (
    <div className='subtotal'>
        <CurrencyFormat 
            renderText={(value) => ( 
            <>  
                <p> 
                    Subtotal ({basket.length} items): <strong>{value}</strong>  
                </p>
                <small className='subtotal__gift'>
                    <input type="checkbox" /> This order contains a gift
                </small>
            </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} //change value
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
        
        />
        <button onClick={e => Navigate('/payment')}>Proceed to checkout</button>


    </div>
  )
}

export default Subtotal