import React, { useState, useRef } from 'react'

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    person?: Person;
    handleChange: () => void;
}

export const TextField: React.FC<Props> = ({handleChange}) => {
    const [count, setCount] = useState<number | null>(5);
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return <div ref={divRef}><input ref={inputRef} onChange={handleChange}/></div>
}