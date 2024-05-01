import { helper } from '@ember/component/helper';

export default helper(function firedGtagEvent([eventName]) {
    if (window.gtag) {
        return () => {
            window.gtag('event', eventName)
        };
    }
    return () => {};
});
