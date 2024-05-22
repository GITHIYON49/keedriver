import React from 'react';
import Image from 'next/image';
import {img8,img9,img10} from './image';



const reviewDetail = [
    {
        clientName:'Pradeep Pandey',
        tripType:'Outstation Trip',
        tripReview:'everyone who require Drivers for outstation please download DriveU app they reply immediately and make sure the availability of the drivers also provide the best Drivers',
        image:img8

    },
    {
        clientName:'Sudhakar Surya ',
        tripType:'Round Trip',
        tripReview:'I had my first drive and its great , Driver came on time, had a professional and polite service , he was also thorough on the routes which was added advantage.',
        image:img9

    },
    {
        clientName:'Sathishbabu M.',
        tripType:'After-Party Drop',
        tripReview:'DriveU is reliable. I have done some 5 to 6 rides so far and all of them were good and punctual. They took very good care of the car as their own. Must try',
        image:img10

    }
]



 const ReviewCard = () => {
  return (
    <>
    {
        reviewDetail.map((reviewList,id)=>{
            return <div className="flex flex-col justify-between rounded-sm w-full lg:h-96 shadow-xl p-5" key={id}>
                <div className='flex flex-col justify-center items-center md:items-start gap-3'>
            <div className="m-5"><Image src={reviewList.image} alt="client-image" width={75} height={75} className="rounded-full"/></div>
            <p className="text-zinc-600 capitalize text-left">
                {
                    reviewList.tripReview
                }
        
            </p>
            </div>
            <p className="text-zinc-600 text-left pt-5  before:border-2  before:border-slate-700">{reviewList?.clientName}/ <span className="text-primary font-bold">{reviewList?.tripType}</span></p>
        </div>
        })
    }
    </>
  )
}

export default ReviewCard;