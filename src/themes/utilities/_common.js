import { makeStyles } from "@material-ui/core/styles";

export const commonStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    ".circular-image-small": {
      height: "48px",
      width: "48px",
      borderRadius: "50%",
      overflow: "hidden",
    },
    ".card": { transition: "all 0.3s ease" },
    ".card:hover": { boxShadow: theme.shadows[12] },
    ".card-title": {
      fontSize: "1rem",
      textTransform: "capitalize",
      fontWeight: "500",
    },
    ".card-subtitle": { fontSize: "0.875rem", color: "var(--text-muted)" },
    ".theme-dark .card-subtitle": { color: "rgba(255, 255, 255, 0.54)" },
    ".hide-on-mobile": { display: "inherit" },
    "@media screen and (max-width: 767px)": {
      ".hide-on-mobile": { display: "none !important" },
      ".show-on-mobile": { display: "inherit !important" },
      ".invisible-on-pc": { visibility: "visible" },
    },
    "@media screen and (min-width: 1200px)": {
      ".hide-on-pc": { display: "none !important" },
    },
    "@media screen and (max-width: 1200px)": {
      ".show-on-pc": { display: "none !important" },
    },
    ".VictoryContainer svg": { height: "100% !important" },
    ".box-shadow-none": { boxShadow: "none !important" },
    ".circle-44": { height: "44px !important", width: "44px !important" },
    ".circle-32": {
      height: "32px !important",
      minHeight: "32px !important",
      width: "32px !important",
    },
    ".circle-32 .MuiFab-root": { minHeight: "32px !important" },
    ".circle-32 .MuiIcon-root": { fontSize: "13px !important" },
    ".show-on-mobile": { display: "none !important" },
    ".invisible-on-pc": { visibility: "hidden" },
    ".highlight-js pre": { whiteSpace: "pre-line" },
    ".cursor-pointer": {
      cursor: "pointer",
    },
    ".cursor-move": {
      cursor: "move",
      color: "#ffffff",
      fontSize: "2.5em",
      filter: "drop-shadow(1px 0px 3px #b2b2b2)"
    },
    ".avatar": {
      height: "32px !important",
      width: "32px !important",
    },
    ".face-group .avatar:not(:first-child)": {
      marginLeft: "-0.875rem !important",
    },
    ".opacity-1": {
      opacity: 1,
    },
    //CUSTOM GERARDO
    ".quote-item-header":{
      borderRadius:'10px', 
      display:'flex',
      flexFlow:'row-reverse',
      justifyContent:'space-between',
      padding: '0 40px 0 0',
      borderWidth:'1px',
      borderStyle:'solid',
      borderColor: 'transparent',
      margin: '0',

      "&.active":{
        padding:'40px', 
        borderColor: '#F1f1f1',
        margin:'0 0 30px 0',
      }

    },
    ".quote-item-title":{
      border:'1px solid red',
      color: '#6e72ba',
      border: '1px solid #abacc4',
      borderRadius:'20px',
      padding: '2px 10px',
      display: 'flex',
      width: 'fit-content',
      alignItems: 'center',
      fontSize:'0.8em',
      height:'fit-content',

      "@media screen and (max-width: 767px)":{
        marginBottom:'20px'
      },

    },
    ".mosaic":{
      margin: "10px",
      width:"116px !important",
      height:"116px !important",
      transition: "all 0.5s ease",
      cursor:"pointer"
    },
    ".mosaic:hover":{
      margin: "0px",
      width:"136px !important",
      height:"136px !important"
    },
    ".mosaic img":{
      height: "210px",
      objectFit: "cover",
      opacity: "0.1"
    },
    ".mosaic:hover img":{
      opacity: "1",
      transition: "all 0.5s ease",
    },
    ".mosaic h5":{
      position:"absolute",
      width:"90px",
      height:"90px",
      transition: "all 0.5s ease",
      fontSize:"0.9em",
      textAlign:"center",

      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
    },
    ".mosaic:hover h5":{
      opacity:"0"
    },
// MOVE START
    ".panel-discrete .element-discrete":{
      opacity:'0',
      transition: "all 0.25s ease",
      background:'deepskyblue',
      borderRadius:'5px 0 0 5px'
    },
    ".panel-discrete .semi-discrete":{
      opacity:'0.2',
    },
    ".panel-discrete.public":{
      padding:"0 2.5rem",
    },
    "@media screen and (max-width: 767px)":{
      ".panel-discrete.public":{
        padding:"0.9rem 0.7rem !important"
      },
    },

