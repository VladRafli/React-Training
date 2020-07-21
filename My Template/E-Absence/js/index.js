document.addEventListener("scroll", () => {
    console.log('Current scroll from the top: ' + window.pageYOffset);
});

var el = document.getElementById('test');
el.classList.remove('test');