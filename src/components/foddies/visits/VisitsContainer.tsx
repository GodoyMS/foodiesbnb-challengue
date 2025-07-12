import { IRestaurant } from '@/interfaces/Restaurant.interface'
import React from 'react'
import EmptyVisits from './EmptyVisits'
import { IVisit } from '@/interfaces/Visit.interface'
import ExisitingVisits from './ExisitingVisits'

const VisitsContainer = ({visits}:{visits:IVisit[]}) => {

    if(visits.length===0){

        return <EmptyVisits/>
    }
  return (
    <ExisitingVisits visits={visits}/>
  )
}

export default VisitsContainer