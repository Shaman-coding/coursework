import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import A from './auth.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {AddEmailUsers,AddPasswordUsers} from '../../Redux/redusers/AuthRedusers';
import axios from 'axios';

export default function Auth() {

  let dispatch = useDispatch();
  let createEmail = useSelector(state => state.authRedusers.email);
  let createPassword = useSelector(state => state.authRedusers.password);
  let [user, setUser] = useState();

  useEffect( () => {
     axios.post('http://localhost:5000/api/auth').then(Response => {
      setUser(Response.data)
     })
  })


  
  return (
    <div className={A.wraps}>
      <div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            '& .MuiTextField-root': { width: '25ch' },
          }}
        >
      
        <div>
          <div>
            <h1>Авторизация</h1>
          </div>
          <div className={A.inp}>
            <TextField onChange={(e) => dispatch(AddEmailUsers(e.target.value))} label={'Email'} id="margin-none" />
          </div>
          
          <TextField onChange={(e) => dispatch(AddPasswordUsers(e.target.value))} label={'Password'} id="margin-none" />
        </div>
     
       </Box>
      </div>
    </div>
  )
}
