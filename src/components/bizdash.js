import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


class BizDash extends Component {

    render() {

        // SEND DOWN APPROPRIATE PROPS FOR RENDERING AND SET STATE WITH THEM

        // IF NO PROPS ARE SENT, RENDER CREATE BUSINESS FORM SEGMENTS
        // REUSE THESE FORM SEGMENTS FOR EDITING BUISINESS

        // MAKE FUNCTION(S) THAT CHECKS TO SEE IF THE CURRENT USER MATCHES THE BIZ USER
        // IF THEY DO, RENDER FORMS BENEATH EACH SEGMENT TO EDIT BIZ

        return (
            <div>
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <Typography color="textSecondary" variant="h7">
                        This is your biz dash. THIS COMPONENT WILL ALSO BE USED FOR OTHER BIZZYS.
                        MAKE AMBIGUOUS DEPENDENT ON IMPORTED BIZ DETAILS
                    </Typography>
                </Paper>
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <Typography color="textSecondary" variant="h7">
                        SEND DOWN APPROPRIATE PROPS FOR RENDERING AND SET STATE WITH THEM
                        <br /><br />
                        IF NO PROPS ARE SENT, RENDER CREATE BUSINESS FORM SEGMENTS<br />
                        REUSE THESE FORM SEGMENTS FOR EDITING BUISINESS<br /><br />

                        MAKE FUNCTION(S) THAT CHECKS TO SEE IF THE CURRENT USER MATCHES THE BIZ USER<br />
                        IF THEY DO, RENDER FORMS BENEATH EACH SEGMENT TO EDIT BIZ
                    </Typography>
                </Paper>
            </div>
        );
    }
}


export default BizDash;