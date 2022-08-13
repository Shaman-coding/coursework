import React,{ useEffect,useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import InfoCard from './infoCard';
import {useParams} from 'react-router-dom'
import IC from './infoCard.module.css';
import {AddInfoCards} from '../../../Redux/redusers/mainReduser'

const InfoContainer = () => {
    const {id} = useParams();
    const dispatch = useDispatch(null)
    const infoList = useSelector(state => state.mainReduser.infoCard);

    useEffect(() => {
        axios.get("http://localhost:5000/api/device/" + id)
        .then(Response => {
            debugger
            dispatch(AddInfoCards(Response.data))
        })
    },[])
    return (
        <div>
            <InfoCard info = {infoList}/>
        </div>
    );
}

export default InfoContainer;
