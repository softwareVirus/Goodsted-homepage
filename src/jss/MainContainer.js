import {createUseStyles} from 'react-jss'

const useStyle = createUseStyles({
    mainContainer: {
        maxWidth: '90em',
        width: '100%',
        paddingLeft: '11%',
        paddingRight: '11%',
        margin: '0 auto',
    },
    '@media (min-width: 1905px)' : {
        mainContainer: {    
            paddingLeft: '0px',
            paddingRight: '0px',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    },
    '@media (max-width: 1280px)': {
        mainContainer: {
            paddingLeft: '56px',
            paddingRight: '56px',
            maxWidth: 'none'
        }
    },
    '@media only screen and (max-width: 525px)': {
        mainContainer: {
            padding:'0 16px'
        }
    }
})

export { useStyle }