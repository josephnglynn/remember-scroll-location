const url = window.url;
const data = window.localStorage.getItem(url);





if (data != null) {
    const parsed = JSON.parse(window.localStorage.getItem(url));
    window.scrollTo({
        top: parseInt(parsed["top"]),
        left: parseInt(parsed["left"]),
        behavior: 'smooth'
    });
}



window.onscroll = () => {
    const value = {
        "top": window.scrollY,
        "left": window.scrollX
    };
    window.localStorage.setItem(url, JSON.stringify(value));
}