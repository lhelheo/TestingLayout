"use client"
import { Calendar, Clock, Plus, Settings, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "./components/button";

interface HomeProps {
  outletContent: React.ReactNode;
}

export default function Home( {outletContent} : HomeProps) {
  const router = useRouter()
  return (
    <div className="grid grid-cols-6">
      <div className="1">
        <div className="shadow-2xl h-screen p-4">
          <p className="flex justify-center text-[#00694e] font-semibold text-2xl">Banese</p>
          <div className="text-white font-light flex flex-col justify-center items-center pt-5">
            <p className="text-[22px] text-[#00694e]">RCU</p>
            <p className="text-[16px] text-[#00694e] ">REUNIÃO E CRIAÇÃO DE US</p>
          </div>
          <div className="flex flex-col p-6 gap-6 h-[820px]">
            <div className="flex flex-col gap-6 justify-between h-full">
              
              <div>
                <Button 
                  icon={Plus} 
                  onClick={() => router.push('/nova-reuniao')} 
                  text="Nova Reunião">
                </Button> 
                <Button 
                  icon={Upload} 
                  onClick={() => router.push('/upload-reuniao')} 
                  text="Upload de Reunião">
                </Button> 
                <Button 
                  icon={Calendar} 
                  onClick={() => router.push('/agendar-reuniao')} 
                  text="Agendar Reunião">
                </Button>
              </div>
              
              <div>
                <Button 
                  icon={Clock} 
                  onClick={() => router.push('/historico-reuniao')} 
                  text="Histórico de Reunião">
                </Button>
                <Button 
                  icon={Settings} 
                  onClick={() => router.push('/configuracoes')} 
                  text="Configurações">
                </Button>
              </div>

              </div>
          </div>
        </div>
     
        

      </div>
      <div className="w-full overflow-x-hidden whitespace-no-wrap">
            {outletContent}
        </div>
    </div>
  );
}
