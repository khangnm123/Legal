import React from 'react'
import './List.css'
const ListContent = () => {
  return (
    <div className='list__content flex'>
        <div className='list__border m-5  border  border-[#c9c6c655 ]'>
            <div className='list__context flex'>
                <div className='context-p w-full'>
                    <p>Topic</p>
                </div>
                <div className='context-icon rotate-90'>
                    >
                </div>
            </div>
            
        </div>
        <div className='list__border m-5  border  border-[#c9c6c655 ]'>
            <div className='list__context flex'>
                <div className='context-p w-full'>
                    <p>Category</p>
                </div>
                <div className='context-icon rotate-90'>
                    >
                </div>
            </div>
            
        </div>
        <div className='list__border m-5 right-40 absolute  border  border-[#c9c6c655 ]'>
            <div className='list__context flex'>
                <div className='context-p w-full'>
                    <p>Sort By</p>
                </div>
                <div className='context-icon rotate-90'>
                    >
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ListContent
