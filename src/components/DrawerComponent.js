import React, { Fragment, useState } from "react";
import { Drawer, Button, List, MenuItem, Grid, ListItemButton, ListItemText, ListItem, SvgIcon, Divider, Accordion, AccordionSummary, Typography, AccordionDetails, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImpactChallenge from "./ImpactChallenge";
import Employee from "./Employee";
export default function DrawerComponent() {
    const [open,setOpen] = useState(false)
    return(
        <Fragment>
            <StyledDrawer open={open} setOpen={setOpen}>
                <Grid sx={{width:'100%'}}>
                    <List sx={{flexWrap:'flex'}}>
                        <ListItem sx={{display:'flex',height:'50px'}}>
                            <Grid container={true} sx={{alignItems:'center',justifyContent:'space-between'}}>
                                <Box
                                    component='img'
                                    src='./goodsted-mobile.svg'
                                    sx={{width:'42px',height:'42px'}}
                                />
                                <MenuIcon onClick={() => setOpen(!open)} sx={{fontSize:'28px',color:'rgba(0, 0, 0, 0.54)',width:'1em',height:'1em'}} />
                            </Grid>
                        </ListItem>
                    </List>
                    <Divider sx={{borderColor:'#EFF0F1'}}/>
                    <List sx={{paddingLeft:'0',paddingBottom:'50px'}}>
                        <ListItem>
                            <ListItemText>
                                <Accordion sx={{boxShadow:'none'}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        sx={{alignItems:'center',padding:'0'}}
                                    >
                                        <Typography variant="body1" sx={{color:'rgb(114,115,116)',fontSize:'18px',lineHeight:'1.71',fontWeight:'600'}}>
                                            Solutions
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container={true}>
                                            <MenuItem component='a' sx={{display:'flex',width:'100%',alignItems:'center',padding:'14px 16px',borderLeft:'4px solid #fff',lineHeight:'1',transition:'all .2s ease-in-out'}}>
                                                <Grid item sx={{display:'flex',alignItems:'center'}}>
                                                    <Grid item>
                                                        <ImpactChallenge />
                                                    </Grid>
                                                    <Grid item xs={true}>
                                                        <Grid container={true} sx={{fontSize:'16px',fontWeight:'600',lineHeight:'1'}}>
                                                            Impact Challenge
                                                        </Grid>
                                                        <Typography component='caption' sx={{fontSize:'13px',fontWeight:'400',lineHeight:'1.66'}}>
                                                            Team building for social impact
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </MenuItem>
                                            <MenuItem component='a' sx={{display:'flex',width:'100%',alignItems:'center',padding:'14px 16px',borderLeft:'4px solid #fff',lineHeight:'1',transition:'all .2s ease-in-out'}}>
                                                <Grid item sx={{display:'flex',alignItems:'center'}}>
                                                    <Grid item>
                                                        <Employee />
                                                    </Grid>
                                                    <Grid item xs={true}>
                                                        <Grid container={true} sx={{fontSize:'16px',fontWeight:'600',lineHeight:'1'}}>
                                                            Employee Purpose
                                                        </Grid>
                                                        <Typography component='caption' sx={{fontSize:'13px',fontWeight:'400',lineHeight:'1.66'}}>
                                                            Activate your social purpose
                                                        </Typography>   
                                                    </Grid>
                                                </Grid>
                                            </MenuItem>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <Accordion sx={{boxShadow:'none'}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        sx={{alignItems:'center',padding:'0'}}
                                    >
                                        <Typography variant="body1" sx={{color:'rgb(114,115,116)',fontSize:'18px',lineHeight:'1.71',fontWeight:'600'}}>
                                            Resources
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{padding:'8px 16px 16px 36px'}}>
                                        <Grid container={true} direction='column'>
                                        <Typography variant='body1' component='a' sx={{cursor:'pointer',color:'rgb(114, 115, 116)',fontWeight:'600',lineHeight:'1.71'}}>
                                                Our Blog
                                            </Typography>
                                            <Typography variant='body1' component='a' sx={{marginTop:'16px',cursor:'pointer',color:'rgb(114, 115, 116)',fontWeight:'600',lineHeight:'1.71'}}>
                                                Member Stories
                                            </Typography>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <Accordion sx={{boxShadow:'none'}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        sx={{alignItems:'center',padding:'0'}}
                                    >
                                        <Typography variant="body1" sx={{color:'rgb(114,115,116)',fontSize:'18px',lineHeight:'1.71',fontWeight:'600'}}>
                                            About
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{padding:'8px 16px 16px 36px'}}>
                                        <Grid container={true} direction='column'>
                                        <Typography variant='body1' component='a' sx={{cursor:'pointer',color:'rgb(114, 115, 116)',fontWeight:'600',lineHeight:'1.71'}}>
                                                Our Stories
                                            </Typography>
                                            <Typography variant='body1' component='a' sx={{marginTop:'16px',cursor:'pointer',color:'rgb(114, 115, 116)',fontWeight:'600',lineHeight:'1.71'}}>
                                                Team & Advisors
                                            </Typography>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </ListItemText>
                        </ListItem>
                        <ListItemButton component='a'>
                            <ListItemText>
                                <Typography variant='body1' sx={{color:'rgb(114, 115, 116)',fontSize:'18px',fontWeight:'600',lineHeight:'1.71'}}>
                                    Nonprofits & Startups
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <Grid container={true} direction='column' sx={{background:'white',bottom:'16px',paddingBottom:'calc(0px + env(safe-area-inset-bottom))',position:'fixed'}}>
                            <ListItemButton className='loginButton'>
                                <Button className='login' disableFocusRipple={true} variant='outlined' color='primary' size='medium' sx={{minHeight:'56px',width:'100%',color: 'rgb(231, 110, 60)',marginTop:'16px',borderColor: 'rgb(231, 110, 60)',textTransform: 'none',fontWeight:'600',padding:'8px 16px'}}>
                                    Login
                                </Button>
                            </ListItemButton>
                            <ListItemButton className='loginButton'>
                                <Button className='join-now' variant='contained' color='primary' sx={{width:'100%',padding:'8px 16px',minHeight:'56px',boxShadow:'none',borderRadius:'4px',backgroundColor:'rgb(231, 110, 60)',color:'#fff',textTransform:'none',fontWeight:'600',fontSize:'14px'}}>
                                    Join now
                                </Button>
                            </ListItemButton>
                        </Grid>
                    </List>
                </Grid>
            </StyledDrawer>
            <MenuIcon onClick={() => setOpen(!open)} sx={{fontSize:'28px',color:'rgba(0, 0, 0, 0.54)',width:'1em',height:'1em'}} />
        </Fragment>
    )
}

const StyledDrawer = styled((props,open,setOpen) => (
    <Drawer anchor="right" open={open} onClose={() => setOpen(!open)} elevation={16} {...props}/>
))(() => ({
    "& .MuiPaper-root": {
        transition:'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0.2ms',
        width:'100%'
    },
    '& .MuiPaper-root .MuiBackdrop-root': {
        transition:'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0.5ms'
    }
}))