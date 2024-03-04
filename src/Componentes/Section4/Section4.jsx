import React from 'react'
import Sena from '../../assets/logoSena.png'
import ProgressBar from "@ramonak/react-progress-bar";
import react from '../../assets/react.png';
import js from '../../assets/Js.png';
import mongo from '../../assets/mongo.png';
import node from '../../assets/node.png';
import '../Section4/Section4.css'



export const Section4 = () => {
    return (
        <>

            <div className='container'>
                <div className='s1'>
                    <img src={Sena} alt="" />
                    <h1>EXPERIENCIAS</h1>
                </div>
            </div>
            <div className='logos'>
                <div className='react'>
                    <img src={react} alt="" />
                    <ProgressBar baseBgColor='#c1ff95' bgColor='#39a900'labelColor='#39a900'className='wrapper' completed={40} />;
                    <p className='p'>Bases</p>
                </div>
                <div className='js'>
                    <img src={js} alt="" />
                    <ProgressBar baseBgColor='#c1ff95' bgColor='#39a900'labelColor='#39a900'className='wrapper' completed={40} />;
                    <p className='p'>Bases</p>
                </div>
                <div className='mongo'>
                    <img src={mongo} alt="" />
                    <ProgressBar baseBgColor='#c1ff95' bgColor='#39a900'labelColor='#39a900'className='wrapper' completed={40} />;
                    <p className='p'>Bases</p>
                </div>
                <div className='node'>
                    <img src={node} alt="" />
                    <ProgressBar baseBgColor='#c1ff95' bgColor='#39a900'labelColor='#39a900'className='wrapper' completed={40} />;
                    <p className='p'>Bases</p>
                </div>
            </div>

        </>


    )
}

