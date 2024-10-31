import TextField from '@mui/material/TextField';
import { useState } from 'react';

export const Input = () => {
    const [value, setValue] = useState('');
    const handleSetValue = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setValue(event.target.value);
    };
    return (
        <TextField
            onChange={handleSetValue}
            value={value}
            label={'Search by country code'}
            id="filled-hidden-label-small"
            variant="filled"
            size="small"
        />
    );
};
