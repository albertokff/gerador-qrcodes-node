import chalk from "chalk";

const promptQrcode = [
    {
        name: "link",
        description: chalk.green("Digite o link para gerar o QR code:"),
    },
    {
        name: "type",
        description: chalk.green("Tipo de QR code: (1) Normal (2) Terminal:"),
        pattern: /^(1|2)$/,
        message: chalk.red("Por favor, digite 1 ou 2."),
        required: true        
    }
];

export default promptQrcode;