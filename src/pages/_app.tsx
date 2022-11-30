import 'swiper/css';
import '../styles/fonts/stylesheet.css';
import '../styles/globals.css';
import type {AppProps} from 'next/app'
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({Component, pageProps}: AppProps) {
    const { pathname } = useRouter();

    useEffect(() => {
        // some browsers (like safari) may require a timeout to delay calling this
        // function after a page has loaded; otherwise, it may not update the position
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Script strategy={"beforeInteractive"} src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></Script>

            <Script
                id="event-brite-main"
                dangerouslySetInnerHTML={{
                    __html: `
                        var exampleCallback = function() {
                            console.log('Order complete!');
                        };
                    
                        window.EBWidgets.createWidget({
                            widgetType: 'checkout',
                            eventId: '472071377197',
                            modal: true,
                            modalTriggerElementId: 'eventbrite-widget-modal-trigger-472071377197',
                            onOrderComplete: exampleCallback
                        });
                    `
                }}
            />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
