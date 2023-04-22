import React from 'react';
import { Search } from './search';
import { Button } from './Button';
import { Link } from './link';
//import { Text } from './text';
import image from './img/image.webp';

export interface NavbarProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
    label?: string;
    placeholder?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
    const { className = '', ...rest } = props;

    return (
        <div>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <div className="grid-rows-3 flex flex-row justify-center items-center mb-10">
                <Link className="px-20 text-gray-600"> collections </Link>
                <Link className="px-20 text-gray-600"> discover </Link>
                <Link className="px-20 text-white"> my profile </Link>
            </div>
            <div className="mb-8">
                <Search></Search>
            </div>
            <div className=" drop-shadow-md text-white text-4xl my-8 flex flex-row justify-center items-center ">
                best moments with you
            </div>

            <div className="flex flex-row justify-center items-center text-[#38B1AD] mb-8 font-base">
                make.play.share
            </div>
            <div className=" grid-rows-2 flex flex-row justify-center items-center">
                <Button
                    className="font-light mx-4 px-40"
                    intent="secondary"
                    size="medium"
                >
                    sing up
                </Button>

                <Button
                    className=" font-light mx-4 px-40"
                    intent="primary_header"
                    size="medium"
                >
                    login
                </Button>
            </div>
        </div>
    );
};
