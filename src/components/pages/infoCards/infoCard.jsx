import React from 'react';
import I from './infoCard.module.css';
const InfoCard = ({info}) => {
  
    return (
        <div className={I.wrapper}>
          <div className={I.photo}>
            <img className={I.imgs} src={info.img}/>
          </div>
          <div>
                <div>{info.name}</div>
                <div>{info.price}р. </div>
                <div><button onClick={() => alert(info.id)}>в корзину </button></div>
          </div>
        </div>
    );
}

export default InfoCard;
