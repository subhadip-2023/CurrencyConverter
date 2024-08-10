import './App.css';
import Input from './components/InputBox/Input';
import React, { useEffect, useState } from 'react'
const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState('');
  const submitHandler = async () =>{
    if(!amount) return
    try {
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
      const data = await res.json();
      // console.log(data.rates[toCurrency]);
      setConvertedAmount(data.rates[toCurrency]);
      // console.log(convertedAmount);
    } catch (error) {
      console.log(error);
    }
  }
  const fetchCurrency = async () => {
    try{
      const res =  await fetch('https://api.frankfurter.app/currencies');
      const data = await res.json();
      //console.log(data);
      setCurrencies(Object.keys(data));
      // console.log(currencies);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchCurrency();
  },[])
  return (
    <div className='main'>
      <div className="container">
        <br />
        <h2>Currency Converter</h2>
        <Input
        label={'From'}
        currencies={currencies}
        amount={amount}
        setAmount={setAmount}
        currency={fromCurrency}
        setCurrency={setFromCurrency}
        />
        <div className='Convert'>
          <button onClick={submitHandler}>Convert</button>
        </div>
        <Input
        label={'To'}
        currencies={currencies} 
        isDisabled={'disabled'}
        currency={toCurrency}
        setCurrency={setToCurrency}
        amount={convertedAmount}
        />
      </div>
    </div>
  )
}
export default App