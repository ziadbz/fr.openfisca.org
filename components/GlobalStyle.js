import Head from 'next/head'
import asset from 'next/asset'

const GlobalStyle = () => (
  <div>
    <Head></Head>
    <style jsx global>{`

      body{
        width: 100%;
        margin: 0;
        font-family: 'asapregular';
      }

    @font-face {
        font-family: 'asapbold';
        src: url('../static/fonts/asap-bold-webfont.woff2') format('woff2'),
             url('../static/fonts/asap-bold-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'asapbolditalic';
        src: url('../static/fonts/asap-bolditalic-webfont.woff2') format('woff2'),
             url('../static/fonts/asap-bolditalic-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'asapitalic';
        src: url('../static/fonts/asap-italic-webfont.woff2') format('woff2'),
             url('../static/fonts/asap-italic-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'asapmedium';
        src: url('../static/fonts/asap-medium-webfont.woff2') format('woff2'),
             url('../static/fonts/asap-medium-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'asapmediumitalic';
        src: url('../static/fonts/asap-mediumitalic-webfont.woff2') format('woff2'),
             url('../static/fonts/asap-mediumitalic-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'asapregular';
        src: url('../static/fonts/asap-regular-webfont.woff2') format('woff2'),
             url('../static/fonts/asap-regular-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }    
    
    @font-face {
        font-family: 'asapsymbol';
        src: url('../static/fonts/asap-symbol-webfont.woff2') format('woff2'),
             url('../static/fonts/asap-symbol-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
      
      /* Text styles */
      
      .menu {
        font-family: 'asapregular';
        font-size: 18px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
      }

      .menu:after, .menu:hover, .menu:active {
				display: block;
				border-bottom: solid 2px #fff;
      }

      p{
        font-family: 'asapregular';
        font-size: 1.125em;
      }

      a {
        font-family: 'asapregular';
        color: #ffffff;
				display: inline-block;
				padding: 6px 12px;
        line-height: 1.5;
        font-size: 1em;
				text-align: center;
				white-space: nowrap;
				vertical-align: middle;
				text-decoration: none;
			}
   
      h1 {
        font-family: 'asapbold';
        font-size: 3em;
        font-style: normal;
        font-stretch: normal;
        line-height: 67.5px;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
      }
      
      h2 {
        font-family: 'asapmedium';
        font-size: 2em;
        font-style: normal;
        font-stretch: normal;
        line-height: 50.6px;
        letter-spacing: normal;
        color: #424242;
      }
      
      h3 {
        font-family: 'asapmedium';
        font-size: 1.5em;
        font-style: normal;
        font-stretch: normal;
        line-height: 39.4px;
        letter-spacing: normal;
        color: #424242;
      }
      
      h4 {
        font-family: 'asapmedium';
        font-size: 1.5em;
        font-style: normal;
        font-stretch: normal;
        line-height: 33.8px;
        letter-spacing: normal;
        color: #424242;
      }
      
      .Large {
        font-family: 'asapregular';
        font-size: 1.5em;
        font-style: normal;
        font-stretch: normal;
        line-height: 36.6px;
        letter-spacing: normal;
        color: #424242;
      }
      
      .Large-semibold {
        font-family: 'asapmedium';
        font-size: 1.5em;
        font-style: normal;
        font-stretch: normal;
        line-height: 36.6px;
        letter-spacing: normal;
        color: #424242;
      }
      
      .Medium {
        font-family: asapregular;
        font-size: 1.25em;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 30.5px;
        letter-spacing: normal;
        color: #424242;
      }
      
      .Medium-SemiBold {
        font-family: asapmedium;
        font-size: 1.25em;
        font-style: normal;
        font-stretch: normal;
        line-height: 30.5px;
        letter-spacing: normal;
        color: #424242;
      }
      
      .Menu {
        font-family: 'asapregular';
        font-size: 1.25em;
        font-style: normal;
        font-stretch: normal;
        line-height: 27.4px;
        letter-spacing: normal;
        color: #424242;
      }

      .Small {
        font-family: 'asapregular';
        font-size: 1em;
        font-style: normal;
        font-stretch: normal;
        line-height: 18.3px;
        letter-spacing: normal;
        color: #424242;
      }
      
      .Regular {
        font-family: 'asapregular';
        font-size: 1.125;
        font-style: normal;
        font-stretch: normal;
        line-height: 24.4px;
        letter-spacing: normal;
        color: #424242;
      }

      .Caption {
        text-transform: uppercase;
        font-size: 1em;
        text-align: center;
      }

      // buttons
      .CTA {
        color: #424242;
        font-family:'asapregular';
        text-decoration:none;
        background-color:#ffffff;
      }

      .btn{
        -moz-box-shadow: 0px 10px 10px 0px #42424226;
        -webkit-box-shadow: 0px 10px 10px 0px #42424226;
        box-shadow: 0px 10px 10px 0px #42424226;
        -moz-border-radius:4px;
        -webkit-border-radius:4px;
        border-radius:4px;
        display:inline-block;
        cursor:pointer;
        font-size:1em;
      }

      .btn:hover {
        -moz-box-shadow: 0px 10px 10px 0px #3F3D56;
        -webkit-box-shadow: 0px 10px 10px 0px #3F3D56;
        box-shadow: 0px 10px 10px 0px #3F3D56;      
      }

      .btn:active {
        position:relative;
        top:1px;
      }

      .outline {
        border: #ffffff 1px solid;
        color: #ffffff;
      }
  
      .medium {
        background-color:#6d69fb;
        -moz-border-radius:4px;
        -webkit-border-radius:4px;
        border-radius:4px;
        font-family: 'asapregular';
        font-size: 24px;
        font-color: #000000;
        padding: ;
        height: 1.5em;
      }

      // sections
      .content{
        padding: 0 3em 1em 3em;
      }
      
      .flex-container{
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;

        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        
        -webkit-flex-flow: row wrap;
        justify-content: flex-start;
      }
      .attributes {
        background-color: #EAEAEA;
        list-style: none;
  
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        
        -webkit-flex-flow: row wrap;
        justify-content: wrap;
      }

      .flex-item3{
        width:33.33%;
      }
      .flex-item2{
        width: 50%
      }

      .flex-item1{
        width: 100%;
      }

      // responsive
			}
    `}</style>
  </div>
)

export default GlobalStyle
