import React from 'react';
import C from './light.module.css';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {AddItemBusket} from '../../../Redux/redusers/mainReduser'


const Light = ({infoCard}) => {

    const dispatch = useDispatch(null)
    
    function addItemsBusket () {
        dispatch(AddItemBusket(infoCard))
    }
   
    return (
        <div className={C.cards}>
            <div className={C.card}>
                <Card style={{ width: '18rem' }}>
                <NavLink to={`/info/${infoCard.id}`  }><Card.Img className={C.img} variant="top" src={infoCard.img} />  </NavLink>
                <Card.Body>
                    <Card.Title className={C.txt}>{infoCard.name}</Card.Title>
                    <Card.Text>
                      <p>{infoCard.price}р.</p>
                    </Card.Text>
                    <p className={C.btn} onClick={() => addItemsBusket()} >В корзину</p>
                </Card.Body>
                </Card>
            </div>
            
        </div>
    );
}

export default Light;
