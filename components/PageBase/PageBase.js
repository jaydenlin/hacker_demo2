import React from 'react';
import s from './PageBase.module.css';
import Footer from './Footer';
import Head from 'next/head';
import getConfig from 'next/config';
import Toolbar from '@material-ui/core/Toolbar';
import MenuAppBar from "./MenuAppBar";
let thisRef;
class PageBase extends React.Component {
    static getInitialProps({query}) {
        return {query}
    }
    constructor(props) {
        super(props);
        this.state = {
            isLoginRequired: false
        };
    }
    componentDidMount(){
        thisRef = this;
    }
    render(){
        const {children, isLoading=false, isBar=true} = this.props;
        const {isLoginRequired} = this.state;
        return (
            <div>
                    <Head>

                        {process.env.NODE_ENV !== 'production' && (
                            <link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()} />
                        )}
                        {/* <script dangerouslySetInnerHTML={{
              __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`
            }}>
            </script>   */}
                    </Head>
                    {isBar && <MenuAppBar/>}
                    <Toolbar/>
                    {children}
                    <Footer/>
            </div>
        );
    }
}

export default PageBase;