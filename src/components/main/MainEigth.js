import { Avatar, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyle } from "../../jss/MainContainer";
import Check from "../../logo/Check";

export default function MainEight() {
    const classes = useStyle()
    return(
        <Grid container={true} sx={{justifyContent:'center',margin:0,overflow:'hidden',position:'relative',marginTop:'-1px',paddingTop:'36px',marginBottom:'-1px',paddingBottom:'36px',background:'linear-gradient(180deg, rgba(254,246,243,1) 57%,rgba(27,45,46,1) 43%)','@media (max-width:599.95px)':{paddingBottom:'16px',paddingTop:'0'},width:'100%'}}>
            <Grid container={true} spacing={2}
                sx={{
                    justifyContent:'center'
                }}
            >
                <Grid className={classes.mainContainer} container={true} spacing={4} 
                    sx={{
                        margin:'0',
                        width:'100%',
                        justifyContent:'center'
                    }}
                >
                    {infos.map(item => {
                        return(
                            <Grid item sm={6} md={4} lg={4} sx={{paddingLeft:'32px',paddingTop:'32px',borderRadius:'12px'}}>
                                <Link href='/' sx={{textDecoration:'none',color:'inherit'}}>
                                    <Grid container={true} direction='column' 
                                        sx={{
                                            background:'#FFFFFF',
                                            boxShadow:'0px 10px 35px rgba(0 0 0 / 3%)',
                                            borderRadius:'12px',
                                            marginBottom:'32px'
                                        }}
                                    >
                                        <Grid item lg={12} sx={{maxWidth:'none'}}>
                                            <Box 
                                                component='img'
                                                src={item[0]}
                                                sx={{width:'100%',objectFit:'cover',borderRadius:'12px 12px 0 0',aspectRatio:'auto 350 / 250',height:'250px'}}
                                            />
                                        </Grid>
                                        <Grid container={true} sx={{flex:'auto',flexDirection:'column','@media (min-width: 0)':{padding:'16px'},'@media (min-width:960px)':{padding:'24px'}}}>
                                            <Typography variant='h5' sx={{fontWeight:'600',WebkitBoxOrient:'vertical',WebkitLineClamp:'2',display:'-webkit-box',overflow:'hidden',textOverflow:'ellipsis',color:'#183B56',fontSize:'20px',textAlign:'initial',lineHeight:'36px'}}>
                                                {item[1]}
                                            </Typography>
                                            <Typography variant="body1" sx={{marginBottom:'auto',color:'#183B56',fontSize:'18px',lineHeight:'32px'}}></Typography>
                                            <Grid container={true} sx={{marginTop:'50px'}}>
                                                <Grid item xs={true} sx={{display:'flex'}}>
                                                    <Avatar src={item[2]} sx={{marginRight:'8px'}} />
                                                    <Grid item xs={true} sx={{display:'flex',flexDirection:'column'}}>
                                                        <Typography variant='subtitle1' sx={{lineHeight:'1.71',fontSize:'16px',fontWeight:'600',textAlign:'start',marginBottom:'8px'}}>
                                                            {item[3]}
                                                        </Typography>
                                                        <Grid item xs={12} sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                                            <Grid sx={{display:'flex',alignItems:'center'}}>
                                                                <Check />
                                                                <Typography variant="caption" sx={{fontStyle:'italic',fontSize:'13px'}}>
                                                                    Verified writer
                                                                </Typography>
                                                            </Grid>
                                                            <Typography variant="subtitle1" sx={{fontWeight:'600',fontSize:'16px',lineHeight:'1.3'}}>
                                                                {item[4]}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}

const infos = [
    ['./images/image0.png','How to Make an Impact and Feel Great about it - Finding your Actigai','./images/person0.png','Nicky Dunlop','27 May'],
    ['./images/wfzpnlryfnjttjwd9olk.jpg','How the Aster Foundation scaled their impact programme using Goodsted','./images/person1.jpg','Selin Yigitbasi-Ducker','9 May'],
    ['./images/lhg69iv9knry2jy1cryu.jpg','Time to spruce up your profile 😍','./images/person2.jpg','Chloe Bousquet-Chavanne','14 Oct']
]