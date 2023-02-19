import Document, { Html, Head, Main, NextScript } from "next/document";
    export default class CustomDocument extends Document {
      render() {
        return (
          <Html>
            <Head>
              <meta name="keywords" content="تولين ، شركة تولين ، تولين تكنولوجي، مواقع، برمجة، برمجيات،تركيا، اسطنبول، استضافة،" />	
              <meta name="Description" content="تولين تكنولوجي شركة برمجية لبرمجة وتصميم المواقع والمتاجر الإلكترونية وااهوية البصرية" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
             
              <meta property="og:type" content="website" />
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:site" content="@" />
              
              <meta name="naver-site-verification" content="" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
              <meta httpEquiv="Cache-Control" content="no-cache" />

              <link
          rel="icon"
          href="/imgs/site-logos/logo.png"
          
         
        />


            </Head>
            <body>
              <Main />
            </body>
            <NextScript />
          </Html>
        );
      }
    }