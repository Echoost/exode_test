import { gql } from '@apollo/client';

interface Language {
    name: string;
    native: string;
    rtl: boolean;
}

interface Continent {
    name: string;
}

interface State {
    name: string;
}

export interface Country {
    code: string;
    name: string;
    native: string;
    phone: string;
    capital: string;
    currency: string;
    languages: Language[];
    continent: Continent;
    emoji: string;
    states: State[];
}

export interface CountriesData {
    countries: Country[];
}

export const GET_COUNTRIES = gql`
    query {
        countries {
            code
            name
            native
            phone
            capital
            currency
            languages {
                name
                native
                rtl
            }
            continent {
                name
            }
            emoji
            states {
                name
            }
        }
    }
`;
