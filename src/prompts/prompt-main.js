import chalk from "chalk";

const mainPrompt = [
    {
        name: 'select',
        description: chalk.yellow.bold('Escolha a ferramenta (1) - QRCODE ou (2) - Password'),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Escolha uma opção válida'),
        required: true
    }
]

export default mainPrompt;