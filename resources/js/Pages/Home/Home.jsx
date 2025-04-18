import axios from "axios";
import DefaultLayout from "../../Layout/DefaultLayout";
import Contribution from "./Contribution/Contribution";
import ContributorsList from "./ContributorsList/ContributorsList";
import Progress from "./Progress/Progress";
import { useState, useEffect } from "react";

const Home = () => {
    const [contributions, setContributions] = useState([]);
    const [goals, setGoals] = useState({
        collected: 0,
        target: 1500,
    });

    useEffect(() => {
        axios
            .get("/api/contribution/get")
            .then((res) => {
                setContributions(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const collected = contributions.reduce((total, c) => {
            return total + c.amount;
        }, 0);

        setGoals({
            collected: collected,
            target: 1800,
        });
    }, [contributions]);

    return (
        <>
            <div className="p-4 text-center">
                <p className="text-[1.3em] font-bold">
                    Campaign for ChatGPT Plus (Sem 4)
                </p>
                <p className="mt-4">
                    As we are nearing the end of the semester, we all are waiting for 
                    notes and important resources to study for the exams.
                    <br />
                    <br />
                    Ayyub aka Shadow has been consistenly providing us with all the required
                    resources needed to nail the exams and he is doing it for this semester too.
                    But we are met with a problem, the current free models of ChatGPT are not 
                    sufficient to keep up with the pace of the semester and we need to upgrade to
                    ChatGPT Plus to get the best out of it.
                    <br />
                    <br />
                    We are raising funds to get ChatGPT Plus for the organisation so that we can continue
                    to recieve the best resources and notes for the semester. The amount we are raising is
                    1800 INR and we need your help to achieve this goal. We are requesting each one of you to
                    contribute a small amount to this cause.
                </p>
                <p className="mt-4 text-[0.8em]">~ Yash, idolcs.com</p>
            </div>
            <Contribution />
            <Progress collected={goals.collected} target={goals.target} />
            <ContributorsList contributions={contributions} />
        </>
    );
};

Home.layout = (page) => <DefaultLayout children={page} />;
export default Home;
