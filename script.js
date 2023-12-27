document.querySelector("button").addEventListener("click", () => {
    const color_code = `rgba(${Math.round(Math.random() * 255)},${Math.round(
        Math.random() * 255
    )},${Math.round(Math.random() * 255)},${Math.random().toFixed(1)})`;
    document.querySelector("body").style.backgroundColor = color_code;
    document.querySelector("span").innerText = color_code;
});
