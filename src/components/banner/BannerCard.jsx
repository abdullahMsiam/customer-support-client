import React from 'react';

const BannerCard = ({ status, count }) => {
    return (

        <div className={`card text-primary-content flex-1 h-48 ${status === "In Progress" ? "bg-linear-to-t from-violet-400 to-violet-600" : "bg-linear-to-t from-green-400 to-green-600"}`}>
            <div className="card-body  bg-[url('/src/assets/vector1.png')] bg-no-repeat pt-9">
                <h2 className=" text-center font-bold text-2xl w-full">{status === "In Progress" ? "In Progress" : "Resolved"}</h2>
                <p className='text-5xl font-semibold text-center '>{count}</p>
            </div>
        </div>

    );
};

export default BannerCard;