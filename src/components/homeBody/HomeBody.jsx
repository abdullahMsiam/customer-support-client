import React from 'react';
import TicketCard from './TicketCard';

const HomeBody = ({ ticketData }) => {
    console.log(ticketData);
    return (
        <div className='container mx-auto mt-4'>
            <div className='flex w-11/12 mx-auto gap-4'>
                {/* Ticket List */}
                <div className='flex-1'>
                    <h1>Customers Tickets</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        {
                            ticketData.map(ticket => (
                                <TicketCard key={ticket.id} ticket={ticket} />
                            ))
                        }
                    </div>
                </div>
                {/* tickets handler section */}
                <div className='w-96'>
                    <h1>Task Status</h1>
                </div>
            </div>
        </div>
    );
};

export default HomeBody;