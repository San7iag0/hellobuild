import { Stack, TextField } from '@mui/material'

type InputVariant = "outlined" | "filled" | "standard";
type InputType = "text" | "password" | "number" | "search";

interface InputProps {
    variant: InputVariant;
    label: string;
    type: InputType
}

export const InputMui = ({variant, label, type}: InputProps)  => {
    return (
        <Stack spacing={2} >
           <TextField 
                label={label} 
                variant={variant} 
                type={type} 
                sx={{
                    backgroundColor: 'rgba(0,0,0,.5)',
                    borderBottom: '1px solid #fff',
                  }}
                  InputLabelProps={{
                    sx: {
                      color: '#fff',
                      textTransform: 'capitalize',
                    },
                  }}
            />
        </Stack>
    )
}
