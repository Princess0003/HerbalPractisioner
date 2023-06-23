// https://youtu.be/ZFQkb26UD1Y

var navLink = document.getElementById("menu");
    navLink.style.maxHeight = "0px";
    // console.log(screen.width);
    // if(screen.width <= 768) {
    //     menu.style.display = 'none !important';
    //     document.querySelectorAll('.navlink ul li').forEach(e => e.style.display = 'none !important');
    // }

    function toggleMenu(){
        if(navLink.style.maxHeight == "0px"){

            navLink.style.maxHeight = "70vh";
            navLink.style.display = 'block';
            document.querySelectorAll('.navlink ul li').forEach(e => e.style.display = 'block');
        }
        else{

            navLink.style.maxHeight = "0px";
            navLink.style.display = 'none !important';
            document.querySelectorAll('.navlink ul li').forEach(e => {
                e.style.display = 'none';
                e.classList.remove('active');
        });
        }

        console.log(navLink.style.display,navLink.style.maxHeight,document.querySelector('.navlink ul li'));
    }