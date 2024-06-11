import PageContainer from '@/app/components/pagecontainer';
import Home from '@/app/page'
import React from 'react'

export default function UploadReuniao() {
    const outletContent = (
      <>
        <PageContainer>
          <h1 className='text-[#00694e] text-3xl'>Upload Reunião</h1>
          <div className='text-[#3d3d3d] w-full h-full'>
            <p>Upload da Reunião</p>
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