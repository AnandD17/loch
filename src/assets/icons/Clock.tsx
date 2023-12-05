import React from 'react'
import { InterfaceSVG } from '../../interfaces/interfaces'



const Clock = (props: InterfaceSVG) => {
  return (
    <svg width={props.width||"29"} height={props.height||"28"} viewBox={`0 0 ${props.width||29} ${props.height||28}`} fill={props.fill||"none"} xmlns="http://www.w3.org/2000/svg">
<path d="M14.4001 25.6663C20.8434 25.6663 26.0667 20.443 26.0667 13.9997C26.0667 7.55635 20.8434 2.33301 14.4001 2.33301C7.95674 2.33301 2.7334 7.55635 2.7334 13.9997C2.7334 20.443 7.95674 25.6663 14.4001 25.6663Z" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.4004 7V14L19.0671 16.3333" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>




  )
}

export default Clock