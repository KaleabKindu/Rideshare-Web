import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import { MdLogout } from 'react-icons/md'

type SideBarProps = {}

const SideBar = (props: SideBarProps) => {
  const router = useRouter()
  const routes:{name:string, to:string, icon:string}[] = [
    {
        name:'Overview',
        to:'/admin',
        icon:'overview.svg'
    },
    {
        name:'Ride Requests',
        to:'/admin/ride-requests',
        icon:'requests.svg'
    },
    {
        name:'Ride Offers',
        to:'/admin/ride-offers',
        icon:'offers.svg'
    },
    {
        name:'Users',
        to:'/admin/users',
        icon:'users.svg'
    }
]
  return (
    <div className='fixed flex flex-col top-0 left-0 bg-gray-100 h-screen md:w-52 pt-32 shadow-lg'>
      <div className='space-y-3'>
        {
            routes.map((route, index) => (
                <Link key={index} className={`flex items-center gap-3 font-bold py-2 px-5 ${router.pathname === route.to && 'bg-primary border-l-4 rounded-l-lg border-l-primary bg-opacity-20'}`} href={route.to}>
                  <Image width={20} height={20} src={`/images/admin/${route.icon}`}  alt={route.name}/>
                  <div className='hidden md:block text-primary'>{route.name}</div>
                </Link>
                
            ))
          }
      </div>
        
        <button className='flex items-center gap-3 py-2 px-5 mt-auto mb-[30%]'>
          <MdLogout className='text-primary' size={25} />
          <div className='hidden md:block'>Logout</div>
        </button>
    </div>
  )
}

export default SideBar