import React from 'react';

const BannerCard = () => {
    return (

        <div className={`card bg-primary text-primary-content flex-1 h-48 `}>
            <div className="card-body">
                <h2 className=" text-center w-full">Card title!</h2>
                <p className='text-5xl font-semibold text-center '>0</p>
            </div>
        </div>

    );
};

export default BannerCard;