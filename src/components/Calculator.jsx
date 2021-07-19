import dollarImg from '../assets/images/icon-dollar.svg'
import personImg from '../assets/images/icon-person.svg'

export function Calculator() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit}>
        <label className="bill">
          
          Bill
          
          <section className="input-container">
            <img src={dollarImg} alt="Dollar Icon" />

            <input 
              className="input--bill" 
              type="number"
              name="bill"
              placeholder="0"

            />
          </section>
        </label>

        <label className="percent">
          
          Select Tip %
          
          <section className="select-container">
            <button className="select-button" type="button" value="5">5%</button>
            <button className="select-button" type="button" value="10">10%</button>
            <button className="select-button" type="button" value="15">15%</button>
            <button className="select-button" type="button" value="25">25%</button>
            <button className="select-button" type="button" value="50">50%</button>
            <input className="select-custom" type="number" placeholder="Custom" />
          </section>
        </label>
      
        <label className="people">
          
          Number of People
          
          <section className="input-container">
            <img src={personImg} alt="Person Icon" />

            <input 
              className="input--people" 
              type="number"
              name="people"
              placeholder="0"

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

            <h1 className="amount-result">${0}.00</h1>
          </div>

          <div className="total-result">
            <span>
              <h3>Total</h3>
              <h4>/ person</h4>
            </span>

            <h1 className="total-result">${0}.00</h1>
          </div>

        </div>
      
        <button className="reset-button" type="reset" disabled={true}>Reset</button>
      </div>
    </div>
  );
}