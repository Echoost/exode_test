import { useQuery } from '@apollo/client';
import { CountriesData, Country, GET_COUNTRIES } from '../../apollo/countries';
import { CardItem } from '../card-item/CardItem';
import CircularProgress from '@mui/material/CircularProgress';
export const CardList = () => {
    const { data, loading, error } = useQuery<CountriesData>(GET_COUNTRIES);

    if (error) {
        return <p>Error</p>;
    }

    if (loading) return <CircularProgress sx={{ marginTop: '20px' }} />;

    if (!data?.countries.length) {
        return <p>Country is not found</p>;
    }

    return (
        <>
            {data?.countries.map((element: Country) => (
                <CardItem key={element.name} data={element}></CardItem>
            ))}
        </>
    );
};
