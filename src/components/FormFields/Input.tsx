import React from 'react'

type Props = {
    placeholder: string
    value: string;
    onChange: (e:any)=>void;
    className?: string;
}

const Input = (props: Props) => {
  return (
    <input onChange={props.onChange} value={props.value} type="text" className={`w-full h-[59px] px-6 text-gray-900 shadow-sm rounded-lg border-2 border-gray-100 focus:border-2 hover:border-gray-400 active:border-gray_900 hover:border-2 focus:border-[black] focus:bg-gray-50 outline-none focus:outline-none mt-8 ${props.className}`} placeholder={props.placeholder} />
  )
}

export default Input