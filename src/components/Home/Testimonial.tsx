import React, { useRef, useState } from "react";
import TestimonialCard from "../cards/TestimonialCard";
import { TESTIMONIALS } from "../../contants/constants";
import ScrollContainer from "react-indiana-drag-scroll";

type Props = {};

const Testimonial = (props: Props) => {
  
  return (
      <ScrollContainer
        className="flex gap-4 overflow-y-auto flex-nowrap pr-2 sm:mt-0 mt-5 cursor-grab active:cursor-grabbing"
      >
        {TESTIMONIALS.map((item, index) => (
          <TestimonialCard key={index} index={index} {...item} />
        ))}
      </ScrollContainer>
  );
};

export default Testimonial;
