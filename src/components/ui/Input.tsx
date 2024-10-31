import { useApolloClient, useQuery } from '@apollo/client';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { GET_COUNTRIES, SEARCH_COUNTRIES } from '../../apollo/countries';

export const Input = () => {
    const [value, setValue] = useState('');
    const client = useApolloClient();

    const { data } = useQuery(SEARCH_COUNTRIES, {
        variables: { countryCode: value },
        skip: !value,
    });
    const { refetch } = useQuery(GET_COUNTRIES);

    useEffect(() => {
        if (!value) {
            refetch();
        }

        if (data) {
            client.writeQuery({
                query: GET_COUNTRIES,
                data: {
                    countries: data.countries,
                },
            });
        }
    }, [data, value, client]);

    const handleSetValue = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setValue(event.target.value.toUpperCase());
    };

    return (
        <TextField
            onChange={handleSetValue}
            value={value}
            label={'Search by country code'}
            id="outlined-multiline-flexible"
            variant="filled"
            multiline
            size="small"
        />
    );
};
