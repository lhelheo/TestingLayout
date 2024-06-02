import Home from '@/app/page'
import React from 'react'

export default function CriarReuniao() {
    const outletContent = (
      <>
        <div className='p-5'>
            <h1 className='text-[#00694e] text-3xl'>Nova Reunião</h1>
            <div className='text-[#3d3d3d] w-full h-full'>
                <p>Link da Reunião</p>
            </div>
        </div>
      </>
    );
  
    return (
      <>
        <Home outletContent={outletContent} />
      </>
    )
  }