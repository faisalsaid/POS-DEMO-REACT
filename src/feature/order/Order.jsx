import React from 'react';
import { Grid, Box, Typography, Stack, TextField, Table, Button, Divider } from '@mui/material';

const Order = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          sx={{
            height: '85vh',

            overflowY: 'scroll',
          }}
          xs={6}
        >
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam qui autem eum perspiciatis. Ad facere sequi quasi eaque animi sapiente expedita eligendi eius nobis
            temporibus ullam, nulla, quas reprehenderit quos esse amet dolores, laudantium incidunt officia necessitatibus corrupti? Nisi laboriosam enim ipsum recusandae non quae,
            ipsam alias doloribus repudiandae obcaecati dicta minus, voluptatum libero earum quos. Autem cupiditate impedit possimus repudiandae natus at quisquam explicabo,
            quaerat illo quam nisi minus illum ad reprehenderit quis vitae minima. Temporibus iusto maiores repellat vero, omnis odio itaque possimus debitis. Nostrum alias
            explicabo corporis impedit facere molestias a esse vel, voluptates, temporibus tenetur doloremque, accusamus expedita ducimus blanditiis distinctio tempore dolorem?
            Obcaecati sint a quasi corrupti ipsum eligendi. Voluptatibus nostrum doloremque, maxime facilis maiores ea dolorum amet atque ab, sapiente minus quidem totam assumenda
            adipisci! Eaque totam perferendis provident inventore voluptate similique iure necessitatibus iste nostrum dolor eius facere, eveniet iusto nihil quibusdam obcaecati in
            sapiente perspiciatis consectetur laborum hic officia aperiam! Eos animi illo exercitationem obcaecati doloremque quia itaque corporis eius molestiae, reiciendis omnis
            fuga commodi ut cupiditate nostrum error culpa! Dolores porro quis, consectetur numquam aliquam distinctio possimus laboriosam? Hic in accusantium corrupti, nihil
            laudantium possimus consequatur quia iure ipsum doloribus nisi harum necessitatibus alias repudiandae fuga ipsa sunt eius rem facere ullam minima. Reprehenderit odio
            ratione delectus hic veniam atque ab iure corporis sint aut animi dignissimos quo ex velit quis perferendis porro ipsum maiores, molestiae id sequi. Sed delectus nobis
            non doloremque quos veritatis hic? Rerum, aspernatur fuga fugit quasi non quisquam nostrum voluptates similique debitis, ullam nulla atque ducimus nihil doloribus eaque
            molestias praesentium tenetur a, delectus illum. Adipisci dolor quibusdam necessitatibus, velit sequi expedita amet placeat vel beatae porro non nostrum architecto!
            Saepe veritatis dicta a modi animi tempora consectetur sit ipsum distinctio quasi, eaque, quibusdam dignissimos laudantium deleniti cupiditate. Eum a, illum voluptates
            recusandae expedita doloremque perspiciatis sequi ratione, consequuntur maiores possimus aut quas temporibus quisquam fugit delectus. Itaque, enim nesciunt
            necessitatibus est adipisci voluptas repudiandae, praesentium animi, at magnam veritatis facilis. Vel eaque accusantium sit odit sed. Dolorum ipsa, error ullam
            explicabo cupiditate doloremque deserunt modi corporis quod totam omnis expedita animi laborum commodi. Sed, voluptas ducimus! Laborum quas enim dolorum qui debitis
            atque delectus sed magni maxime, incidunt, beatae tempore porro animi eius sint nemo eaque ipsum! Est quas eveniet, harum dolor quaerat, consequuntur laborum sint
            provident sunt omnis quis fugiat delectus eos totam perspiciatis.
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            height: '85vh',
            overflowY: 'scroll',
          }}
          xs={6}
        >
          <Box
            sx={{
              padding: '.5rem',
              backgroundColor: 'secondary.dark',
            }}
          >
            <Typography color={'white'} variant="body" component={'div'}>
              Order List
            </Typography>
          </Box>
          <Stack
            sx={{
              padding: '.8rem',
            }}
            spacing={1}
          >
            <TextField size="small" label="Order Ref" name="order-ref" id="order-ref" type={'text'} defaultValue={'2345-XDR-1208'} disabled />
            <TextField color="secondary" size="small" label="Customer" name="customer" id="customer" type={'text'} />
            <Box
              sx={{
                width: '100%',
                backgroundColor: 'whitesmoke',
                minHeight: '100px',
                height: '330px',
                padding: '.8rem',
                overflowY: 'scroll',
              }}
            >
              list
            </Box>
            <Divider />
            <Stack direction={'row'} justifyContent="space-between">
              <Typography variant="h6" component={'div'}>
                Total Amount :
              </Typography>
              <Typography variant="h4" component={'div'}>
                Rp. 500.000,-
              </Typography>
            </Stack>
            <Divider />
            <Stack direction={'row'} justifyContent="space-between" spacing={1}>
              <Typography variant="caption">* Final Price Includes Tax</Typography>
              <Button color="secondary" variant="contained" size="large">
                PROCESS
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Order;
