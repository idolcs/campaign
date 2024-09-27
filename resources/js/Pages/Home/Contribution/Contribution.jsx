import upiQr from "../../../../../public/assets/upiqr.png";
import copyIcon from "../../../../../public/assets/copy-svgrepo-com.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const Contribution = () => {
    const copyUpiId = () => {
        const copyOperation =
            navigator.clipboard.writeText("9324612161@yespop");
        if (copyOperation) {
            alert("Text copied to clipboard");
        }
    };

    const [name, setName] = useState("");
    const [amount, setAmount] = useState('');

    const newContribution = () => {
        axios.post("/api/contribution/new", {
            name: name,
            amount: amount
        }).then((res) => {
            alert("Thank you for your contribution! It will reflect on the website as soon as it is confirmed manually")
        }).catch((err) => {
            alert("Something went wrong");
            console.error(err);
        });
    };

    return (
        <>
            <div className="p-4 text-center">
                <div className="border border-[rgb(177,177,177)] rounded-md p-4 flex flex-col items-center">
                    <p>Make a Contribution!</p>
                    <p className="mt-4">
                        Send the desired amount to{" "}
                        <span onClick={copyUpiId} className="cursor-pointer">
                            <strong>9324612161@yespop</strong>
                            <span>
                                <img
                                    className="ml-0.5 h-[1.2em] inline-block"
                                    src={copyIcon}
                                    alt=""
                                />
                            </span>
                        </span>
                    </p>
                    <p className="mt-4">or Scan the QR code below</p>
                    <img className="h-[10em]" src={upiQr} alt="" />
                    <p className="mt-4">
                        Fill the form below after making the payment
                    </p>
                    <div className="mt-2 flex flex-col gap-2 w-full max-w-[400px]">
                        <input
                            className="border border-[rgb(100,100,100)] p-2 w-full"
                            type="text"
                            placeholder="Name (as per UPI/Bank acc)"
                            value={name}
                            onInput={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <input
                            className="border border-[rgb(100,100,100)] p-2 w-full"
                            type="number"
                            placeholder="Amount"
                            value={amount}
                            onInput={(e) => {
                                setAmount(e.target.value);
                            }}
                        />
                        <button
                            onClick={newContribution}
                            className="border border-[rgb(24,77,20)] text-[rgb(24,77,20)] active:bg-[rgb(66,214,55)] p-2 w-full"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contribution;
