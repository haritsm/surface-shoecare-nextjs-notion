export const pageview = (url) => {
    window.gtag('config', 'G-T0CDZT3XRX', {
    page_path: url,
})}
  
// log specific events happening.
export const event = ({ 
    action
    , params 
}) => {
    window.gtag(
        'event'
        , action
        , params
    )
}