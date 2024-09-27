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
            target: 1500,
        });
    }, [contributions]);

    return (
        <>
            <div className="p-4 text-center">
                <p className="text-[1.3em] font-bold">
                    Campaign for Domain Renewal of IDOLCS.com
                </p>
                <p className="mt-4">
                    We hope you have used this platform and it has{" "}
                    <strong>created value</strong> in your academic journey, the
                    project has been{" "}
                    <span className="font-bold">free and open source</span> from
                    the beginning. While many people have consistently put out
                    content on the platform, there is minimal contribution from
                    the general members. As we are out of funds to renew the
                    domain, this is the opportunity for everyone to contribute
                    their fair share to the platform, to give back to the
                    community.
                </p>
                <p className="mt-4">
                    <span className="font-bold">What is the need for idolcs.com? </span> one might think. I remember
                    an incident while standing in line for the book collection
                    of Semester 1, one person in his mid-30s was standing in
                    front of me, he was standing there to collect books for his
                    wife, she was in MA in IDOL, he told me that his wife missed
                    her exams twice because nobody notified her and IDOL does
                    not have a systematic infrastructure for their purely
                    distance students.{" "}
                    <span className="font-bold">We are solving it!</span>{" "}
                    Idolcs.com exists because mu.ac.in is incompetent in terms
                    of building a community/platform for students, and as
                    distance learners, we need it the most.
                </p>
                <p className="mt-4">
                    I request you to contribute monetarily to the project in
                    whatever capacity you can and enable us to gather a sum of
                    Rs. 1500 for domain renewal for the year 2024-2025. <br />{" "}
                    <span className="italic">
                        And enable us to keep the show running.
                    </span>
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
