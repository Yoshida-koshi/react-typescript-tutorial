import React from "react";

type Props = {
    name: string;
}

const Greet: React.FC<Props> = ({ name }) => {
    return <h1>こんにちは、{name}!</h1>
}

export default Greet;