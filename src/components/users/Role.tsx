import React from 'react'

type Props = {
    role:string
}

const Role = ({role}: Props) => {
  switch(role){
    case 'commuter':{
        return (
        <p className="font-semibold px-3 py-1 text-xs text-cyan-500 rounded-full dark:bg-gray-800 bg-cyan-100/60">
            Commuter
        </p>
      );
    }
    case 'driver':{
        return (
        <p className="font-semibold px-3 py-1 text-xs text-fuchsia-500 rounded-full dark:bg-gray-800 bg-fuchsia-100/60">
            Driver
        </p>
      );
    }
    case 'admin':{
        return (
        <p className="font-semibold px-3 py-1 text-xs text-orange-500 rounded-full dark:bg-gray-800 bg-orange-100/60">
            Admin
        </p>
      );
    }
    default:
        return <div/>
  }
}

export default Role