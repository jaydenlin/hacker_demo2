import React from 'react';
import s from './Footer.module.css';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import TEXT from '../../../enum/text'
class Footer extends React.Component {
    render(){
        return (
            <Box className={s.copyright}>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="/">
                        {TEXT.BRAND_NAME}
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Box>
        )
    }

}

export default Footer;