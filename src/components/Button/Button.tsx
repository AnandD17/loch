import React from 'react'

type Props = {
    onClick?: ()=>void;
    label: string;
}

const Button = (props: Props) => {
  return (
    <button onClick={props.onClick} className="bg-gray-900 rounded-lg w-full text-center px-2 h-[59px] text-base text-white mt-6 font-600">
    {props.label}
  </button>
  )
}

export default Button