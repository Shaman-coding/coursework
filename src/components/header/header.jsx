import React,{useState} from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';
import H from './header.module.css';
import {useSelector,useDispatch} from 'react-redux';
import {FiltredItem} from '../../Redux/redusers/mainReduser';






const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const Header = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('')
    const countItem = useSelector(state => state.mainReduser.busket);
    let count = countItem.length;
   dispatch(FiltredItem(value))
   
    return (
        <div className={H.Headers}>
            <div>
                <div className={H.title}>Небосвод</div>
            </div>

            <div className={H.searchIn}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                <InputBase
                    onChange={(e) => setValue(e.target.value)} 
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Найти товар "
                   
                />
                
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
            </div>

        <div>
            <NavLink to={'/login'}>login</NavLink>/<NavLink to={"/registration"}>registration</NavLink> 
        </div>

           <div className={H.bt}>
           <div>
               <NavLink to={'/busket'}> 
                <IconButton aria-label="cart">
                        <StyledBadge badgeContent={count} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </NavLink>
            </div>
           </div>
            
        </div>
    );
}

export default Header;
