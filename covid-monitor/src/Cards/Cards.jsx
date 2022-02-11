import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({lnewcases, ltotcases, ltotdeaths, ltotrecov,uptime}) => {
 if(!lnewcases){
   return 'Loading...';
 }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={ cx(styles.card, styles.infected) }>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Local New Cases</Typography>
            <Typography variant="h5" >
              <CountUp
              start = {0}
              end ={lnewcases}
              duration={2.5}
              separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(uptime).toDateString()}</Typography>
            <Typography variant="body2">Number of active cases of COVID-19</Typography>

          </CardContent>

        </Grid>


   
      </Grid>

    </div>);
}

export default Cards;
