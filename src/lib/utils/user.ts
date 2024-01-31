import { User } from "@src/types/user.types";
import { getCookie, setCookie } from "cookies-next";
import { OptionsType } from "cookies-next/lib/types";

export const USER_KEY_IN_COOKIE = "user";
export const USER_COOKIE_OPTIONS: OptionsType = {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 12), // 365 days
    secure: true,
    sameSite: true,
};

export const setUser = (user: User): void => {
    setCookie(USER_KEY_IN_COOKIE, user, USER_COOKIE_OPTIONS);
};

export const getUser = (): User | undefined => {
    const value = getCookie(USER_KEY_IN_COOKIE, USER_COOKIE_OPTIONS); // => 'value'

    if (!value) return undefined;

    try {
        return JSON.parse(value) as User;
    } catch (error) {
        return undefined;
    }
};
