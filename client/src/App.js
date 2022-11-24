import React ,{useState} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [image,setImage]= useState({})

 console.log(image)
 const denek = (e)=>{
  setImage(e.target.value)
 }
  
  const handle2 =()=>{
    let formData = new FormData()

    formData.append('avatar',image)
    axios.post('http://localhost:4300/uploadFile',{
     image
    })

  }



  return (
    <div className="App">
      <input type="file" onChange={(e)=>denek(e)} />
      <button type="submit" onChange={handle2}>uPLOAD</button>

     
    </div>
  );
}

export default App;
