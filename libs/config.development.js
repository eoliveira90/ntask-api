import logger from "./logger.js";

module.exports = {
    database: "ntask", // Define o nome da base de dados
    username: "", // Informa o nome de usuário de acesso
    password: "", // Informa a senha do usuário
    params: {
        dialect: "sqlite", // Informa qual é o banco de dados a ser usando
        storage: "ntask.sqlite", // É um atributo específico para o SQLite3, sendo que nele é informado o diretório que será gravado o arquivo da base de dados
        logging: (sql) => {
            logger.info(`[${new Date()}] ${sql}`);
        },
        define: {
            underscored: true // Padroniza o nome dos campos da tabela em minúsculo usando 'underscore' no lugar dos espaços em branco
        }
    },
    jwtSecret: "Nta$K-AP1",
    jwtSession: {session: false}
};
