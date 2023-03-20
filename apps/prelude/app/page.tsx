'use client';
import  Button  from "ui/Button";
import "../styles/globals.css";


export default function Web() {
    // const handleClick = () => {
    //     console.log('Clicked!');
    //   };
   
    return (
        <div>
            <div className="text-2xl bg-teal-500">alksjdflk</div>
             <Button  onClick={() => console.log("You clicked!")}> INLOGGEN </Button>
             <Button intent="secondary" size='small'  onClick={() => console.log("You clicked!")}> OUTLoggen </Button>
        </div>
    );
}
