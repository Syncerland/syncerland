import { falsyString } from "@src/lib/utils/falsyString";
import { useRouter } from "next/router";
import { CSSProperties, FC, useState } from "react";
import OtpInput from "react-otp-input";

interface VerifyFormProps {}

const VerifyForm: FC<VerifyFormProps> = () => {
    const router = useRouter();
    const [otp, setOtp] = useState("");
    const [isOtpDisabled, setIsOtpDisabled] = useState(false);

    const OTP_INPUT_LENGTH = 6;
    const emailAddress = router.query.email as string;

    const handleOtpChange = (otp: string): void => {
        setOtp(otp);

        if (otp.length === OTP_INPUT_LENGTH) {
            setIsOtpDisabled(true);
        }
    };

    const otpInputStyles: string | CSSProperties = {
        border: "1px solid #ccc",
        width: "40px",
        height: "50px",
        margin: "0 10px 0 0",
        outlineColor: "#17a398",
    };

    return (
        <section className="w-full flex flex-col justify-center items-center gap-7">
            <div className="w-full flex flex-col gap-1 items-center text-center">
                <h2 className="text-xl sm:text-2xl font-bold">
                    Verify Your email address
                </h2>
                <p>
                    Verification email is sent to{" "}
                    <span className="text-primary-500">
                        {falsyString(emailAddress)}
                    </span>
                </p>
            </div>
            <form className="w-full flex flex-col gap-8 items-center">
                <OtpInput
                    value={otp}
                    onChange={handleOtpChange}
                    numInputs={OTP_INPUT_LENGTH}
                    renderInput={(props) => (
                        <input {...props} disabled={isOtpDisabled} />
                    )}
                    inputType="number"
                    shouldAutoFocus
                    inputStyle={otpInputStyles}
                />
            </form>
        </section>
    );
};

export default VerifyForm;