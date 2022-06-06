import { Grid, Link } from "@mui/material";
import React,{useState,useEffect,Fragment} from "react";
import { Box } from '@mui/system';
import { useStyle } from "../../jss/MainContainer";


export default function MainSecond() {
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
    function imageHeight(item) {
        let padding = item === 'Aster.png' ? 0 : 28
        console.log((240-padding)/2.5+"px")
        if(widthInfo[0] >= 1905)
            return (240-padding)/2.5+"px"
        else if(widthInfo[0] >= 1440) 
            return (1440*78/100/5-padding)/2.5+"px"
        else if(widthInfo[0] < 1440 && widthInfo[0] >= 960) 
            return (widthInfo[0]*78/100/5-padding)/2.5+"px"
        else
            return (widthInfo[0]*78/100/3-padding)/2.5+"px"
    }
    function style(item) {
        return item !== 'Aster.png' ? {paddingLeft:'28px',height:imageHeight(item)} : {height:imageHeight(item)}
    }
    
    return(
        <Fragment>
        {!widthInfo[1] &&
        <Grid container={true} className={classes.mainContainer} sx={{margin:'0',display:'flex',justifyContent:'space-between',paddingTop:'48px',paddingBottom:'48px','@media (max-width: 959.95px)':{justifyContent:'center'},'@media (min-width: 1905px)':{justifyContent:'center'}}}>
            {
                infos.map(item => {
                    return(
                        <Fragment>
                            <Grid item sm={4} md={2} sx={style(item)}>
                                    <Link href='/' target='_blank' sx={{width:'100%'}}>
                                        <Grid sx={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                                            <Box
                                             component='img'
                                             src={"./images/"+item}
                                             sx={{objectFit:'contain',width:'initial',height:'initial',maxWidth:'100%',maxHeight:'100%',margin:'0 auto'}}
                                            />
                                        </Grid>
                                    </Link>
                                </Grid>
                        </Fragment>
                    )
                })
            }
        </Grid>
        }
        </Fragment>
    )
}

const infos = [
    'Aster.png',
    'JCDecaux.png',
    'plus.png',
    'Manchester.png',
    'Surrey.png'
]