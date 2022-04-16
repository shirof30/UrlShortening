import React from 'react'
import './styles.css'

const InputField = () => {
  return (
    <div>
      <input type='input' placeholder = "Enter link" className='input__box'></input>
      <button className = 'input__submit' type='submit'> Shorten! </button>
      <button className = 'input__copy' type='submit'> Copy! </button>

    </div>



  )
};

export default InputField