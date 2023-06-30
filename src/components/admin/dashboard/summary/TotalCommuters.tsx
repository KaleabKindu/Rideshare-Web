import { useGetTotalCommutersQuery } from '@/store/api'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import Card from '../Card'
import { PercentageChange } from '@/types/stat'

type Props = {}

const TotalCommuters = (props: Props) => {
    const { data } = useGetTotalCommutersQuery()
  return (
    <div>
        <Card Icon={AiOutlineUser} Item={data as PercentageChange}/>
    </div>
  )
}

export default TotalCommuters