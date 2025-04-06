import permittedCharacters from "./utils/permitted-characters.js";

async function handle() {
    let characters = [];
    let password = "";
    const length = parseInt(process.env.PASSWORD_LENGTH) || 12;

    characters = await permittedCharacters();

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

export default handle;