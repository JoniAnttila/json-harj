import './App.css';
import {useState, useEffect} from 'react'; 

const URL = 'http://localhost/json_harj/index.php'

function App() {
  const [message,setMessage] = useState('');

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then (
      (res) => {
        setMessage(res.message);
      }, (error) =>{
        alert(error);
      }
    )
  },[])

  return (
    <div>
      <h3>Retrieving JSON from PHP</h3>
      <p>{message}</p>
    </div>
  );
}

export default App;
