export function SelectButton(props) {
  const handleSelect = (event) => {
    props.setPercent(event.target.value)
  }

  return (
    <button 
      className="select-button" 
      value={props.value}
      onClick={handleSelect}>
        {props.value}%
      </button>
  );
}