import React from 'react';
import B from './busket.module.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import {RemuveItem,TotlePrice} from '../../Redux/redusers/mainReduser'
import { useSelector, useDispatch } from 'react-redux';


const Busket = () => {
const item = useSelector(state => state.mainReduser.busket)
const totleCount = useSelector(state => state.mainReduser.totlePrice)
const dispatch = useDispatch(null);

    return (
        <div className={B.Busket}>
           <div className={B.wraps}>{item?.map(i =>
            <div className={B.clothers}>
                <div><img className={B.img} src={i.img}/></div>
                <div className={B.name}>{i.name}</div>
                <div>{i.price } руб.</div>
                <div>
                    
                </div>
                <Stack>
                    <Button onClick={() => dispatch(RemuveItem(i.id))} variant="outlined" startIcon={<DeleteIcon />}>
                        Удалить
                    </Button>
                </Stack>

               <div>

               </div>
            </div>
            
            )}
            
            </div>
            
        </div>
        
    );
    
}

export default Busket;
