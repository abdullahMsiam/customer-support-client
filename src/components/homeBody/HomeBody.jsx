import React from 'react';
import TicketCard from './TicketCard';
import TaskCard from './TaskCard';

const HomeBody = ({ ticketData, resolveTicket }) => {
    console.log(ticketData);
    return (
        <div className='container mx-auto mt-4'>
            <div className='flex flex-col md:flex-row w-11/12 mx-auto gap-4'>
                {/* Ticket List */}
                <div className='flex-1'>
                    <h1 className='text-4xl mt-4'>Customers Tickets</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        {
                            ticketData.filter(t => t.status !== "Resolved").map(ticket => (
                                <TicketCard key={ticket.id} ticket={ticket} />
                            ))
                        }
                    </div>
                </div>
                {/* task handler section */}
                <div className='w-80 md:w-96 mx-auto'>
                    <div>
                        <h1 className='text-4xl mt-4'>Task Status</h1>
                        <div className='grid grid-cols-1 gap-2 mt-4'>
                            {
                                ticketData.filter(t => t.status === "In Progress").map(ticket => (
                                    <TaskCard key={ticket.id} ticket={ticket} resolveTicket={resolveTicket} />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className='text-4xl mt-4'>Resolved Task</h1>
                        <div className='grid grid-cols-1 gap-2 mt-4'>
                            {
                                ticketData.filter(t => t.status === "Resolved").map(ticket => (
                                    
                                    <h1 className='card bg-base-300 py-4 px-3' key={ticket.id}>{ticket.title}</h1>
                                    
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBody;