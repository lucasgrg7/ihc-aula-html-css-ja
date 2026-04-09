function toggleTheme() {

    const body = document.body;

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
    }

function toggleTheme() {

    const body = document.body;

    body.classList.toggle("dark");
    body.classList.toggle("light");
}
}