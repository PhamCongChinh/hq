// log the pageview with their URL
declare global {
    interface Window {
        dataLayer:any;
    }
}

export const GTMPageView = (url: string) => {
    interface PageEventProps {
        event: string,
        page: string
    }

    const pageEvent: PageEventProps = {
        event: 'pageView',
        page: url
    }
    window && window.dataLayer && window.dataLayer.push(pageEvent)
    return pageEvent
}
