import { Button, Input, InputProps } from "@nextui-org/react";
import useToggle from "@src/hooks/useToggle/useToggle";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
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
                            <IconEye className="text-default-400" />
                        ) : (
                            <IconEyeOff className="text-default-400" />
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
