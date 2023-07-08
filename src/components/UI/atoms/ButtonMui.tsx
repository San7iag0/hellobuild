import { Stack, Button } from '@mui/material'

type ButtonVariant = "text" | "outlined" | "contained";

interface ButtonProps {
    variant: ButtonVariant;
    children: React.ReactNode;
}

export const ButtonMui = ({variant, children}: ButtonProps)  => {
    return (
        <Stack spacing={2} >
            <Button variant={variant}>{children}</Button>
        </Stack>
    )
}