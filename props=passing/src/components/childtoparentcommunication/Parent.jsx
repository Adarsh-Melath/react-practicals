import Child from "./Child";

const Parent = () => {
    const greet = (name) => {
        console.log(`Hello ${name}`);
    }
    return (
        <>
            <Child greet={greet} />
        </>
    )
}

export default Parent