import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import currencyFormatter from 'currency-formatter';

const DashboardCard = (props) => {
  const { data } = props;
  return (
    <Stack
      sx={{ padding: '1rem', minWidth: '300px', backgroundImage: data.background ? data.background : 'whitesmoke', borderRadius: '4px', boxShadow: '1px 3px 3px rgba(0,0,0,0.1)' }}
    >
      <Grid container spacing={2} sx={{ marginBottom: '1rem' }}>
        <Grid item xs={8}>
          <Stack>
            <Typography color={'white'} variant="overline" component={'h6'}>
              {data.title}
            </Typography>
            <Typography color={'white'} variant="h5" component={'p'}>
              {data.value.isCurency ? currencyFormatter.format(data.value.value, { code: 'IDR' }) : data.value.value}
            </Typography>
          </Stack>
        </Grid>
        <Grid color={'white'} item xs={4}>
          {data.icon}
        </Grid>
      </Grid>
      <Typography color={'white'} variant="caption">
        {data.description}
      </Typography>
    </Stack>
  );
};

export default DashboardCard;
