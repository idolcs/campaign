const Progress = ({collected, target}) => {
    return (
        <>
            <div className="p-4 text-center">
                <div className="border border-[rgb(177,177,177)] rounded-md p-4 flex flex-col items-center">
                    <p>Campaign Progress</p>
                    <div className="w-full mt-4 flex flex-col items-center">
                        <div className="w-full h-[1.5em] bg-gray-300  max-w-[500px] rounded overflow-hidden">
                            <div style={{width: `${(collected / target) * 100}%`}} className="bg-green-500 rounded h-full"></div>
                        </div>
                        <div className="p-2">
                            <p>{collected ? collected : 0} / {target ? target : 0}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progress;