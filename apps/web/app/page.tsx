'use client';
import '../styles/globals.css';
import { Button } from './components/Button';

export default function Web() {
    // const handleClick = () => {
    //     console.log('Clicked!');
    //   };

    return (
        <div>
            <Button onClick={() => console.log('You clicked!')}>
                {' '}
                INLOGGEN{' '}
            </Button>
            <Button
                intent="secondary"
                size="small"
                onClick={() => console.log('You clicked!')}
            >
                {' '}
                REGISTERED{' '}
            </Button>
            <Button
                intent="primary_header"
                size="medium"
                onClick={() => console.log('You clicked!')}
            >
                {' '}
                ASK YOU QUESTION HERE{' '}
            </Button>
            <Button
                intent="secondary"
                size="medium"
                onClick={() => console.log('You clicked!')}
            >
                {' '}
                VIEW OUR OFFER{' '}
            </Button>
        </div>
    );
}
