import { useRouter } from "next/navigation";
import { ElementType } from "react";

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    icon?: ElementType
    text?: string;
}

export default function Button(props: ButtonProps) {
    return (
        <span 
            className="bg-[#006738] w-max md:w-[260px] items-center text-[#52a528] p-3 rounded-md flex my-3 cursor-pointer gap-2 hover:bg-[#175036] ease-linear transition-all" 
            onClick={props.onClick}
        >
            {props.icon && <props.icon className="text-white" />}
            <p className="hidden md:block text-white">{props.text}</p>
        </span>
    );
}
