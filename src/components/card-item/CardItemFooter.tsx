import { Box, Typography } from '@mui/material';
import { Country } from '../../apollo/countries';
interface CardItemFooterProps {
    data: Country;
}

export const CardItemFooter = ({ data }: CardItemFooterProps) => {
    return (
        <Box display="flex" justifyContent="space-between" mt={2}>
            <Typography>📞 {data.phone}</Typography>
            <Typography>💱 {data.currency}</Typography>
            <Box>
                <Typography fontSize={'15px'}>
                    🗣{' '}
                    {data.languages.map((element, index) => (
                        <span key={index}>
                            {element.native}
                            {index < data.languages.length - 1 ? ', ' : ''}
                        </span>
                    ))}
                </Typography>
            </Box>
        </Box>
    );
};
