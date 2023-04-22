import React, { useState } from 'react';
import { Input } from './Input';

export interface SearchProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
    label?: string;
    placeholder?: string;
}

export const Search: React.FC<SearchProps> = (props) => {
    const { className = '', ...rest } = props;
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.currentTarget.elements);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleFormSubmit}>
                <Input
                    placeholder="search"
                    value={term}
                    onChange={handleChange}
                    className="text-center placeholder-black pe-px px-40 bg-white "
                ></Input>
                {/* <button type="submit" className="btn">
                    Submit
                </button> */}
            </form>
        </div>
    );
};
