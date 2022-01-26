import React from 'react';
import './card-list.styles.css'
import { Card } from '../Card/Card.component';

export const CardList = props =>{
    return <div className='card-list'>
    {props.monster.map(monster => 
    <Card key={monster.id} monster={monster}></Card>)}</div>
}
