import { Divider, Grid, Link, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useStyle } from "../jss/MainContainer";
import { Box } from "@mui/system";
import Facebook from '../logo/Facebook'
import Twitter from '../logo/Twitter'
import Instagram from "../logo/Instagram";
import Youtube from "../logo/Youtube";
import Linkedin from "../logo/Linkedin";

export default function Footer() {
    const classes = useStyle()
    
    return(
        <Grid sx={{backgroundColor:'#fff',position:'relative',width:'100%'}}>
            <Grid container={true} sx={{justifyContent:'center'}}>
                <Grid container={true} className={classes.mainContainer}>
                    <Grid item xs={12} sx={{marginBottom:'60px'}}>
                        <Divider />
                    </Grid>
                    <Grid container={true} item>
                        {infos.map(item => {
                            return(
                                <Grid item xs={12} sm={6} md={3} sx={{marginBottom:'30px'}}>
                                    {
                                        item.map(x => {
                                            return(
                                                <Options x={x} />
                                            )
                                        })
                                    }
                                </Grid>
                            )
                        })}
                            <Grid item xs={6} md={3} sx={{marginBottom:'30px'}}>
                                <Typography variant="subtitle1" sx={{fontWeight:'600',marginBottom:'13px',lineHeight:'1.3'}}>
                                    Goodsted Community
                                </Typography>
                                <Typography variant="body1" sx={{lineHeight:'1.44',marginBottom:'9px'}}>
                                    Impact Brixton, 17a Electric Ln,
                                    <br />
                                    Brixton, London, SW9 8LA 
                                </Typography>
                                <Grid container={true} sx={{alignItems:'center'}}>
                                    {
                                        links.map(item => {
                                            return(
                                                <Link href={item[1]} target='_blank' sx={{marginRight:'16px'}}>
                                                    {item[0]}
                                                </Link>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid container={true} sx={{alignItems:'center',marginTop:'40px',justifyContent:'center'}}>
                        <Box 
                            component='img'
                            src='./images/image(17).png'
                            width='148px'
                            height='110px'
                        />
                        <Box 
                            component='img'
                            src='./images/image(18).png'
                            width='68px'
                            height='64px'
                        />
                        <Box 
                            component='img'
                            src='./images/image(19).png'
                            width='200px'
                            height='101px'
                        />
                    </Grid>
                    <Grid container={true} sx={{alignItems:'center',justifyContent:'center',marginBottom:'56px',marginTop:'24px'}}>
                        <Grid item>
                            <Grid container={true} sx={{'@media (max-width: 599.95px)':{alignItems:'end',marginBottom:'38px'}}}>
                                <Grid item xs={true}>
                                    <Typography variant='body1'>
                                        © Copyright Goodsted, 2022. All Rights Reserved.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


const infos = [
    ['Goodsted','About','Team & Advisors','Blog','Careers'],
    ['Solutions','Impact Challenge','Employee Purpose','Nonprofits & Startups'],
    ['Support','Help Center','Terms of Use','Privacy Policy','Contact Us','Security']
]



const Options = ({x}) => {
    return(
        <Fragment>
            {
                x === 'Goodsted' || x === 'Solutions' || x === 'Support'
                ?
                <Typography variant="subtitle1" sx={{fontWeight:'600',marginBottom:'13px',fontSize:'16px',lineHeight:'1.3'}}>
                    {x}
                </Typography>
                :
                <Link href='/' sx={{textDecoration:'none',color:'inherit'}}>
                    <Typography variant="body1" sx={{marginBottom:'9px',lineHeight:'1.71'}}>
                        {x}
                    </Typography>
                </Link>
            }
        </Fragment>
    )
}

const links =[
    [<Facebook />,'https://www.facebook.com/goodsted/'],
    [<Twitter />,'https://www.twitter.com/goodsted'],
    [<Instagram />,'https://www.instgram.com.goodsteduk'],
    [<Youtube />,'https://www.youtube.com/channel/UCCdmEUtJ9z021bOj7QsJoKg'],
    [<Linkedin />,'https://www.linkedin.com/company/goodsted/?originalSubdomain=tr']
]