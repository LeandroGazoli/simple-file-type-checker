# File Type Checker

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

O `File Type Checker` é uma simples função TypeScript que verifica se um determinado tipo de arquivo é permitido com base em uma lista de tipos permitidos. Esta função é útil em sistemas de upload de arquivos, onde é necessário restringir os tipos de arquivos que podem ser aceitos.

## Motivação

Quando construímos aplicativos da web que permitem aos usuários fazer upload de arquivos, é importante garantir que apenas certos tipos de arquivos sejam permitidos, para garantir a segurança e a integridade dos dados. No entanto, implementar essa verificação pode ser complicado. O `File Type Checker` foi criado para simplificar esse processo, fornecendo uma maneira fácil de verificar se um tipo de arquivo é permitido ou não.

## Como Usar

Você pode instalar o `File Type Checker` via npm:

```bash
npm install file-type-checker
```

```typescript
import isFileTypeAllowed from 'file-type-checker';

const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
const fileType = 'image/jpeg';

if (isFileTypeAllowed(fileType, allowedTypes)) {
  console.log('Tipo de arquivo permitido.');
} else {
  console.log('Tipo de arquivo não permitido.');
}
```

Neste exemplo, estamos verificando se o tipo de arquivo 'image/jpeg' é permitido com base na lista de tipos permitidos.

## Contribuindo

Contribuições são bem-vindas! Se você encontrou um problema, tem uma ideia para uma nova funcionalidade ou quer melhorar a documentação, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
