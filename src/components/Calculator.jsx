import { useEffect, useState } from 'react'
import dollarImg from '../assets/images/icon-dollar.svg'
import personImg from '../assets/images/icon-person.svg'

import { SelectButton } from '../components/SelectButton'

export function Calculator() {
  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState(0)

  const [ bill, setBill ] = useState('')
  const [ percent, setPercent ] = useState('')
  const [ people, setPeople ] = useState('')

  const [ peopleValidation, setPeopleValidation ] = useState(true)
  const [ btnDisabled, setBtnDisabled ] = useState(true)

  useEffect(() => {
    if ( bill !== '' && percent !== '' && people !== '' ) {
      const divideByPersons = bill / people
      const percentCount = (percent / 100) * divideByPersons
      const totalWithPercent = (divideByPersons + percentCount).toFixed(2)

      setAmount(percentCount)
      setTotal(totalWithPercent)

      setBtnDisabled(false)

    } else {
      setAmount(0)
      setTotal(0)

      setBtnDisabled(true)
    }
  }, [bill, percent, people])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleInput = (event) => {
    setPercent(event.target.value)
  }

  const validateInput = (number) => {
    if ( number < 1 ) setPeopleValidation(false)
    else setPeopleValidation(true)
  }

  const reset = () => {
    setBill('')
    setPercent('')
    setPeople('')
  }

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit}>
        <label className="bill">
          
          <h4>Bill</h4>
          
          <section className="input-container">
            <img src={dollarImg} alt="Dollar Icon" />

            <input 
              className="input--bill" 
              type="number"
              name="bill"
              placeholder="0"
              onChange={event => setBill(event.target.value)}
              value={bill}
            />
          </section>
        </label>

        <label className="percent">
          
          <h4>Select Tip %</h4>
          
          <section className="select-container">
            <SelectButton setPercent={setPercent} value={5} />
            <SelectButton setPercent={setPercent} value={10} />
            <SelectButton setPercent={setPercent} value={15} />
            <SelectButton setPercent={setPercent} value={25} />
            <SelectButton setPercent={setPercent} value={50} />
            <input className="select-custom" type="number" placeholder="Custom" onChange={handleInput} />
          </section>
        </label>
      
        <label className={peopleValidation === true ? 'percent' : 'percent invalid'}>
          
          <h4>
            Number of People
            <span className="error">Can't be zero</span>
          </h4>
          
          <section className="input-container">
            <img src={personImg} alt="Person Icon" />

            <input 
              className="input--people invalid" 
              type="number"
              name="people"
              placeholder="0"
              onChange={event => {
                setPeople(event.target.value)
                validateInput(event.target.value)
              }}
              value={people}
            />
          </section>
        </label>
      </form>
    
      <div className="screen">
        <div className="result">
          <div className="amount-result">
            <span>
              <h3>Tip Amount</h3>
              <h4>/ person</h4>
            </span>

            <h1 className="amount-result">${Number(amount).toFixed(2)}</h1>
          </div>

          <div className="total-result">
            <span>
              <h3>Total</h3>
              <h4>/ person</h4>
            </span>

            <h1 className="total-result">${Number(total).toFixed(2)}</h1>
          </div>

        </div>
      
        <button className="reset-button" type="reset" disabled={btnDisabled} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}