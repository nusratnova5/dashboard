import React from 'react';

const cardInfo =[
    {
        text: "Lorem ipsum",
        number: 614,
    },
    {
        text: "Lorem ipsum",
        number: 124,
    },
    {
        text: "Lorem ipsum",
        number: 504,
    },
    {
        text: "Lorem ipsum",
        number: 100,
    },
]

const Cards = () => {
    return (
        <div className=''>
            <div className='flex gap-3 text-nowrap'>
            {
                cardInfo?.map((item) =>{
                    return <div className='grid grid-cols-4 bg-white rounded-lg'>
                        <div className='p-5'>
                        <p className='text-medium-gray mb-2'>{item?.text}</p>
                        <p className='font-bold text-2xl text-navy-blue'>{item?.number}</p>
                        </div>
                    </div>

                })
            }
            
        </div>
        </div>
    );
};

export default Cards;