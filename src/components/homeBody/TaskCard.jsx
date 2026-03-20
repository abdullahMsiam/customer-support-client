import React from 'react';

const TaskCard = ({ ticket }) => {
    return (
        <div>
            <div className="card rounded-none bg-white text-black shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{ticket.title}</h2>
                    <button className="btn btn-success">Complete</button>

                </div>
            </div>
        </div>
    );
};

export default TaskCard;