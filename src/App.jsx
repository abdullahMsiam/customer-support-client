import { use } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner';
import HomeBody from './components/homeBody/HomeBody';


const fetchTicket = async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
}
const ticketPromise = fetchTicket();



function App() {
  const ticketData = use(ticketPromise);
  console.log(ticketData);

  const progressCount = ticketData.filter(ticket => ticket.status === "In Progress").length;
  const completedCount = ticketData.filter(ticket => ticket.status === "Resolved").length;

  return (
    <div>
      <Navbar />
      <Banner progressCount={progressCount} completedCount={completedCount} />
      <HomeBody ticketData={ticketData} />
    </div>
  )
}

export default App
