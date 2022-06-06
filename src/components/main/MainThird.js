import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useStyle } from "../../jss/MainContainer";
import { Typography } from "@mui/material";

export default function MainThird() {
    const classes = useStyle()
    const string = "Get inspired & share skills"
    return (
        <Grid container={true} sx={{paddingTop:'80px',paddingBottom:'80px',justifyContent:'center',backgroundColor:'#FFF6F2','@media only screen and (max-width: 525px)':{paddingBottom:'56px',paddingTop:'56px'}}}>
            <Grid container={true} className={classes.mainContainer} sx={{'@media only screen and (max-width: 525px)':{padding:'0 16px',maxWidth:'none'}}}>
                <Grid container={true} spacing={7} sx={{marginTop:'-56px',width:'(100%+56)',marginLeft:'-56px',justifyContent:'space-between','@media (max-width: 599.95px)':{margin:'0 auto',maxWidth:'335px'}}}>
                    <Grid item xs={12} md={4} sx={{paddingLeft:'56px',paddingTop:'56px','@media (min-width: 0px)':{marginBottom:'56px'},'@media (max-width: 960px)':{flexBasis: '100%',maxWidth:'100%'},'@media (min-width: 600px)':{width:'100%'},'@media (max-width: 599.95px)':{padding:'0 0 !important',justifyContent:'center'},'@media (min-width: 960.01px)':{marginBottom:'0',maxWidth:'33.33%'}}}>
                        <Grid container={true} sx={{minHeight:'44px','@media(max-width: 599.95px)':{justifyContent:'center'}}}>
                            <Box 
                             component='img'
                             src='./hand.png'
                             style={{width:'44px'}} 
                            />
                        </Grid>
                        <Grid container={true} sx={{marginTop:'32px','@media(max-width: 599.95px)':{justifyContent:'center'}}}>
                            <Typography variant='h5' sx={{fontSize:'24px',fontWeight:'600'}}>
                                {string}
                            </Typography>
                        </Grid>
                        <Grid container sx={{marginTop:'8px'}}>
                            <Typography variant='body1' sx={{color:'#696871',lineHeight:'1.7','@media(max-width: 599.95px)':{textAlign:'center'}}}>
                                See all the great actions being taken in the community, and browse unique opportunities fit to your skills & interests. 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{paddingLeft:'56px',paddingTop:'56px','@media (min-width: 0px)':{marginBottom:'56px'},'@media (max-width: 599.95px)':{padding:'0 0 !important',justifyContent:'center'},'@media (max-width: 960px)':{flexBasis: '100%',maxWidth:'100%'},'@media (min-width: 600px)':{width:'100%'},'@media (min-width: 960px)':{marginBottom:'0'}}}>
                        <Grid container={true} sx={{minHeight:'44px','@media(max-width: 599.95px)':{justifyContent:'center'}}}>
                            <Box 
                             component='img'
                             src='./infinity.png'
                             style={{width:'44px'}}
                            />
                        </Grid>
                        <Grid container={true} sx={{marginTop:'32px','@media(max-width: 599.95px)':{justifyContent:'center'}}}>
                            <Typography variant='h5' sx={{fontSize:'24px',fontWeight:'600'}}>
                                Establish partnerships
                            </Typography>
                        </Grid>
                        <Grid container sx={{marginTop:'8px'}}>
                            <Typography variant='body1' sx={{color:'#696871',lineHeight:'1.7','@media(max-width: 599.95px)':{textAlign:'center'}}}>
                                Meet individuals & organisations passionate about similar causes, and connect with new long-term partners.  
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{paddingLeft:'56px',paddingTop:'56px','@media (min-width: 0px)':{marginBottom:'56px'},'@media (max-width: 599.95px)':{padding:'0 0 !important',justifyContent:'center'},'@media (max-width: 960px)':{flexBasis: '100%',maxWidth:'100%'},'@media (min-width: 600px)':{width:'100%'},'@media (min-width: 960px)':{marginBottom:'0'}}}>
                        <Grid container={true} sx={{minHeight:'44px','@media(max-width: 599.95px)':{justifyContent:'center'}}}>
                            <Box 
                             component='img'
                             src='./statistic.png'
                             style={{width:'44px'}}
                            />
                        </Grid>
                        <Grid container={true} sx={{marginTop:'32px','@media(max-width: 599.95px)':{justifyContent:'center'}}}>
                            <Typography variant='h5' sx={{fontSize:'24px',fontWeight:'600'}}>
                                Grow your impact
                            </Typography>
                        </Grid>
                        <Grid container sx={{marginTop:'8px'}}>
                            <Typography variant='body1' sx={{color:'#696871',lineHeight:'1.7','@media(max-width: 599.95px)':{textAlign:'center'}}}>
                                Scale impactful initiatives in the community and deliver on social value commitments through collaboration.  
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}