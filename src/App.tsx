import { Box, Typography } from '@mui/material';
import { Input } from 'components/ui/Input';
import { CardList } from 'components/card-list/CardList';

function App() {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            mt={'15px'}
        >
            <Typography component={'h1'}>Countries</Typography>
            <Input />
            <CardList />
        </Box>
    );
}

export default App;
