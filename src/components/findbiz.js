import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
// import { getBizzys } from '../state/actions/actions'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { BizCard } from './messagecard'

class FindBiz extends Component {

    //CHANGE BIZ GRID TO 5 WIDTH...SOMEHOW...RIGHT NOW ITS AT 3

    // generateBizCards = () => {
    //     if (this.props.bizzys) {
    //         return this.props.bizzys.map((biz) => (
    //             <Grid item xs={12} sm={6} lg={4} xl={3}>
    //                 <BizCard {/* whatever props will be needed */} />
    //             </Grid>
    //         ))
    //     }
    // }

    render() {
        return (
            <Paper style={{ padding: 40, margin: 30 }} align="center">
                <Typography color="textSecondary" variant="h6">
                    Find an Itty Biz near you!
                                </Typography>
                <Grid container spacing={24} style={{ padding: 24 }}>
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Card style={{ padding: 15, margin: 30, maxWidth: 500, maxHeight: 400 }} align="center">
                            RENDER ITTY BIZ CARDS
                            -PICTURE
                            -SERVICE TYPE
                            -DESCRIPTION
                            -RATE
                            CLICK TO VIEW THEIR ITTY BIZ PAGE
                        </Card>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default FindBiz;