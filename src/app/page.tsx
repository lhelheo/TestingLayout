"use client"
import { Calendar, Clock, Plus, Settings, Upload } from "lucide-react";
import { useRouter } from "next/navigation";

interface HomeProps {
  outletContent: React.ReactNode;
}

export default function Home( {outletContent} : HomeProps) {
  const router = useRouter()
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="bg-[#133601] h-screen p-4">
          <p className="flex justify-center text-white font-semibold text-2xl">Banese</p>
          <div className="text-white font-light flex flex-col justify-center items-center pt-5">
            <p className="text-[22px]">RCU</p>
            <p className="text-[16px]">REUNIÃO E CRIAÇÃO DE US</p>
          </div>
          <div className="flex flex-col p-6 gap-6">
            <div className="flex flex-col gap-6 justify-between h-full">
              
              <div>
                <p 
                  className="bg-white text-[#133601] p-3 rounded-md flex my-3 cursor-pointer"
                  onClick={() => router.push('/criar')}  
                >
                  <Plus />
                  Nova Reunião
                </p>
                <p 
                  className="bg-white text-[#133601] p-3 rounded-md flex my-3 cursor-pointer"
                  onClick={() => console.log('a')}  
                >
                  <Upload />
                  Upload de Reunião
                </p>
                  
                <p 
                  className="bg-white text-[#133601] p-3 rounded-md flex my-3 cursor-pointer"
                  onClick={() => console.log('a')}
                >
                  <Calendar />
                  Agendar Reunião
                </p>
              </div>
              
              <div>
                <span 
                  className="bg-white text-[#133601] p-3 rounded-md flex my-3 cursor-pointer"
                  onClick={() => console.log('a')}
                >
                  <Clock />
                  Histórico de Reunião
                </span>
                <span 
                  className="bg-white text-[#133601] p-3 rounded-md flex my-3 cursor-pointer"
                  onClick={() => console.log('a')}  
                >
                  <Settings />
                  Configurações
                </span>
              </div>

              </div>
          </div>
        </div>
     
        <div className="">
          {outletContent}
        </div> 
      </div>
    </>
  );
}
