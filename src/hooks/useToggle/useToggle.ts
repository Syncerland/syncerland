import { useCallback, useState } from "react";

// eslint-disable-next-line no-unused-vars
export type UseToggle = [boolean, (state?: boolean) => void];

const useToggle = (initialState?: boolean): UseToggle => {
    const [toggle, setToggle] = useState<boolean>(initialState ?? false);

    const toggleFn = useCallback((state?: boolean) => {
        setToggle((prevState) => state ?? !prevState);
    }, []);

    return [toggle, toggleFn];
};

export default useToggle;
