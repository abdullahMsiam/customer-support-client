import { use } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner';


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
      <Banner />
    </div>
  )
}

export default App
