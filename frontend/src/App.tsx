import React, { useState } from 'react';
import './App.css';
import InputField from "./components/InputField"
const App: React.FC = () => {
  
  const handleCopy = (e:React.MouseEvent<HTMLElement>) => 
  {
    e.preventDefault();
    navigator.clipboard.writeText(todo); 
  }

  const [todo, setTodo] = useState<string>("");
  const handleAdd = (e: React.FormEvent) => 
  {
    e.preventDefault();
    if(todo) {
      if (todo.indexOf('https') < 0) 
      {
        //textboxval.value ='TEXT ERROR \nPlease Include the HTTP on the link pasted.\n.... ABORTED ....';
        
        let text1 = "https://";
        let text2 = todo;
        let result = text1.concat(text2);
        //taskName = result;
        const url = 'http://localhost:5000/api/url/shorten';
          const data = JSON.stringify( {"longURL": result} );
          const options=
          {
              method:'POST',
              headers:{
                  'Content-Type': 'application/json'
              },
              body:data
          };

          //fetch call
          fetch(url,options).then(response=>response.json()).then(data => {setTodo(data)} );
          return;
      } 

      const url = 'http://localhost:5000/api/url/shorten';
      const data = JSON.stringify({"longURL": todo});
      const options=
          {
              method: 'POST',
              headers:{
                  'Content-Type': 'application/json'
              },
              body: data
          };
        //fetch call
        fetch(url,options).then(response=>response.json()).then(data=>{ setTodo(data)});
        
    }
  }




  return (
    <div className = "App">
      <span className = "heading"> URL SHORTENING SERVICE </span>

      <InputField todo = {todo} 
      setTodo = {setTodo} 
      handleAdd = {handleAdd} 
      handleCopy = {handleCopy}></InputField>

    </div>
  );
}

export default App;
