import { Button, Spinner, cn } from "@nextui-org/react";
import { RefreshIcon } from "@src/components/icons/refresh";
import CountDown from "@src/components/ui/countDown/countDown";
import { useResendOTP } from "@src/hooks/api/useResendOTP/useResendOTP";
import { useVerifyUser } from "@src/hooks/api/useVerifyUser/useVerifyUser";
import { falsyString } from "@src/lib/utils/falsyString";
import { useRouter } from "next/router";
import { CSSProperties, FC, useState } from "react";
import OtpInput from "react-otp-input";

interface VerifyFormProps {}

const VerifyForm: FC<VerifyFormProps> = () => {
    const router = useRouter();

    const [otp, setOtp] = useState("");
    const [isOtpDisabled, setIsOtpDisabled] = useState(false);
    const [isCountDownFinished, setIsCountDownFinished] = useState(false);

    const OTP_INPUT_LENGTH = 6;
    const OTP_COUNT_DOWN_TIME = 120; // in seconds
    const email = router.query.email as string;

    const resendOTPMutation = useResendOTP({
        onSuccess() {
            // Reset OTP
            setIsCountDownFinished(false);
            setIsOtpDisabled(false);
            setOtp("");
        },
    });

    const verifyUserMutation = useVerifyUser({
        onSuccess() {
            router.push("/auth/login");
        },
        onSettled() {
            setIsOtpDisabled(false);
        },
    });

    const handleOtpChange = (otp: string): void => {
        setOtp(otp);

        if (otp.length === OTP_INPUT_LENGTH) {
            setIsOtpDisabled(true);
            verifyUserMutation.mutate({ email, OTP: otp });
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
                        {falsyString(email)}
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

                {/* CountDown Section */}
                <div className="min-h-10">
                    {!isCountDownFinished && (
                        <span className="flex justify-between min-w-[170px] text-sm">
                            <span>Wait </span>
                            <CountDown
                                initialSeconds={OTP_COUNT_DOWN_TIME}
                                onFinish={() => setIsCountDownFinished(true)}
                            />
                            <span> to resend OTP</span>
                        </span>
                    )}
                    {isCountDownFinished && (
                        <Button
                            color="primary"
                            variant="ghost"
                            endContent={
                                <RefreshIcon
                                    className={cn(
                                        "w-5",
                                        resendOTPMutation.isPending
                                            ? "animate-spin"
                                            : ""
                                    )}
                                />
                            }
                            onClick={() => {
                                resendOTPMutation.mutate({ email });
                            }}
                        >
                            Resend OTP
                        </Button>
                    )}
                </div>

                {/* Verify User Loading Spinner */}
                <div className="min-h-10">
                    {verifyUserMutation.isPending && (
                        <Spinner color="primary" />
                    )}
                </div>
            </form>
        </section>
    );
};

export default VerifyForm;
