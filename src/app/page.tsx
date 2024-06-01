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
        <div className="shadow-2xl h-screen p-4">
          <p className="flex justify-center text-[#00694e] font-semibold text-2xl">Banese</p>
          <div className="text-white font-light flex flex-col justify-center items-center pt-5">
            <p className="text-[22px] text-[#00694e]">RCU</p>
            <p className="text-[16px] text-[#00694e] ">REUNIÃO E CRIAÇÃO DE US</p>
          </div>
          <div className="flex flex-col p-6 gap-6 h-[820px]">
            <div className="flex flex-col gap-6 justify-between h-full">
              
              <div>
                <p 
                  className="bg-[#00694e] text-[#133601] p-3 rounded-md flex my-3 cursor-pointer gap-2"
                  onClick={() => router.push('/criar')}  
                >
                  <Plus  className="text-white"/>
                  <span className="text-white">Nova Reunião</span>
                </p>
                <p 
                  className="bg-[#00694e] text-[#133601] p-3 rounded-md flex my-3 cursor-pointer gap-2"
                  onClick={() => console.log('a')}  
                >
                  <Upload className="text-white"/>
                  <span className="text-white">Upload de Reunião</span>
                </p>
                  
                <p 
                  className="bg-[#00694e] text-[#133601] p-3 rounded-md flex my-3 cursor-pointer gap-2"
                  onClick={() => console.log('a')}
                >
                  <Calendar className="text-white"/>
                  <span className="text-white">Agendar Reunião</span>
                </p>
              </div>
              
              <div>
                <span 
                  className="bg-[#00694e] text-[#133601] p-3 rounded-md flex my-3 cursor-pointer gap-2"
                  onClick={() => console.log('a')}
                >
                  <Clock className="text-white"/>
                  <p className="text-white">Histórico de Reunião</p>
                </span>
                <p 
                  className="bg-[#00694e] text-[#133601] p-3 rounded-md flex my-3 cursor-pointer gap-2"
                  onClick={() => console.log('a')}  
                >
                  <Settings className="text-white"/>
                  <span className="text-white">Configurações</span>
                </p>
              </div>

              </div>
          </div>
        </div>
     
        <div className="mx-auto max-w-full overflow-x-hidden whitespace-no-wrap">
            {outletContent}
        </div>

      </div>
    </>
  );
}
