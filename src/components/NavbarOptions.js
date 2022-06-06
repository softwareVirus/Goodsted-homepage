import { Grid, Typography, Link, Button,Menu,MenuItem } from "@mui/material";
import React, { Fragment,useState } from "react";
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles'
import ImpactChallenge from "./ImpactChallenge";
import Employee from './Employee'
import House from './House'
import Member from './Member'
import Blog from "./Blog";
import DrawerComponent from './DrawerComponent'

export default function NavbarOptions() {

    const string = 'Nonprofits & Startups';
    const [anchorEl1,setAnchorEl1] = useState(null)
    const open1 = Boolean(anchorEl1)
    const handleClick1 = (e) => {
        console.log(e.currentTarget)
        setAnchorEl1(e.currentTarget)
    }
    const handleClose1 = () => {
        setAnchorEl1(null)
    }

    const [anchorEl2,setAnchorEl2] = useState(null)
    const open2 = Boolean(anchorEl2)
    const handleClick2 = (e) => {
        console.log(e.currentTarget)
        setAnchorEl2(e.currentTarget)
    }
    const handleClose2 = () => {
        setAnchorEl2(null)
    }

    const [anchorEl3,setAnchorEl3] = useState(null)
    const open3 = Boolean(anchorEl3)
    const handleClick3 = (e) => {
        console.log(e.currentTarget)
        setAnchorEl3(e.currentTarget)
    }
    const handleClose3 = () => {
        setAnchorEl3(null)
    }
    return(
        <Fragment>
            <Grid sx={{paddingLeft:'46px',display:'flex',flexDirection:'row',alignItems:'center',cursor:'pointer'}}>
                <Typography 
                    id="solutions"
                    aria-controls={open1 ? "menu-solutions" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open1 ? "true" : undefined}
                    onClick={handleClick1} variant='h6' sx={{paddingRight:'60px',fontSize: '14px',height:'19.5px',marginTop:'-2px'}}>
                    Solutions
                    <Box 
                     component='img'
                     src='./down-arrow.svg'
                     sx={{marginLeft:'8px',marginBottom:'1px'}}
                    />
                </Typography>
                <DropdownMenu
                    anchorEl={anchorEl1}
                    open={open1}
                    id="menu-solutions"
                    MenuListProps={{
                        "aria-labelledby":"solutions"
                    }}
                    onClose={handleClose1}
                >
                    <Typography variant='subtitle2' sx={{fontSize:'14px',lineHeight:'1.3',color:'rgb(231,110,60)',fontWeight:'bold',padding:'12px 20px'}}>
                        Solutions
                    </Typography>
                    <MenuItem component='a' sx={{display:'flex',alignItems:'center',padding:'14px 16px',borderLeft:'4px solid #fff',lineHeight:'1',transition:'all .2s ease-in-out'}}>
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
                    <MenuItem component='a' sx={{display:'flex',alignItems:'center',padding:'14px 16px',borderLeft:'4px solid #fff',lineHeight:'1',transition:'all .2s ease-in-out'}}>
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
                    
                </DropdownMenu>
                <Typography 
                    id="resources"
                    aria-controls={open2 ? "menu-resources" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open2 ? "true" : undefined}
                    onClick={handleClick2} variant='h6' sx={{paddingRight:'60px',height:'19.5px',fontSize: '14px',marginTop:'-2px',cursor:'pointer'}}>
                    Resources
                    <Box 
                     component='img'
                     src='./down-arrow.svg'
                     sx={{marginLeft:'8px',marginBottom:'1px'}}
                    />
                </Typography>
                <DropdownMenu
                    anchorEl={anchorEl2}
                    open={open2}
                    id="menu-resources"
                    MenuListProps={{
                        "aria-labelledby":"resources"
                    }}
                    onClose={handleClose2}
                >
                    <Typography variant='subtitle2' sx={{fontSize:'14px',lineHeight:'1.3',color:'rgb(231,110,60)',fontWeight:'bold',padding:'12px 20px'}}>
                        Resources
                    </Typography>
                    <MenuItem component='a' sx={{display:'flex',alignItems:'center',padding:'14px 16px',borderLeft:'4px solid #fff',lineHeight:'1',transition:'all .2s ease-in-out',fontWeight:'600',fontSize:'16px'}}>
                        <Blog />
                        Our Blog
                    </MenuItem>
                    <MenuItem component='a' sx={{display:'flex',alignItems:'center',padding:'14px 16px',borderLeft:'4px solid #fff',lineHeight:'1',transition:'all .2s ease-in-out',fontWeight:'600',fontSize:'16px'}}>
                        <Member />
                        Members Stories
                    </MenuItem>
                    
                </DropdownMenu>
                <Typography 
                    id="about"
                    aria-controls={open3 ? "menu-about" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open3 ? "true" : undefined}
                    onClick={handleClick3} variant='h6' sx={{paddingRight:'60px',fontSize: '14px',height:'19.5px',marginTop:'-2px',cursor:'pointer'}}>
                    About
                    <Box 
                     component='img'
                     src='./down-arrow.svg'
                     sx={{marginLeft:'8px',marginBottom:'1px'}}
                    />  
                </Typography>
                <DropdownMenu
                    anchorEl={anchorEl3}
                    open={open3}
                    id="menu-about"
                    MenuListProps={{
                        "aria-labelledby":"about"
                    }}
                    onClose={handleClose3}
                >
                    <Typography variant='subtitle2' sx={{fontSize:'14px',lineHeight:'1.3',color:'rgb(231,110,60)',fontWeight:'bold',padding:'12px 20px'}}>
                        About
                    </Typography>
                    <MenuItem component='a' sx={{display:'flex',alignItems:'center',padding:'14px 16px',borderLeft:'4px solid #fff',lineHeight:'1',transition:'all .2s ease-in-out',fontWeight:'600',fontSize:'16px'}}>
                        <House />
                        Our Story
                    </MenuItem>
                    <MenuItem component='a' sx={{display:'flex',alignItems:'center',padding:'14px 16px',borderLeft:'4px solid #fff',lineHeight:'1',transition:'all .2s ease-in-out',fontWeight:'600',fontSize:'16px'}}>
                        <Member />
                        Team & Advisors
                    </MenuItem>
                    
                </DropdownMenu>
                <Link href='/' variant='subtitle2' sx={{textDecoration: 'none',fontSize: '15px',color: 'inherit',paddingRight:'60px'}} >
                    {string}
                </Link>
            </Grid>
                       
            <Grid variant='div' sx={{display: 'flex',gap: '1em'}}>
                <Button className='login' disableFocusRipple={true} component='a' variant='outlined' color='primary' size='medium' sx={{minHeight:'42px',color: 'rgb(231, 110, 60)',borderColor: 'rgb(231, 110, 60)',textTransform: 'none',fontWeight:'600',padding:'8px 16px'}}>
                    Login
                </Button>
                <Button component='a' className='join-now' variant='contained' color='primary' sx={{padding:'8px 16px',minHeight:'42px',boxShadow:'none',borderRadius:'4px',backgroundColor:'rgb(231, 110, 60)',color:'#fff',textTransform:'none',fontWeight:'600',fontSize:'14px'}}>
                    Join now
                </Button>
            </Grid>
            <DropdownMenu />
        </Fragment>
    )
}


const DropdownMenu = styled((props) => (
    <Menu 
        elevation={8}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'left'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'left'
        }}
        {...props}
    />
))(() => ({
    "& .MuiPaper-root": {
        width:'320px',
        boxShadow:'0 16px 48px rgb(0 0 0/ 16%)',
        marginTop:'16px',
        borderRadius:'12px'
    },
    '& .MuiPaper-root .MuiList-root': {
        padding:'20px 0'
    },
    '& .MuiPaper-root .MuiList-root .MuiMenuItem-root:hover': {
        background:'rgba(231, 110, 60, 0.1)',
        transition:'all .2s ease-in-out',
        borderLeft:'4px solid #E76E3C'
    }
}))
