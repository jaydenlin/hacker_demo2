import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import s from './SignInForm.module.css';
import model from '../../model/input';
import Cookies from 'js-cookie';
import Router from 'next/router';
import FacebookIcon from '@material-ui/icons/Facebook';
import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();
const {API_ADDRESS} = publicRuntimeConfig;
import TEXT from '../../enum/text';
const useStyles = makeStyles((theme) => ({
    paper: {

    },
    avatar: {

    },
    form: {

    },
    submit: {

    },
}));
const onRememberMeClick = (event)=>{
    if (event.target.checked) {
        Cookies.set("rememberme", true);
    } else {
        Cookies.remove("rememberme");
    }
};
export default function SignInForm({onSubmit, errorMessage}) {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: model.initialValueOf(['username', 'password']),
        validationSchema: model.schemaOf(['username', 'password']),
        onSubmit: values => {
            if(onSubmit) {
                onSubmit(values);
            }
        },
    });
    const formikHelperText = (fieldName) => {
        return formik.touched[fieldName] && formik.errors[fieldName] ? formik.errors[fieldName] : null
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={`${classes.paper} ${s.paper}`}>
                <Avatar className={`${classes.avatar} ${s.avatar}`}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {TEXT.SIGN_IN}
                </Typography>
                {/*<div className={s.ssoForm}>*/}
                {/*    <Button*/}
                {/*        type="submit"*/}
                {/*        fullWidth*/}
                {/*        variant="contained"*/}
                {/*        color="primary"*/}
                {/*        className={s.fbSignUp}*/}
                {/*        onClick={()=>{*/}
                {/*            Router.push(`//${API_ADDRESS}/connect/facebook`);*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <span className={s.fbiIcon}><FacebookIcon/></span> {TEXT.SIGN_IN_WITH_FACEBOOK}*/}
                {/*    </Button>*/}
                {/*</div>*/}
                {/*<h3>{TEXT.SIGN_IN_WITH_USERNAME}</h3>*/}
                <form className={`${classes.form} ${s.form}`} noValidate onSubmit={formik.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label={TEXT.USER_NAME}
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        error={formikHelperText("username")}
                        helperText={formikHelperText("username")}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={TEXT.PASSWORD}
                        // type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={formikHelperText("password")}
                        helperText={formikHelperText("password")}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" onClick={onRememberMeClick}/>}
                        label={TEXT.REMEMBER_ME}
                    />
                    {errorMessage &&
                    <Alert variant="outlined" severity="error">
                        {errorMessage}
                    </Alert>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={`${classes.submit} ${s.submit}`}
                    >
                        {TEXT.SIGN_IN}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="/forgotpass" variant="body2">
                                {TEXT.FORGET_PASSWORD}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {TEXT.DONT_HAVE_ACCOUNT_SIGN_IN}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );
}