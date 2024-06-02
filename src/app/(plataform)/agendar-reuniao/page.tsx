import Home from '@/app/page'
import React from 'react'

export default function AgendarReuniao() {
    const outletContent = (
      <>
        <div className='p-5'>
            <h1 className='text-[#00694e] text-3xl'>Agendar Reunião</h1>
            <div className='text-[#3d3d3d] w-full h-full'>
                <p>Agendamento da Reunião</p>
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