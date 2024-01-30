import { Button, Input, InputProps } from "@nextui-org/react";
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
                    <Button
                        isIconOnly
                        className="bg-transparent"
                        type="button"
                        onClick={() => {
                            toggleVisibility();
                        }}
                        aria-label="password visibility switch"
                    >
                        {isVisible ? (
                            <OpenEyeIcon className="text-2xl text-default-400 mt-1" />
                        ) : (
                            <CloseEyeIcon className="text-2xl text-default-400 mt-1" />
                        )}
                    </Button>
                }
                {...props}
            />
        );
    }
);

PasswordInput.displayName = "Input";

export default PasswordInput;
