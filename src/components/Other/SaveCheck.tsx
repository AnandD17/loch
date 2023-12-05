import React from "react";
import { ICONS } from "../../assets/icons";

type Props = {};

const SaveCheck = (props: Props) => {
  const [flag, setFlag] = React.useState(true);
  if (flag)
    return <button onClick={()=>setFlag(!flag)} className="text-gray-900 text-[9px] font-600">Save</button>;
  else return <ICONS.CHECK  onClick={()=>{setFlag(!flag)}}/>;
};

export default SaveCheck;
