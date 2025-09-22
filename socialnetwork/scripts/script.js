const content = document.getElementById("content");
const links = document.querySelectorAll("[data-link]");

links.forEach(link => {
    link.addEventListener("click", async (e) => {
        e.preventDefault();
        const url = link.getAttribute("href");

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Нет, иди нахуй");
            const html = await response.text();
            content.innerHTML = html;
        } catch (err) {
            content.innerHTML = `<p style="color:red;">Страницы не будет, пиздуй отсюда</p>`;
            console.error(err);
        }

    });
});