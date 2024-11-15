export const getMobileModel = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        document.documentElement.classList.add('page--android');
        return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        document.documentElement.classList.add('page--ios');
        return "iOS";
    }

    if (/windows phone/i.test(userAgent)) {
        document.documentElement.classList.add('page--windows-phone');
        return "Windows Phone";
    }

    if (/blackberry/i.test(userAgent)) {
        document.documentElement.classList.add('page--blackberry');
        return "BlackBerry";
    }

    return "unknown";
};


    // if (/symbian/i.test(userAgent)) {
    //   document.documentElement.classList.add('page--symbian');
    //   return "Symbian";
    // }

    // if (/ipad/i.test(userAgent)) {
    //   document.documentElement.classList.add('page--ipad');
    //   return "iPad";
    // }

    // if (/ipod/i.test(userAgent)) {
    //   document.documentElement.classList.add('page--ipod');
    //   return "iPod";
    // }

    // if (/iphone/i.test(userAgent)) {
    //   document.documentElement.classList.add('page--iphone');
    //   return "iPhone";
    // }
