import { Stack, Button } from '@mui/material'

type ButtonVariant = "text" | "outlined" | "contained";

interface ButtonProps {
    variant: ButtonVariant;
    children: React.ReactNode;
    onClick: () => void;
}

export const ButtonMui = ({variant, children, onClick}: ButtonProps)  => {
    return (
        <Stack spacing={2} >
            <Button variant={variant} onClick={onClick}>{children}</Button>
        </Stack>
    )
}