import React from 'react';
interface helloProps {
    message: string
}
const Hello = (props: helloProps) => {
    return <h2>{props.message}</h2>
}
export default Hello
