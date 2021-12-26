function DisableScroll()
{
    document.body.style.overflow = 'hidden';
}

function EnableScroll()
{
    document.body.style.overflow = 'auto';
}

// Navbar Mobile Menu
var navbar;
var navbarItems;
var navbarBtn;

window.addEventListener('load', () => {
    navbar = document.querySelector(".nav");
    navbarItems = document.querySelector(".nav .items");
    navbarBtn = document.querySelector(".nav .btn");

    navbarBtn.addEventListener('click', () => {
        if (navbar.classList.contains("navOpen"))
            CloseNavbar();
        else
            OpenNavbar();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1000)
            CloseNavbar();
    });
});

function CloseNavbar()
{
    EnableScroll();
    navbar.classList.remove("navOpen");
}

function OpenNavbar()
{
    DisableScroll();
    navbar.classList.add("navOpen");
}

// Floating Panel
var floating;
var floatingClose;
var floatingCloseButton;
var floatingPanel;
var floatingPanelTitle;
var floatingPanelFrame;
var panelButtons;

window.addEventListener('load', () => {
    
    floating = document.querySelector(".floating");
    floatingClose = document.querySelector(".floating .floatingClose");
    floatingPanel = document.querySelector(".floating .panel");
    floatingPanelTitle = document.querySelector(".floating .panel .titlebar .title");
    floatingCloseButton = document.querySelector(".floating .panel .titlebar .close");
    floatingPanelFrame = document.querySelector(".floating .panel .contents");
    panelButtons = document.querySelectorAll("[data-action='panel']");

    floatingClose.addEventListener('click', ClosePanel);
    floatingCloseButton.addEventListener('click', ClosePanel);

    floatingPanelFrame.addEventListener('load', () => {
        floatingPanelTitle.innerHTML = floatingPanelFrame.contentDocument.title;
    });

    for (let btn of panelButtons)
    {
        btn.addEventListener('click', () => {
            ChangePanelSrc(btn.dataset.pageName);
            OpenPanel();
        });
    }
});

function OpenPanel()
{
    DisableScroll();
    floating.style.visibility = 'visible';
}

function ChangePanelSrc(newSrc)
{
    floatingPanelFrame.src = "menus/" + newSrc + ".html";
}

function ClosePanel()
{
    EnableScroll();
    floating.style.visibility = 'collapse';
}

// Parallax movement (e.g. guitar separator)
var backgroundParallax;

window.addEventListener('load', () => {
    
    backgroundParallax = document.querySelectorAll("[data-parallax]");

    window.addEventListener('scroll', () => {
        UpdateParallaxAll();
    });
    
    window.addEventListener('resize', () => {
        UpdateParallaxAll();
    });
    
    UpdateParallaxAll();
});

function UpdateParallaxAll()
{
    for (let i = 0; i < backgroundParallax.length; i++)
    {
        switch (backgroundParallax[i].dataset.parallax)
        {
            case "backgroundY":
                if (window.innerWidth < parseInt(backgroundParallax[i].dataset.parallaxChangeAt))
                    UpdateBackgroundParallaxX(backgroundParallax[i]);
                else
                    UpdateBackgroundParallaxY(backgroundParallax[i]);
                    
                break;
            case "backgroundX":
                if (window.innerWidth < parseInt(backgroundParallax[i].dataset.parallaxChangeAt))
                    UpdateBackgroundParallaxY(backgroundParallax[i]);
                else
                    UpdateBackgroundParallaxX(backgroundParallax[i]);

                break;
        }
        
    }
}

function UpdateBackgroundParallaxX(item)
{
    item.style.backgroundPosition = -window.scrollY / parseInt(item.dataset.parallaxSpeed) + " 0%";
}

function UpdateBackgroundParallaxY(item)
{
    item.style.backgroundPosition = "0% " + -window.scrollY / parseInt(item.dataset.parallaxSpeed);
}