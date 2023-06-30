import { useGetTotalSummaryQuery } from '@/store/api'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import Card from '../Card'
import { MdOutlineLocalOffer, MdOutlineRequestPage } from 'react-icons/md'
import { FaCar } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

type Props = {}

const icons = new Map([
    ['riderequests', MdOutlineRequestPage],
    ['rideoffers', MdOutlineLocalOffer],
    ['drivers', AiOutlineUser],
    ['vehicles', FaCar]

])

const TotalCommuters = (props: Props) => {
    const { data } = useGetTotalSummaryQuery()
  return (
    <>
        {
        data?.map((change, index) => <Card key={index} Icon={icons.get(change.name) as IconType} Item={change}/>)
        }
    </>
  )
}

export default TotalCommuters