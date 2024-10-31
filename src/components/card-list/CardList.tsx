import { useQuery } from '@apollo/client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CountriesData, Country, GET_COUNTRIES } from '../../apollo/countries';
import { CardItem } from '../card-item/CardItem';
import CircularProgress from '@mui/material/CircularProgress';

export const CardList = () => {
    const { data, loading, error } = useQuery<CountriesData>(GET_COUNTRIES);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (cardRefs.current) {
            cardRefs.current.forEach((card, index) => {
                if (card) {
                    gsap.from(card, {
                        opacity: 0,
                        y: 20,
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: 'power2.out',
                    });
                }
            });
        }
    }, [data]); 

    if (error) {
        return <p>Error</p>;
    }

    if (loading) return <CircularProgress sx={{ marginTop: '20px' }} />;

    if (!data?.countries.length) {
        return <p>Country is not found</p>;
    }

    return (
        <>
            {data?.countries.map((element: Country, index: number) => (
                <div
                    key={element.name}
                    ref={el => (cardRefs.current[index] = el)} // Сохранение ссылки на элемент
                >
                    <CardItem data={element} />
                </div>
            ))}
        </>
    );
};
