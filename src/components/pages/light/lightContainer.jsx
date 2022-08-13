import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Light from './light'
import LC from './light.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {AddDevice} from '../../../Redux/redusers/mainReduser';


export default function LightContainer() {
const itemDevise = useSelector(state => state.mainReduser.device);
const dispatch = useDispatch();
const selector = useSelector(state => state.mainReduser.filterDevise)
    useEffect(() => {
         axios.get("http://localhost:5000/api/device")
        .then(Response => {
          dispatch(AddDevice(Response.data))
        })
    },[])

      
      
      
      const dev = itemDevise.filter(i => i.name.toLowerCase().includes(selector.toLowerCase()))
    
    const providerCardI = <div className={LC.container}>{dev?.map(item => <Light infoCard = {item} />)}</div>
    
  return (
   
    <div>
        {providerCardI}
    </div>
  )
}
