const noBtn = document.getElementById("noBtn");
const popup = document.querySelector(".popup");

popup.addEventListener("mousemove", (e) => {

    const btnRect = noBtn.getBoundingClientRect();

    const buttonX = btnRect.left + btnRect.width / 2;
    const buttonY = btnRect.top + btnRect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distance = Math.hypot(mouseX - buttonX, mouseY - buttonY);

    if (distance < 120) {

        let dx = buttonX - mouseX;
        let dy = buttonY - mouseY;

        let length = Math.hypot(dx, dy);
        dx /= length;
        dy /= length;

        const speed = 80;

        let newLeft = noBtn.offsetLeft + dx * speed;
        let newTop = noBtn.offsetTop + dy * speed;

        newLeft = Math.max(0, Math.min(popup.clientWidth - btnRect.width, newLeft));
        newTop = Math.max(0, Math.min(popup.clientHeight - btnRect.height, newTop));

        noBtn.style.left = newLeft + "px";
        noBtn.style.top = newTop + "px";
    }
});
