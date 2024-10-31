import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Country } from '../../apollo/countries';
import './CardItem.css';
import { Box } from '@mui/material';
import { CardItemHeader } from './CardItemHeader';
import { CardItemFooter } from './CardItemFooter';
interface CardItemProps {
    data: Country;
}

export const CardItem = ({ data }: CardItemProps) => {
    console.log(data);
    return (
        <Card
            sx={{
                width: 345,
                border: '2px solid',
                borderRadius: '20px',
                marginTop: '20px',
            }}
        >
            <CardContent sx={{ padding: '10px 14px' }}>
                <CardItemHeader data={data} />
                <CardItemFooter data={data} />
            </CardContent>
        </Card>
    );
};
