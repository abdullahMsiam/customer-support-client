import { use, useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner';
import HomeBody from './components/homeBody/HomeBody';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/footer/Footer';


const fetchTicket = async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
}
const ticketPromise = fetchTicket();



function App() {
  const [ticketData, setTicketData] = useState([]);

  const ticketDatum = use(ticketPromise);
  useEffect(() => {
    const ticketFunction = () => {
      setTicketData(ticketDatum);
    }
    ticketFunction();
  }, [ticketDatum])
  console.log(ticketData);


  // Update the data 
  const resolveTicket = (id) => {
    setTicketData(prevTickets => 
      prevTickets.map(ticket => 
        ticket.id === id 
          ? { ...ticket, status: 'Resolved' } 
          : ticket
      )
    );
    toast.success('The Task is Completed!');
  };

  const progressCount = ticketData.filter(ticket => ticket.status === "In Progress").length;
  const completedCount = ticketData.filter(ticket => ticket.status === "Resolved").length;

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Banner progressCount={progressCount} completedCount={completedCount} />
      <HomeBody ticketData={ticketData} resolveTicket={resolveTicket} />
      <Footer/>
    </div>
  )
}

export default App
