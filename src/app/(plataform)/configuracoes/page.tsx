import PageContainer from '@/app/components/pagecontainer';
import Home from '@/app/page'
import React from 'react'

export default function Configuracoes() {
    const outletContent = (
      <>
        <PageContainer>
          <h1 className='text-[#00694e] text-3xl'>Configurações</h1>
          <div className='text-[#3d3d3d] w-full h-full'>
            <p>Configurações</p>
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