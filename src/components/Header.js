import { AppBar, Grid, Toolbar, Typography, Link } from "@mui/material";
import { useStyle } from '../jss/MainContainer'
import React, { useState,useEffect,Fragment } from "react";
import MainFirst from "./main/MainFirst";
import MainSecond from "./main/MainSecond";
import MainThird from "./main/MainThird";
import MainFourth from "./main/MainFourth";
import MainSixth from "./main/MainSixth";
import MainSeventh from "./main/MainSeventh";
import { Box } from '@mui/system';
import NavbarOptions from "./NavbarOptions";
import MainNineth from "./main/MainNineth";
import Footer from "./Footer";
import MainEight from "./main/MainEigth";
import DrawerComponent from "./DrawerComponent";

const Header = () => {
  const mainClass = useStyle()
  const [widthInfo, setWidthInfo] = useState([window.innerWidth,window.innerWidth < 1280 ? true : false])

  function handleResize() {
    setWidthInfo([window.innerWidth,window.innerWidth < 1280 ? true : false])
    console.log(window.innerWidth)
  }
  useEffect(() => {
      
      window.addEventListener('resize', handleResize)

      return _ => window.addEventListener('resize', handleResize)
  },[])
    return(
        <Fragment>
            <AppBar style={{backgroundColor:'white',padding:'8px 0'}} color="inherit" position="sticky" sx={{boxShadow:'none',borderBottom:'1px solid #EFF0F1'}}>
                <Toolbar className={mainClass.mainContainer} disableGutters={true} sx={{boxSizing:'border-box',}}>
                    <Grid sx={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Typography variant="h3">
                            <Link href='/' style={{width:'137px', display: 'flex',alignItems: 'center',marginTop: '3px'}}>
                                {
                                    widthInfo[0] >= 600 
                                    ?
                                    <Box 
                                     component='img'
                                     src='./goodsted-logo.svg'
                                    />
                                    :
                                    <Box 
                                     component='img'
                                     src='./goodsted-mobile.svg'
                                     sx={{width:'42px',height:'42px'}}
                                    />
                                }
                            </Link>
                        </Typography>
                        {!widthInfo[1] ? <NavbarOptions /> : <DrawerComponent />}
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container={true} sx={{justifyContent:'center'}}>
                <MainFirst />
                <MainSecond />
                <MainThird />
                <MainFourth />

                <MainSixth />
                <MainSeventh />
                <MainEight />
                <MainNineth />
            </Grid>
            <Footer />
        </Fragment>
    );
}

export default Header;