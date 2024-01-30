import { Input, InputProps } from "@nextui-org/react";
import { CloseEyeIcon } from "@src/components/icons/closeEye";
import { OpenEyeIcon } from "@src/components/icons/openEye";
import useToggle from "@src/hooks/useToggle/useToggle";
import { forwardRef } from "react";

interface PasswordInputProps extends InputProps {}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    (props, ref) => {
        const [isVisible, toggleVisibility] = useToggle(false);
        return (
            <Input
                ref={ref}
                type={isVisible ? "text" : "password"}
                endContent={
                    <button
                        className="focus:outline-none"
                        type="button"
                        onClick={() => {
                            toggleVisibility();
                        }}
                    >
                        {isVisible ? (
                            <OpenEyeIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <CloseEyeIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>
                }
                {...props}
            />
        );
    }
);

PasswordInput.displayName = "Input";

export default PasswordInput;
