export const getScrollBarWidth = () => {

    let scrollDiv;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    console.log(scrollBarWidth);

    if (scrollBarWidth || document.documentElement.clientHeight >= document.documentElement.offsetHeight) { //scrollBarWidth не равно 0, и высота видимой части страницы clientHeight больше или равна высоте всей страницы offsetHeight
        document.documentElement.style.setProperty('--scrollbar-width', `${scrollBarWidth}px`);
        // return width;
    }
    if (!scrollDiv) {
		scrollDiv = document.createElement('div');
		scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
		document.body.appendChild(scrollDiv);
	}
}