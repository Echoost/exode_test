import { Box, Typography } from '@mui/material';
import { Country } from 'apollo/countries';

interface CardItemHeaderProps {
    data: Country;
}

export const CardItemHeader = ({ data }: CardItemHeaderProps) => {
    return (
        <Box display="flex" justifyContent="space-between">
            <Box display="flex" gap={'10px'}>
                <Typography className="emoji" variant="h4" component="span">
                    {data.emoji}
                </Typography>
                <Box display={'flex'} flexDirection={'column'}>
                    <Typography gutterBottom variant="h5" fontSize={'20px'}>
                        {data.name}
                    </Typography>
                    <Typography fontSize={'15px'}>{data.capital}</Typography>
                </Box>
            </Box>
            <Typography textAlign={'right'}>{data.continent.name}</Typography>
        </Box>
    );
};
