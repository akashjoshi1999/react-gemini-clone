import ReactGA from "react-ga4";
export const initGA = () => {
  ReactGA.initialize("G-6V93120ZYM", {
    testMode: true,
    gaOptions: {
      send_page_view: false
    }
  });
};
export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
export const trackEvent = ({ category, action, label }) => {
  ReactGA.event({ category, action, label });
};