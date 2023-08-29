import { ThemeProvider } from "styled-components";

const theme = {
    colors:{
        backgroundOpacity: 'rgba(0, 0, 0, 0.8)',
        backgroundBanner:'rgba(0, 0, 0, 0.5)',
        backgroundDropdownMenu: 'rgba(0, 0, 0, 0.9',
        sapGreen: '#61781E',
        
        


    },
    fonts:{
        anchorsFont: `'Bayon', sans-serif`,
        nameFont: `'Allerta', sans-serif`

    },
    fontSizes:{
        anchorDesktop: '36px',
        anchorMobile: '34px',
        nameDesktop: '94px',
        nameMobile:'31px'
    },

    measures:{
            desktop:'1200px',
            tablet:'880px',
            mobile:'480px',
            mobileSmall:'320px'

    },
    transitions:{
        easy:' all 0.5s',
        easyInOut: ' 0,3s easy-in-out'
    }

};

const Theme = ({ children }) => (

    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme; 