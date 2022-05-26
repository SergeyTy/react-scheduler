import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import "./MySwipe.css"
import moment from "moment";
import "moment/locale/ru";
import { locale } from 'moment';

const styles = {
    slide: {
        "margin": 0,
        "min-width": "fill-available",
        "border-bottom": "2px solid #000000",
        "border-top": "2px solid #000000",
        },
    slide1: {
        background: '#FEA900',
    },
    slide2: {
        background: '#B3DC4A',
    },
    slide3: {
        background: '#6AC0FF',
    },
};

const MySwipe = (props) => (
    
    <SwipeableViews enableMouseEvents index={moment().day()-1}>
        {props.data.scheduler.map((day) => (
            <div style={Object.assign({}, styles.slide)}>
                <div className='Header'>{day.day}</div>
                {day.sch.map((i) => (
                    <div className='sub-card'>
                        <div className='sub-card-1-row'>
                            <p className='sub-card-item sub-card-time'>{i.time}</p>
                            <p className='sub-card-item' style={{"font-weight": "bold", "margin": "0 0 0 0.5em"}}>{i.sub}</p>
                            {i.type == 'Лекция' && 
                                <p className='sub-card-item t-l'>{i.type}</p>
                            }
                            {i.type == 'Практика' && 
                                <p className='sub-card-item t-p'>{i.type}</p>
                            }
                            {i.type == 'Лабараторная работа' && 
                                <p className='sub-card-item t-lr'>{i.type}</p>
                            }
                            <p className='sub-card-item'>{i.place}</p>
                            <p className='sub-card-item'>{i.prepod}</p>
                        </div>
                    </div>
                ))}
            </div>
        ))}
    </SwipeableViews>
);

export default MySwipe;