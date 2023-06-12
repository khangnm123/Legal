import React from 'react'
import Vector from'../Img/Vector.png'
const HeaderNav = () => {
  return (
    <div className='container-big w-full  mx-11 left-6 flex items-center justify-between'>
        <div className='context-h1 '>
            <div className='context-left flex items-center mx-10'>
                <img src={Vector} alt="" width="40px"></img>
                <h1 className='text-lg'>Hygge</h1>
            </div>
           
        </div>
        <div className='menu'>
                <b className='text-lg'>=</b>
        </div>
        <div className='icon flex '>
            <a className='mx-4'  href='#'>icon</a>
            <a  className='mx-4' href='#'>icon</a>
            <a href='#'>icon</a>
        </div>
    </div>
  )
}

export default HeaderNav
