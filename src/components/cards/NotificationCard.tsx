import React from 'react'

type Props = {
    children: React.ReactNode;
    index: number;
    left: number;
    right: number;
}

const NotificationCard = (props: Props) => {
  return (
    <div className={`p-3.5 rounded-lg bg-white  h-[185px] mr-2 ${props.index==props.left?'shadow-left bg-card-one':props.index==props.right?'shadow-right':''}`}>
            {props.children}
          </div>
  )
}

export default NotificationCard