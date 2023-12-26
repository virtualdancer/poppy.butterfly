document.addEventListener("DOMContentLoaded", function () {
    const field = document.getElementById("field");

    function createPoppy(x, y) {
        const poppy = document.createElement("div");
        poppy.className = "poppy";
        poppy.style.left = x + "px";
        poppy.style.top = y + "px";

        const heart = document.createElement("div");
        heart.className = "heart";

        const butterfly = document.createElement("div");
        butterfly.className = "butterfly";

        poppy.appendChild(heart);
        poppy.appendChild(butterfly);
        field.appendChild(poppy);

        poppy.addEventListener("mouseover", () => {
            const moveX = Math.random() * 20 - 10;
            const moveY = Math.random() * 20 - 10;
            poppy.style.transform = `translate(${moveX}px, ${moveY}px)`;
            heart.style.transform = "scale(1.5) rotate(45deg)";
            butterfly.style.transform = "scale(1.5) rotate(45deg)";
        });

        poppy.addEventListener("mouseout", () => {
            poppy.style.transform = "translate(0, 0)";
            heart.style.transform = "rotate(45deg)";
            butterfly.style.transform = "rotate(45deg)";
        });
    }

    field.addEventListener("mousemove", function (event) {
        createPoppy(event.clientX, event.clientY);
    });
});
