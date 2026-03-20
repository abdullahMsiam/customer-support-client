import React from 'react';
import { FaCircle } from "react-icons/fa";

const TicketCard = ({ ticket }) => {
    const { title, description, customer, priority, status, createdAt } = ticket;
    return (
        <div className='bg-base-300 p-4'>
            <div className='flex justify-between items-center mb-2'>
                <h1 className='font-bold text-lg'>{title}</h1>
                <button className={`${status === 'In Progress' ? 'bg-yellow-500/60 text-yellow-900' : status === 'Resolved' ? 'bg-green-500/30' : 'bg-green-400/60  text-green-900'}  px-4 py-1 rounded-full font-semibold flex justify-between items-center gap-2`}>
                    <FaCircle /> {status}
                </button>
            </div>
            <p className='h-16'>{description}</p>
            <div className='flex justify-between items-center text-sm text-gray-500'>
                <p>{customer}</p>
                <p className={`px-2 py-1 text-black font-semibold rounded-full ${priority === 'Critical' ? 'bg-red-500' : priority === 'High' ? 'bg-orange-500' : 'bg-blue-500'}`}>
                    {priority}</p>
                <p>{new Date(createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default TicketCard;