import Home from '@/app/page'
import React from 'react'

export default function CriarReuniao() {
    const outletContent = (
      <div>
        <h1>Criar Reunião</h1>
      </div>
    );
  
    return (
      <>
        <Home outletContent={outletContent} />
      </>
    )
  }