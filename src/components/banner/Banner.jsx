import React from 'react';
import BannerCard from './BannerCard';

const Banner = ({ progressCount, completedCount }) => {
    return (
        <div className='container mx-auto mt-4'>
            <div className='flex flex-col md:flex-row justify-around w-11/12 mx-auto gap-4'>
                <BannerCard status={"In Progress"} count={progressCount} />
                <BannerCard status={"resolved"} count={completedCount} />
            </div>
        </div>
    );
};

export default Banner;