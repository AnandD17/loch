import React from 'react'

type Props = {
    placeholder: string
    value: string;
    onChange: (e:any)=>void;
    className?: string;
}

const Input = (props: Props) => {
  return (
    <input onChange={props.onChange} value={props.value} type="text" className={`w-full h-[59px] px-6 text-gray-900 shadow-sm rounded-lg border border-gray-100 focus:border-gray-300 active:border-gray-300 mt-8 ${props.className}`} placeholder={props.placeholder} />
  )
}

export default Input