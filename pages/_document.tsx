import Document, { Head, Html, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import Favicon from '../components/Favicon'
import Script from 'next/script'
class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <Favicon />
                    <Script id="google-tag-manager" strategy="afterInteractive" 
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                        `,
                    }}/>
                </Head>
                <body className='bg-slate-200'>
                    <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"
                            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument

 /*static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }*/

/**
 * <Script id="google-analytics" strategy="afterInteractive">
                        {`<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K5GSNQW"
                            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`}
                    </Script>
 */