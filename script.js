document.addEventListener("DOMContentLoaded", function () {
    const field = document.getElementById("field");

    function createPoppy(x, y) {
        const poppy = document.createElement("div");
        poppy.className = "poppy";
        poppy.style.left = x + "px";
        poppy.style.top = y + "px";

        field.appendChild(poppy);

        anime({
            targets: poppy,
            translateX: anime.random(-20, 20),
            translateY: anime.random(-20, 20),
            scale: anime.random(1, 1.5),
            rotate: anime.random(-45, 45),
            easing: 'easeInOutQuad',
            duration: 500
        });

        poppy.addEventListener("click", function () {
            anime({
                targets: poppy,
                scale: 0,
                opacity: 0,
                easing: 'easeOutQuad',
                duration: 500,
                complete: function (anim) {
                    field.removeChild(anim.animatables[0].target);
                }
            });
        });
    }

    field.addEventListener("mousemove", function (event) {
        createPoppy(event.clientX, event.clientY);
    });
});
