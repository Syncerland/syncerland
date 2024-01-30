import { FC, SVGProps } from "react";

export const InfoIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            {...props}
        >
            <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4m0-4h.01"></path>
            </g>
        </svg>
    );
};
