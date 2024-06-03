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
            className="bg-[#00694e] text-[#133601] p-3 rounded-md flex my-3 cursor-pointer gap-2 hover:bg-black hover:border hover:border-bg-[#00694e] ease-linear transition-all" 
            onClick={props.onClick}
        >
            {props.icon && <props.icon className="text-white" />}
            <p className="text-white">{props.text}</p>
        </span>
    );
}
