import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import s from './DataList.module.css';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PaymentIcon from '@material-ui/icons/Payment';
import Card from '@material-ui/core/Card';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function DataList() {
    const classes = useStyles();

    return (
        <div className={s.wrapper}>
        <Card>
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PaymentIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="綁定信用卡" secondary="8888-8888-xxxx-xxxx"/>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <MonetizationOnIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="儲值金額" secondary="200000" />
            </ListItem>
        </List>
        </Card>
        </div>
    );
}
