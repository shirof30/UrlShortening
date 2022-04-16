import React from 'react'
import './styles.css'

interface Props{
  todo:string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent)=>void;
  handleCopy: (e:React.MouseEvent<HTMLElement>)=>void;
}

const InputField:React.FC<Props> = ({todo,setTodo, handleAdd, handleCopy} ) => {
  return (
    <form className = 'input' onSubmit = {handleAdd}>
      <input id = "inputid" type = 'input' 
        value={todo}
        onChange={
          (e) =>setTodo(e.target.value)
        }
        placeholder = "Enter link" className='input__box'></input>
      <button className = 'input__submit' type='submit'> Shorten! </button>
      <button className = 'input__copy'
      onClick={handleCopy}> Copy! </button>


    </form>



  )
};

export default InputField