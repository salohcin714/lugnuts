import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import fb from '../assets/images/Facebook.svg';
import ig from '../assets/images/Instagram.svg';
import tw from '../assets/images/Twitter.svg';
import Box from '@material-ui/core/Box';
import React from 'react';
import {Card} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default function Footer() {
  return (
      <Box mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card style={{height: '100%'}}>
              <CardHeader
                  title={'Quick Links'}/>
              <br/>
              <CardActions>

                <Button variant={'text'} size={'large'}>Search</Button>
                <Button variant={'text'} size={'large'}>Contact Us</Button>
                <Button variant={'text'} size={'large'}>Refund Policy</Button>

              </CardActions>
            </Card>

          </Grid>

          <Grid item xs={12} sm={6}>
            <Card style={{height: '100%'}}>
              <CardHeader
                  title={'Join the mailing list'}/>
              <CardContent>

                <TextField variant={'outlined'} label={'Email Address'}
                           style={{flexGrow: 1}}/>
                <Button variant={'contained'} color={'primary'}
                        size={'large'}>Subscribe</Button>

              </CardContent>
            </Card>

          </Grid>
        </Grid>

        <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption" gutterBottom>
              All Major Credit Cards Accepted
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} style={{textAlign: 'right'}}>
            <img src={fb} height={24} width={32}/>
            <img src={ig} height={24}/>
            <img src={tw} height={24}/>
          </Grid>
        </Grid>
      </Box>
  );
}