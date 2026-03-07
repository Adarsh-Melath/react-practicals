import useToggle from "./useToggle"

const ToggleButton = () => {
    const [toggleState, setToggleState] = useToggle(true);
    return (
        <>
            <button onClick={setToggleState}>{toggleState ? "ON" : "OFF"}</button>
        </>
    )
}

export default ToggleButton