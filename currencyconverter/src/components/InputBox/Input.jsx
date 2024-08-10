import React from 'react';
import './Input.css';

const Input = ({
  label, setAmount, setCurrency, currency, currencies, isDisabled, amount, setConvertedAmount
}) => {
  return (
    <div className='Input'>
        <div className="input-details">
            <label htmlFor="Amount">{label}</label>
            <input
            disabled={isDisabled}
            type="number"
            name="amount"
            onChange={(e)=>setAmount(e.target.value)}
            value={amount} id="" 
            />
        </div>
        <div className="input-details">
            <label htmlFor="Currency-type">Currency</label>
            <select value={currency} onChange={(e)=>setCurrency(e.target.value)}>
              {currencies?.map((currency)=>(
                <option value={currency} key={currency}>
                  {currency}
                </option>
              ))}
            </select>
        </div>
    </div>
  )
}
export default Input