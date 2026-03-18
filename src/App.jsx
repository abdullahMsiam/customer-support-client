import { useState, use } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'


const fetchTicket = async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
}
const ticketPromise = fetchTicket();



function App() {
  const ticketData = use(ticketPromise);
  console.log(ticketData);

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App
