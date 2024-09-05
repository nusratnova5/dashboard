import React from 'react';

const cardInfo =[
    {
        text: "lorem ipsum",
        number: 614,
    },
    {
        text: "lorem ipsum",
        number: 124,
    },
    {
        text: "lorem ipsum",
        number: 504,
    },
    {
        text: "lorem ipsum",
        number: 100,
    },
]

const Cards = () => {
    return (
        <div className=''>
            <div className='flex gap-3 text-nowrap'>
            {
                cardInfo?.map((item) =>{
                    return <div className='grid grid-cols-4 bg-white'>
                        <div className=''>
                        <p>{item?.text}</p>
                        <p>{item?.number}</p>
                        </div>
                    </div>

                })
            }
            
        </div>
        </div>
    );
};

export default Cards;