import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyle } from "../../jss/MainContainer";
import { Box } from "@mui/system";
export default function MainNineth() {
    const classes = useStyle()
    return(
        <Grid container={true} sx={{justifyContent:'center',backgroundColor:'#1C2C2E',paddingBottom:'64px',paddingTop:'48px'}}>
            <Grid container={true} className={classes.mainContainer} sx={{justifyContent:'center'}}>
                <Grid container={true} item xs={12} md={10} lg={9} 
                    sx={{
                        alignItems:'center',
                        '@media (min-width: 0)': {
                            WebkitBoxPack:'center',
                            justifyContent:'center'
                        },
                        '@media (min-width: 600px)': {
                            WebkitBoxPack:'justify',
                            justifyContent:'space-between',
                            flexBasis:'100%',
                            maxWidth:'100%'
                        },
                        '@media (min-width: 960px)': {
                            flexBasis:'83.33333%',
                            maxWidth:'83.3333%'
                        },
                        '@media (min-width: 1281px)': {
                            WebkitBoxPack:'center',
                            justifyContent:'center',
                            flexBasis: '75%',
                            flexGrow:'0',
                            maxWidth:'75%'
                        }
                    }}
                >
                    <Grid item
                     sx={{
                        '@media(min-width: 0)':{
                            height:'144px',
                            width:'144px',
                            marginRight:'0'
                        },
                        '@media(min-width: 600px)':{
                            height:'224px',
                            width:'224px'
                        },
                        '@media(min-width: 1281px)':{
                            marginRight:'32px'
                        }
                    }}>
                        <Box 
                            component='img'
                            src='./world.webp'
                            sx={{display:'block',width:'100%'}}
                        />
                    </Grid>
                    <Grid item>
                        <Grid container={true} direction='column' sx={{flexDirection:'column'}}>
                            <Typography variant='h6'
                                sx={{
                                    letterSpacing:'-1px',
                                    color:'#fff',
                                    fontSize:'18px',
                                    fontWeight:'600',
                                    lineHeight:'1.3',
                                    '@media (min-width: 0)':{
                                        fontSize:'24px',
                                        textAlign:'center'
                                    },
                                    '@media (min-width: 600px)':{
                                        fontSize:'35px',
                                        textAlign:'left'
                                    }
                                }}
                            >
                                Let's collaborate for a<br />better world
                            </Typography>
                            <Grid container={true} sx={{marginTop:'32px'}}>
                                    <Grid item xs={12} sm='auto'>
                                        <Button variant='contained'
                                            component='a'
                                            className='join-now'
                                            sx={{
                                                color:'#fff',
                                                backgroundColor:'#E76E3C',
                                                boxShadow:'none',
                                                borderRadius:'4px',
                                                fontSize:'16px',
                                                fontWeight:'600',
                                                lineHeight:'24px',
                                                minHeight:'40px',
                                                padding:'8px 16px',
                                                textTransform:'initial',
                                                height:'60px',
                                                width:'192px',
                                                '@media (max-width: 599.95px)':{
                                                    fontSize:'14px',
                                                    height:'48px',
                                                    minWidth:'unset',
                                                    width:'100%',
                                                    marginBottom:'16px'
                                                }
                                            }}
                                        >
                                            Get started for free
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm='auto'>
                                        <Button variant='outlined'
                                            component='a'
                                            className='talk-to-us'
                                            sx={{
                                                fontWeight:'600',
                                                minHeight:'40px',
                                                color:'#fff',
                                                textTransform:'none',
                                                padding:'8px 16px',
                                                alignItems:'center',
                                                backgroundColor:'transparent',
                                                border:'2px solid #fff',
                                                display:'flex',
                                                WebkitBoxPack:'center',
                                                justifyContent:'center',
                                                lineHeight:'24px',
                                                marginLeft:'24px',
                                                height:'60px',
                                                fontSize:'16px',
                                                width:'212px',
                                                '@media (max-width: 1280.95px)': {
                                                    width:'128px'
                                                },
                                                '@media (max-width: 599.95px)': {
                                                    height:'48px',
                                                    fontSize:'14px',
                                                    margin:'unset',
                                                    width:'100%'
                                                }
                                            }}
                                        >
                                            Talk to us
                                        </Button>
                                    </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
