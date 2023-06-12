import React, { useState } from 'react'

const FaqContent = (props) => {
    const [item , setItem] =useState(props.datas)
    const handletoggleActive = () =>{
        let newActive =item.active === 1 ? 0 : 1;
        setItem({...item , active: newActive});
    }
  return (
    <div>
        <div className={`bg-[#ffffff] p-5 border border-[#c9c6c655 ] rounded-lg w-[600px] group ${item.active === 1 ? 'is-active' : ''} duration-500 mb-5 cursor-pointer m-5 ` } onClick={handletoggleActive}>
            <div className='flex items-center mx-5'>
            <div className='w-full 
            group-[.is-active]:font-bold 
             ' >{item.question}</div>
            <div className='text-xl rotate-90 group-[.is-active]:rotate-[270deg] duration-500 cursor-pointer font-bold' onClick={handletoggleActive} >></div>
            </div>
            <div className='overflow-hidden max-h-0  group-[.is-active]:max-h-[200px] duration-500 px-4 '>
              
              {item.answer}
            </div>
        
        </div>
    </div>
  )
}

export default FaqContent
