let gearPageNav;

window.addEventListener('load', () => {
    gearPageNav = document.querySelector("#gearPageNav");

    window.addEventListener('message', (e) => {
        if (e.data.includes("gear.php"))
            gearPageNav.classList.add("hiddenNav");
    });

    let afterS = document.URL.split('?')[1].substring(2); // Trim off the "g="

    window.parent.postMessage('!700px', '*');
});