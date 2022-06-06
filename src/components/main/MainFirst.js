import React,{useState,useEffect} from "react";
import { Grid, Typography, Button } from "@mui/material";
import { useStyle } from "../../jss/MainContainer";
import {createUseStyles} from 'react-jss'
import DiscoverIcon from '../Discover'
import ArrowIcon from '../Arrow'
import ReportIcon from '../Report'
import HandShakeIcon from "../HandShake";
import { Box } from '@mui/system';
const useStyle2 = createUseStyles({
    jss38: {
        '@media (min-width: 1281px)': {
            paddingRight: '36px'
        },
        zIndex: '1'
    },
    jss39: {
        color: '#1C2C2E',
        width: '100%',
        border: '1px solid #DAE1DD',
        padding: '16px 24px',
        fontSize: '16px',
        background: '#fff',
        marginTop: '16px',
        fontWeight: '500',
        borderRadius: '8px',
        letterSpacing: '-0.66px',
        justifyContent: 'flex-start',
        lineHeight: '24px',
        minHeight: '40px',
    }
})



const MainFirst = () => {
    const classes = useStyle()
    const classes2 = useStyle2()
    const [widthInfo, setWidthInfo] = useState([window.innerWidth,window.innerWidth < 960 ? true : false])

  function handleResize() {
    setWidthInfo([window.innerWidth,window.innerWidth < 960 ? true : false])
    console.log(window.innerWidth)
  }
  useEffect(() => {
      
      window.addEventListener('resize', handleResize)

      return _ => window.addEventListener('resize', handleResize)
  },[])
    return(
        <Grid container={true}>
            <Grid container={true} sx={{justifyContent:'center','@media (max-width: 959.95px)':{paddingBottom:'48px'}}} style={{backgroundColor:'#fff',backgroundPosition:'center center',backgroundRepeat:'no-repeat',backgroundSize:'cover',paddingBottom:'50px',position:'relative'}}>
                <Grid container={true} className={classes.mainContainer} sx={{flexDirection:'row',paddingTop:'32px',webkitBoxPack: 'justify',justifyContent: 'space-between'}}>
                    <Grid item container={true} md={6} lg={5} sx={{alignContent:'center','@media (min-width: 960px)':{flexBasis: '41.66667%',webkitBoxFlex: '0',webkitFlexGrow: '0',msFlexPositive: '0',flexGrow: '0',maxWidth:'41.66667%'}}} className={classes2.jss38}>
                        <Typography variant='h1' sx={{fontSize:'3.125em','@media (min-width: 1905px)': {fontSize:'62px'},fontWeight:'600',lineHeight: '1.3','@media (max-width: 599.95px)':{fontSize:'35px'}}}>
                            Take action for
                            <br/>
                            social progress
                        </Typography>
                        <Grid container={true} sx={{marginTop:'16px'}}>
                            <Grid item xs={12} sx={{'@media (min-width: 960px)':{webkitFlexBasis: '100%',msFlexPreferredSize: '100%',flexBasis: '100%',webkitBoxFlex: '0',webkitFlexGrow: '0',msFlexPositive: '0',flexGrow: '0',maxWidth: '100%'}}}>
                                <Button className='main-first' component='a' variant='contained' color='primary' sx={{boxShadow:'none',textTransform: 'initial',color: '#1C2C2E',width: '100%',border: '1px solid #DAE1DD',padding: '16px 24px',fontSize: '16px',background: '#fff',marginTop: '16px',fontWeight: '500',borderRadius: '8px',letterSpacing: '-0.66px',justifyContent: 'flex-start',lineHeight: '24px',minHeight: '40px','@media (max-width: 599.95px)':{fontSize:'14px'}}}>
                                    <DiscoverIcon />Discover opportunities to take action<ArrowIcon/>
                                </Button>
                                <Button className='main-first' component='a' variant='contained' color='primary' sx={{boxShadow:'none',textTransform: 'initial',color: '#1C2C2E',width: '100%',border: '1px solid #DAE1DD',padding: '16px 24px',fontSize: '16px',background: '#fff',marginTop: '16px',fontWeight: '500',borderRadius: '8px',letterSpacing: '-0.66px',justifyContent: 'flex-start',lineHeight: '24px',minHeight: '40px','@media (max-width: 599.95px)':{fontSize:'14px'}}}>
                                    <ReportIcon />Register your nonprofit or startup<ArrowIcon/>
                                </Button>
                                <Button className='main-first' component='a' variant='contained' color='primary' sx={{boxShadow:'none',textTransform: 'initial',color: '#1C2C2E',width: '100%',border: '1px solid #DAE1DD',padding: '16px 24px',fontSize: '16px',background: '#fff',marginTop: '16px',fontWeight: '500',borderRadius: '8px',letterSpacing: '-0.66px',justifyContent: 'flex-start',lineHeight: '24px',minHeight: '40px','@media (max-width: 599.95px)':{fontSize:'14px'}}}>
                                    <HandShakeIcon />Engage your colleagues<ArrowIcon/>
                                </Button>
                            </Grid>
                        </Grid>
                        {widthInfo[0] < 600 &&
                    <Grid container={true} sx={{marginTop:'16px',width:'100%',justifyContent:'center'}}>
                    <Box
                     component='img'
                     src='https://res.cloudinary.com/goodsted/image/upload/v1646895303/Assets/around-the-world.svg'
                     sx={{width:'100%',maxWidth:'400px'}}
                    />
                </Grid>
                    }
                    </Grid>
                    {!widthInfo[1] &&
                    <Grid container={true} item xs={true} md={5} lg={7} sx={{marginTop:'-28px',marginRight:'-28px',width:'100%',maxWidth:'590px !important','@media (min-width: 960px) and (max-width: 1280.95px)':{width:'70%'},'@media(min-width: 600px)':{flexBasis:0},'@media(min-width: 960px)':{flexBasis:'41.666667%'},'@media (min-width: 1281px)':{flexBasis:'58.33333%'}}}>
                    <Box
                     component='img'
                     src='https://res.cloudinary.com/goodsted/image/upload/v1646895303/Assets/around-the-world.svg'
                     sx={{width:'100%'}}
                    />
                </Grid>
                    }
                </Grid>
                
            </Grid>
        </Grid>
    );
}

export default MainFirst;