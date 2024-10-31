import { useQuery } from '@apollo/client';
import { CountriesData, GET_COUNTRIES } from '../../apollo/countries';
import { CardItem } from '../card-item/CardItem';
export const CardList = () => {
    const { data, loading, error } = useQuery<CountriesData>(GET_COUNTRIES);
    console.log(data);
    if (loading) return <p>Loading...</p>;

    return (
        <>
            {data?.countries.map((element: any) => (
                <CardItem data={element}></CardItem>
            ))}
        </>
    );
};
