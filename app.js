const number = document.querySelector("#number")
const advice = document.querySelector("#advice")
const change = document.querySelector("#change")

async function jody() {
    const reponse = await fetch("https://api.adviceslip.com/advice", { method: "GET" });
    const data = await reponse.json();

    console.log(data)

    number.textContent = ` ADVICE #${data.slip.id}`
    advice.textContent = `" ${data.slip.advice} "`
}

change.addEventListener("click", () => {
    jody()
})

jody()