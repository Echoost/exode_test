import { Box, Typography } from '@mui/material';
import { Country } from '../../apollo/countries';
interface CardItemFooterProps {
    data: Country;
}

export const CardItemFooter = ({ data }: CardItemFooterProps) => {
    console.log(data.languages.length);
    return (
        <Box display="flex" justifyContent="space-between" mt={2}>
            <Typography style={{ wordBreak: 'break-all' }} width={'80px'}>
                📞 {data.phone}
            </Typography>
            {data.currency && (
                <Typography style={{ wordBreak: 'break-all' }} width={'80px'}>
                    💱 {data.currency}
                </Typography>
            )}
            {data.languages.length && (
                <Typography fontSize={'15px'} width={'80px'}>
                    🗣{' '}
                    {data.languages.map((element, index) => (
                        <span key={element.native}>
                            {element.native}
                            {index < data.languages.length - 1 ? ', ' : ''}
                        </span>
                    ))}
                </Typography>
            )}
        </Box>
    );
};
