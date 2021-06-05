/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const hipPack = {
    name: "Hip Pack",
    pocketNum: 2,
    color: "Pink",
}

const addPack = (newPack) => {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
    <h1>${newPack.name}</h1>
    <ul>
        <li><a>Number of Pockets: ${newPack.pocketNum}</a></li>
        <li><a>Colour: ${newPack.color}</a></li>
    </ul>
    `

    return newArticle;
}

const main = document.querySelector("main");
main.append(addPack(hipPack));