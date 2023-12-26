import { FC } from "react";
import styles from "./baseComponent.module.scss";

export interface IBaseComponentProps {
    prop: string;
}

const BaseComponent: FC<IBaseComponentProps> = ({ prop }) => {
    return <div className={styles.component}>{prop}</div>;
};

export default BaseComponent;
