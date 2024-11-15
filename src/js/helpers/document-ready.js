export const ready = function (fn) {
    if (document.readyState === "complete" ||
        document.readyState !== "loading" &&
        !document.attachEvent){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
};
