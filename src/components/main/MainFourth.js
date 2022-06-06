import React,{useState,useEffect} from "react";
import { Grid, Typography } from "@mui/material";
import { useStyle } from "../../jss/MainContainer";
import Link from "@mui/material/Link";
import { Box } from "@mui/system";
import DownOrUpArrow from "../DownOrUpArrow";

export default function MainFourth() {
    const classes = useStyle()
    const listElement = infos()
    const [showMore,setShowMore] = useState(true);
    const [widthInfo, setWidthInfo] = useState([window.innerWidth,window.innerWidth < 1905 ? true : false])
    const handleShowMore = (e) => {
        e.preventDefault()
        if(showMore) {
            setShowMore(!showMore)
        } else {
            const target = document.querySelector('#scroll').offsetTop
            console.log(target)
            window.scrollTo({
                top:target-96,
                behavior:'smooth'
            })
            setTimeout(() => setShowMore(!showMore),widthInfo[0] < 600 ? '600' : '300')
        }
    }
    
    function handleResize() {
      setWidthInfo([window.innerWidth,window.innerWidth < 1905 ? true : false])
      console.log(window.innerWidth)
    }
    useEffect(() => {
        
        window.addEventListener('resize', handleResize)

        return _ => window.addEventListener('resize', handleResize)
    },[])
    let number = -1;
    return (
        <Grid id='scroll' sx={{width:'100%',position:'relative',padding: '80px 0',backgroundColor:'#F3F3F3'}}>
            <Grid  style={{position:'absolute',marginTop:'-96px'}}>
            </Grid>
            <Grid container={true} className={classes.mainContainer}>
            <Grid item xs={12} sm={12} md={5} 
                    sx={{
                        '@media (max-width: 960px) and (min-width: 900px)':{
                            maxWidth:'100%',
                            flexBasis:'100%'
                        },
                        marginBottom:'32px'
                    }}>
                    <Typography 
                        variant='h2' 
                        sx={{
                            fontWeight:'600',
                            lineHeight:'1.3',
                            letterSpacing:'-0.8px',
                            fontSize:'2.8125em',
                            '@media (min-width: 0px)': {
                                textAlign: 'center'
                            },
                            '@media (min-width: 600px)': {
                                textAlign: 'center'
                            },
                            '@media (min-width: 1905px)':{
                                fontSize:'60px'
                            },
                            '@media (min-width: 960px)': {
                                textAlign: 'left'
                            },
                            '@media (max-width: 959.95px)': {
                                fontSize:'45px'
                            },
                            '@media (max-width: 599.95px)': {
                                fontSize:'24px'
                            }
                        }}>
                        Discover causes <br/> you care about
                    </Typography>
                </Grid>
                <Grid item sm={12} md={7}>
                    <Grid container={true} sx={{justifyContent:'center'}}>
                         <Grid container={true} spacing={2} sx={{marginBottom:'0','@media(min-width: 0)':{marginTop:'-16px',maxWidth:'none',flexBasis:'auto',width:'calc(100% + 16px)',marginLeft:'-16px'}}}>
                            {showMore && listElement.slice(0,6).map(item => {
                                number++
                                return(<Card key={number + 131513} wordBreak={widthInfo[1]} number={number} item={item}/>)
                            })}
                            {!showMore && listElement.map(item => {
                                number++
                                return(<Card key={number + 131513} wordBreak={widthInfo[1]} number={number} item={item}/>)
                            })}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='body1' sx={{cursor:'pointer',fontSize:'18px',marginTop:'24px',fontWeight:'500',lineHeight:'1.3','@media (max-width:959.95px)':{textAlign:'center'}}} onClick={handleShowMore}>
                            {showMore ? 'Show More ':'Show Less '}<DownOrUpArrow downOrUp={showMore}/>  
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}



const infos = () => {
    return [
         'Environment & Sustainability',
         'Equality & Inclusion',
         'Health & Wellbeing',
         'Children & Youth',
         'Arts & Culture',
         'Black Lives Matter',
         'Animal Welfare',
         'Clean water & Sanitation',
         'Community Engagement',
         'COVID-19',
         'Education & Training',
         'Employment & Economic Growth',
         'Food & Agriculture',
         'Homelessness & Housing',
         'Innovation & Infrastructure',
         'Later Life & Elderly',
         'Migration & Refugees',
         'Partnerships & Collaboration',
         'Peace & Justice',
         'Poverty Relief',
         'Financial Inclusion',
         'Mental Wellness & Resilience'
    ]
}


const Card = ({number,item,wordBreak}) => {
    return (<Grid key={number+2153121} item xs={12} sm={6} md={'auto'} sx={{order:number,paddingLeft:'16px',paddingTop:'16px',maxWidth:'none',width:'auto'}}>
    <Link href='/' sx={{color:'inherit',textDecoration:'none'}}>
        <Grid 
         container={true}
         sx={{
             border:'1px solid #EAE9F2',
             display:'flex',
             padding:'16px 18px 16px 16px',
             background:'#FFF',
             alignItems:'center',
             borderRadius:'8px',
             '@media (max-width: 959.95px)': {
                 height:'100%'
             }
         }} 
        >
            <Grid item>
                <Box 
                 component='img'
                 src={'./mainFourImages/order'+number+'.png'}
                 sx={{width:'55px',height:'55px'}}
                />
            </Grid>
            <Grid item xs={true}>
                <Typography variant='h6' style={{fontSize:'18px',fontWeight:'500',lineHeight:'1.2',marginLeft:'14px',textAlign:'initial'}}>
                    {wordBreak && number === 0 ? breaked(item) : item}
                </Typography>
            </Grid>
        </Grid>
    </Link>
</Grid>)
}

const breaked = (item) => {
    item=item.split(" &");
    return(<>{item[0]}<br />{"&"+item[1]}</>)
}