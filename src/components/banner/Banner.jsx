import React from 'react';
import BannerCard from './BannerCard';

const Banner = () => {
    return (
        <div className='container mx-auto mt-4'>
            <div className='flex justify-around w-11/12 mx-auto gap-4'>
                <BannerCard status={"in-progress"} />
                <BannerCard status={"completed"} />
            </div>
        </div>
    );
};

export default Banner;