// MOVE END

    ".panel-drag:active":{
      "& .catalog":{
        opacity:'0',
        //border:'2px solid blue'
      },
      "& .panel-discrete":{
        border:'1px solid black',
        borderStyle:'dotted',
        background:'white',
      },
      "& .panel-discrete.public":{
        border:'0 solid white',
      },

    },

    //topLabel,
    ".label_wrap":{
      display:'flex', 
      width:"100%",
      //width:"calc(100% - 74px)", 
      flexFlow:'column',

      "& .label_item":{
        display:'flex',
        background:'deepskyblue', 
        padding:'0 10px 0 20px', 
        marginLeft:'10px', 
        width:'fit-content', 
        borderRadius:'0 5px 0 10px', 
        margin:"-3px -3px 0 0" 
      },
      "& h5":{
        fontWeight:'600', 
        fontSize:'14px', 
        color:'white',
        marginRight:'100px', 
        marginBottom:'0', 
        display:'flex', 
        alignItems:'center'
      }
    },


    ".panel-discrete":{

      "& .panel-content":{
        border:'1px solid #ffffff',
        borderRadius:'0 5px 5px 0'
      },

      "& .element-discrete":{
        opacity:'0',
        transition: "all 0.25s ease",
        background:'deepskyblue',
        borderRadius:'5px 0 0 5px'
      },

      "& .semi-discrete":{
        opacity:'0.2',
      },

      "&:hover":{
        "& .panel-content":{
          border:'1px solid deepskyblue',
          background:'white'
        },
        "& .element-discrete":{
          opacity:'1'
        },
        "& .semi-discrete":{
          opacity:'1'
        },
      },

      "&.public":{
        padding:"0 2.5rem", 
        
      },

      //Hover behaves different when public

      "&.public:hover":{
        "& .panel-content":{ 
        border:'1px solid #ffffff',
        backgroundColor:'#ffffff'
        }
      },
      "&.public .label_wrap":{
        display:"none"
      },
      

      "@media screen and (max-width: 767px)":{
        "&.public":{
          padding:"0.9rem 0.7rem !important"
        },
      },
      
      
      
      
    },
    
    //INFOCARD
    ".info-card": {
      display:'flex',
      justifyContent:'space-between',
      background:'#ffffff',
      borderWidth:'1px 0 1px 0',
      padding:"2px 0 2px 25px",
      overflow:'visible',
      "@media screen and (max-width: 767px)": {
        padding:"0.9rem 0.7rem !important"
      }
    },
    //CATALOG
    ".catalog":{
      display: 'flex',
      //alignItems:'center',
      height:'25px',
      border:'1px solid #ffffff',
      display:'flex',
      color:'#ffffff',
      background:'#ffffff',
      fontSize:"1em",
      cursor:'pointer',
      transition: "all 0.2s ease",

      "& .catalog-item":{
        display:'flex',
        alignItems:'center',
        flexFlow:'column',
        margin:'15px 15px 5px 15px',
        "& p":{
          margin:'5px',
          fontSize:'0.8em',
          color:"#CCC"
        }
      },
  
      "& .catalogButton":{
        //marginRight:'10px',
        height:'23px',
        width:'23px',
        color:"#CCC",
      },
      "& .catalogLine":{
        width:'100%', 
        height:'3px', 
        borderStyle:'dashed', 
        borderWidth:'2px 0 0 0', 
        borderColor:'#ffffff', 
        marginTop:'10px'
      },
  
      "&:hover":{
        color:'deepskyblue',
        //border:'1px solid deepskyblue',
        catalogButton: {
          background:"deepskyblue"
        },
        "& .catalogButton":{
          background:"deepskyblue",
          color:"white",
        },
        "& .catalogLine":{
          borderColor:'deepskyblue', 
        }

  
      },
      "&.open":{
        color:'black',
        border:'3px dashed deepskyblue',
        margin:'10px 0 10px 25px',
        borderRadius:'5px',
        paddingLeft:'15px',
        transition: "all 0.2s ease",

      }
  
  
    },
       
    //IMAGE-SELECTOR
    ".image-selector":{
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      background: 'rgba(0,0,0,0.85)',
      minHeight: '100%',
      zIndex: '10',
      borderRadius:'4px',
      padding:'25px'
    },
    //IFRAME RESPONSIVENESS
    ".video-container":{
      position: 'relative',
      paddingBottom: '56.25%', 
      paddingTop:'30px',
      height:'0',
      width: '50vw',
      overflow: 'hidden'
    },
    ".video-container iframe, .video-container object, .video-container embed":{
      position: "absolute", 
      top: "0", 
      left: "0", 
      width: "100%", 
      height: "100%",
    },
    //AFFECTED IN PRINTING
    ".comments-box":{
      backgroundColor:'#fffcf6', 
      fontSize:'0.9em', 
      fontStyle:'italic', 
      width:'50vw', 
      color:'#744501',
      marginTop:"10px",
      "@media screen and (max-width: 767px)":{
        width:'96%', 
      }
    },
    ".quote-content":{
        marginTop:"-94px",
      }
    ,
    //PRINTING
    ".show-on-print":{
      display:'none'
    },
    ".show-on-print-flex":{
      display:'none'
    },
    ".hide-on-print":{
      display:'block'
    },
    ".hide-on-print-inline":{
      display:'inline-block'
    },

    //PRINT
    "@media print": {
      ".show-on-print":{
        display:'block'
      },
      ".show-on-print-flex":{
        display:'flex'
      },
      ".hide-on-print, .hide-on-print-inline":{
        display:'none'
      },
      ".quote-content":{
        marginTop:"0px",
      },
      
      //SPLITTING IN 2 COLUMNS
      ".quote-columns":{
        display:"flex"
      },
      ".quote-columns > div":{
        flex:"1",
      },
      ".quote-columns > div:nth-child(2)":{
        margin: '0 0 0 40px'
      },
      ".comments-box":{
        fontSize:'0.9em', 
        fontStyle:'italic', 
        width:'100%', 
        color:'#000',
        marginTop:"0"
      },
    },
    //MD OVERRIDE
    ".wmde-markdown":{
      fontSize:"14px !important",
    },
    //FileStack Icon Override
    ".fs_stretch_icon a":{
      width:"180%",
    }

    
  },
}));
