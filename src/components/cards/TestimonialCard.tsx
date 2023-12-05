import React from 'react'
import { InterfaceTestimonial } from '../../interfaces/interfaces'


const TestimonialCard = (props: InterfaceTestimonial) => {
  return (
    <div className={`bg-white p-5 rounded-xl ${props.index===2?'sm:min-w-[400px] min-w-[90vw]':'sm:min-w-[350px] min-w-[90vw]'} w-auto `}>
        <div className="flex gap-2 flex-nowrap whitespace-nowrap">
            <h4 className='text-gray-900 text-base font-600'>{props.name}</h4>
            <h6 className='text-gray-400 text-sm'>{props.designation}</h6>
        </div>
        <p className="mt-5 text-text5">
        “{props.testimonial}”
        </p>
    </div>
  )
}

export default TestimonialCard