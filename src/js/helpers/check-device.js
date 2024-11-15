export const getDeviceType = () => {
    const userAgent = navigator.userAgent;

    if (/Mobi/.test(userAgent)) {
        document.documentElement.classList.add('page--mobile');
        console.log("Mobile device");

        return "Mobile device";
    } else {
        document.documentElement.classList.add('page--desctop');
        console.log("Desktop");

        return "Desktop";
    }
};