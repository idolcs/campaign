import {useState} from "react";

const Toggle = ({initState=false, callback}) => {

    const [isActive, setIsActive] = useState(initState);


    const toggle = async () => {
        const result = await callback();
        console.log(result);
        setIsActive(result.data.newState);
    }



    return(
        <>
            <div onClick={toggle}  className="w-[3em] h-[1.5em] bg-gray-300 rounded-full overflow-hidden m-1 cursor-pointer">
                <div className={`${isActive ? "bg-green-700 ml-[1.5em]" : "bg-red-500" } w-[1.5em] h-[1.5em]  rounded-full`}></div>
            </div>
        </>
    )
}

export default Toggle;