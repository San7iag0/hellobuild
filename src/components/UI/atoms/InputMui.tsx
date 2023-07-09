import { Stack, TextField } from '@mui/material'

type InputVariant = "outlined" | "filled" | "standard";
type InputType = "text" | "password" | "number" | "search";

interface InputProps {
    variant: InputVariant;
    label: string;
    type: InputType;
    style: any;
    onChange: (str: string) => void;
}

export const InputMui = ({ variant, label, type, style, onChange }: InputProps)  => {
    return (
        <div style={style}>
            <Stack spacing={3}>
            <TextField
                    label={label}
                    variant={variant}
                    type={type}
                    onChange={event => onChange(event.target.value)}
                    sx={{
                        backgroundColor: 'rgba(0,0,0,.1)',
                        borderBottom: '1px solid #fff' 
                    }}
                    inputProps={{
                        sx: {
                          color: '#fff',
                          paddingLeft: '15px',
                          fontSize: '20px',

                          '&:hover fieldset': {
                            border: '2px solid blue!important',
                            borderRadius: 0,
                          },
                          '&:focus-within fieldset, &:focus-visible fieldset': {
                            border: '4px solid red!important',
                          },
                        },
                    }}
                    InputLabelProps={{
                    sx: {
                        color: '#fff',
                        textTransform: 'capitalize',
                        fontSize: '20px',
                    },
                    }}
                />
            </Stack>
        </div>
    )
}
