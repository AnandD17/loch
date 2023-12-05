import React from 'react'

type Props = {
    children: React.ReactNode;
}

const NotificationCard = (props: Props) => {
  return (
    <div className="p-3.5 rounded-lg bg-white  h-[185px] mr-2">
            {props.children}
          </div>
  )
}

export default NotificationCard