import PageContainer from '@/app/components/pagecontainer';
import Home from '@/app/page'
import React from 'react'

export default function AgendarReuniao() {
    const options = [
      { value: '1', label: 'Não repetir' },
      { value: '2', label: 'Repetir 1 vez ao dia' },
      { value: '3', label: 'Repetir 1 vez na semana' },
      { value: '4', label: 'Repetir 1 vez ao mês' },
    ]

    const outletContent = (
      <>
        <PageContainer>
          <h1 className='text-[#00694e] text-3xl'>Agendar Reunião</h1>
          <div className='text-[#3d3d3d] flex justify-center items-center w-full h-full gap-10'>
            <label htmlFor="aa" className='flex flex-col items-center justify-center'>
              <p className='text-left w-full'>Data</p>
              <input type="text" name="" id="" className='border border-slate-300 rounded' />
            </label>
            <label htmlFor="aa" className='flex flex-col items-center justify-center'>              
              <p className='text-left w-full'>Hora</p>
              <input type="text" name="" id="" className='border border-slate-300 rounded' />
            </label>
            <label htmlFor="aa" className='flex flex-col items-center justify-center'>             
              <p className='text-left w-full'>Link da Reunião</p>
              <input type="text" name="" id="" className='border border-slate-300 rounded'/>
            </label>
            <label htmlFor="aa" className='flex flex-col items-center justify-center'>              
              <p className='text-left w-full'>Repetir</p>  
              <select name="" id="">
                {options.map((item, index) => {
                  return <option key={index} value={item.value}>{item.label}</option>
                 })}
              </select>
            </label>

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