import PageContainer from '@/app/components/pagecontainer'
import Home from '@/app/page'
import React from 'react'

export default function CriarReuniao() {
    const outletContent = (
      <>
        <PageContainer>
          <h1 className='text-[#00694e] flex justify-start text-3xl '>Nova Reunião</h1>
          <div className='text-[#3d3d3d] w-full h-full flex flex-col items-center justify-center'>
            <div className='flex flex-col'>
              <p className='text-2xl'>Link da Reunião</p>
              <label className='flex flex-col '>
                <input type="text" name="peas" className='rounded-md border border-slate-400 w-full md:w-[360px]' />
              </label>
            </div>
          </div>
        </PageContainer>
      </>
    );
  
    return (
      <>
        <Home outletContent={outletContent} />
      </>
    )
  }