const ContributorsList = ({contributions}) => {
    return (
        <>
            <div className="p-4 text-center">
                <div className="border border-[rgb(177,177,177)] rounded-md p-4 flex flex-col items-center">
                    <p>Verified Contributions</p>
                    <div className="w-full mt-4 flex flex-col items-start overflow-x-auto">
                        <table className="cont-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contributions.map((c) => {
                                        return (
                                            <>
                                            <tr>
                                                <td>{c.name}</td>
                                                <td>{c.amount}</td>
                                            </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContributorsList;
