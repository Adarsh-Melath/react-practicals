import { useMemo, useState } from "react";


const ExpensiveCalculationExample = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');


    const expensiveCalculation = useMemo(() => {

        console.log('calculating...');
        let i = 0;
        while (i < 1000000) {
            i++;
        }

        return count * count;
    }, [count])
    return (
        <>
            <h1>Square of {count} :{expensiveCalculation}</h1>
            <h1>count :{count} </h1>
            <button onClick={() => setCount(count + 1)}>+ </button>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </>
    )
}
export default ExpensiveCalculationExample
