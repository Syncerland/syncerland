import { FC, useEffect, useState } from "react";

interface CountDownProps {
    initialSeconds: number;
    onFinish: () => void;
}

const CountDown: FC<CountDownProps> = ({ initialSeconds, onFinish }) => {
    const [seconds, setSeconds] = useState(Math.ceil(initialSeconds));

    useEffect(() => {
        // Exit early if countdown is finished
        if (seconds <= 0) {
            onFinish();
            return;
        }

        // Set up the timer
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        // Clean up the timer
        return () => clearInterval(timer);
    }, [seconds]);

    // Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
    const formatTime = (timeInSeconds: number): string => {
        const minutes = Math.floor(timeInSeconds / 60)
            .toString()
            .padStart(2, "0");
        const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return <p>{formatTime(seconds)}</p>;
};

export default CountDown;
