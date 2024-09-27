import axios from "axios";
import DefaultLayout from "../../Layout/DefaultLayout";

import {useState} from "react";
import Toggle from "./Toggle/Toggle";

const Admin = () => {

    const [password, setPassword] = useState();
    const [contributions, setContributions] = useState([]);

    const getData = () => {
        axios.post("/api/admin/get", {
            password: password
        }).then((res) => {
            setContributions(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }


    const toggleVerified = async (id) => {
        const success = await axios.post("/api/admin/toggle", {
            password: password,
            id: id
        });

        return {data: success.data};
    }

    return (
        <>
            <p>Admin Panel</p>

            <div className="mt-2">
                <input className="border border-red-500" type="text" placeholder="Enter your password here" value={password} onChange={(e) => {
                    setPassword(e.target.value);
                }} />
                <button className="px-2 border border-green-800 ml-2" onClick={getData}>Submit</button>
            </div>


            <div className="mt-8">
                <table className='cont-table'>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Amount</td>
                            <td>Verified</td>
                            <td>Time</td>
                        </tr>
                    </thead>
                    <tbody>
                        {contributions.map((c) => {
                            return(
                                <>
                                <tr>
                                    <td>{c.name}</td>
                                    <td>{c.amount}</td>
                                    <td><Toggle initState={c.verified} callback={() => {
                                        return toggleVerified(c.id)
                                    }} /></td>
                                    <td>{c.created_at}</td>
                                </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}

Admin.layout = (page) => <DefaultLayout children={page} />;
export default Admin;