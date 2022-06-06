import React, {Fragment,useState,useEffect} from "react";
import { Grid, Link, Typography } from "@mui/material"; 
import { useStyle } from "../../jss/MainContainer";
import { Box } from "@mui/system";
import { createUseStyles } from "react-jss";

const useStyle2 = createUseStyles({
    jss48:{
        maxWidth:'496px !important'
    },
    '@media (min-width: 600px) and (max-width: 959.95px)': {
        jss48: {
            maxWidth:'100% !important',
            marginBottom:'32px'
        }
    }
})


export default function MainSixth() {
    const classes = useStyle()
    const [widthInfo, setWidthInfo] = useState([window.innerWidth,window.innerWidth < 600 ? true : false])

    function handleResize() {
        setWidthInfo([window.innerWidth,window.innerWidth < 600 ? true : false])
        console.log(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return _ => window.addEventListener('resize', handleResize)
    },[])
    return(
        <Grid container={true} sx={{padding:'80px 0',justifyContent:'center',backgroundColor:'#1b2c2e',width:'100%'}}>
            <Grid container={true} className={classes.mainContainer}>
                <Grid container={true} spacing={2} 
                 sx={{
                     marginTop:'-16px',
                     width: 'calc(100% + 16px)',
                     marginLeft:'-16px',
                     alignItems:'center',
                     justifyContent:'center',
                     lineHeight:'1.71'
                 }}>
                    {!widthInfo[1] ? <Fragment><Card /><Text /></Fragment> : <Fragment><Text /><Card /></Fragment>}
                </Grid>
            </Grid>
        </Grid>
    );
}




const Text = () => {
    return(
        <Grid item xs={12} md={5} sx={{paddingLeft:'16px',paddingTop:'16px',marginBottom:'32px','@media (min-width: 600px)':{marginBottom:'0'},maxWidth:'100%'}}>
            <Grid container={true}>
                <Typography variant='h2' sx={{color:'#fff',fontSize:'2.8125em',width:'100%',fontWeight:'600',letterSpacing:'-0.8px',lineHeight:'1.3','@media (min-width: 0)':{textAlign:'center'},'@media (max-width: 959.95px)':{fontSize:'45px'},'@media (min-width: 1905px)':{fontSize:'60px'},'@media (min-width: 600px)':{textAlign:'left'},'@media (max-width: 599.95px)':{fontSize:'24px'}}}>
                    Fit to your needs
                </Typography>
            </Grid>
            <Grid container={true} style={{marginTop:'26px'}}>
                <Typography variant="body1" sx={{fontSize:'20px',color:'#fff',lineHeight:'1.71','@media (min-width: 0)':{textAlign:'center'},'@media (min-width: 600px)':{textAlign:'left'},'@media (max-width: 599.95px)':{fontSize:'16px',textAlign:'center'}}}>
                    Choose the plan that's right for you - whether you're just starting out on your impact journey, or are ready to scale and champion change more widely in your community.
                </Typography>
            </Grid>
        </Grid>
    )
}

const Card = () => {
    const classes2 = useStyle2()
    return(
        <Grid item xs={true} 
            className={classes2.jss48}
            sx={{
             paddingLeft: '16px',
             paddingTop: '16px',
             '@media (min-width: 0)': {
                 marginRight:'0'
             },
             '@media (min-width: 960px)': {
                 marginRight:'24px'
             },'@media (min-width: 1281px)': {
                 marginRight:'48px'
             },
             justifyContent:'center',
             '@media (min-width: 600px) and (max-width: 959.95px)':{
                 maxWidth:'100%',
                 marginBottom:'32px'
             }}}>
            <Grid container={true} spacing={3}
                sx={{
                        marginTop:'-24px',
                        width: 'calc(100% + 24px)',
                        marginLeft:'-24px',
                        justifyContent:'center',                    
                    }}
            >
                <Grid item xs={8} sm={6} md={6} lg={6} sx={{flexDirection:'row'}}> 
                    <Link href='/' sx={{textDecoration:'none',color:'inherit'}}>
                        <Grid direction='column' container={true} sx={{height:'100%',padding:'32px 20px 32px 24px',background:'#fff',boxShadow:'0 4px 4px 0 #000040',minHeight:'280px',borderRadius:'8px',flexDirection:'column'}}>
                            <Grid item sx={{maxWidth:'none'}}>
                                <Box 
                                 component='img'
                                 src='./image(14).png'
                                 sx={{width:'64px'}}
                                />
                            </Grid>
                            <Grid item sx={{marginTop:'24px',maxWidth:'none'}}>
                                <Typography variant='h1' sx={{fontSize:'24px',color:'inherit',fontWeight:'600',lineHeight:'1.3'}}>
                                    Impact Challenge
                                </Typography>
                            </Grid>
                            <Grid item sx={{marginTop:'16px',maxWidth:'none'}}>
                                <Typography variant='body2' sx={{fontSize:'14px',fontWeight:'400',lineHeight:'2'}}>
                                    Join inspiring & impactful team building activities your people will love.   
                                </Typography>
                            </Grid>
                        </Grid>
                    </Link>
                </Grid>
                <Grid item xs={8} sm={6} md={6} lg={6} sx={{flexDirection:'row'}}> 
                    <Link href='/' sx={{textDecoration:'none',color:'inherit'}}>
                        <Grid direction='column' container={true} sx={{height:'100%',padding:'32px 20px 32px 24px',background:'#fff',boxShadow:'0 4px 4px 0 #000040',minHeight:'280px',borderRadius:'8px',flexDirection:'column'}}>
                            <Grid item sx={{maxWidth:'none'}}>
                                <Box 
                                 component='img'
                                 src='./image(15).png'
                                 sx={{width:'64px'}}
                                />
                            </Grid>
                            <Grid item sx={{marginTop:'24px',maxWidth:'none'}}>
                                <Typography variant='h1' sx={{fontSize:'24px',color:'inherit',fontWeight:'600',lineHeight:'1.43'}}>
                                    Employee Purpose
                                </Typography>
                            </Grid>
                            <Grid item sx={{marginTop:'16px',maxWidth:'none'}}>
                                <Typography variant='body2' sx={{fontSize:'14px',fontWeight:'400',lineHeight:'1.71'}}>
                                    Scale your social impact, with engagement & impact reports at your fingertips.    
                                </Typography>
                            </Grid>
                        </Grid>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}