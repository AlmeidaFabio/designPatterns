//é usado principalmente para reduzir o número de objetos criados, diminuir o espaço ocupado na memória e aumentar o desempenho.
//tenta reutilizar objetos do tipo semelhantes já existentes, armazenando-os, e cria um novo objeto quando nenhum objeto correspondente é encontrado.

// Classe Flyweight para representar letras compartilhadas
class Letter {
    constructor(character) {
        this.character = character;
    }

    display() {
        console.log(this.character);
    }
}

// Flyweight Factory para criar e gerenciar instâncias de letras
class LetterFactory {
    constructor() {
        this.letters = {};
    }

    getLetter(character) {
        if (!this.letters[character]) {
            this.letters[character] = new Letter(character);
        }
        return this.letters[character];
    }
}

// Classe para representar o editor de texto
class TextEditor {
    constructor() {
        this.letterFactory = new LetterFactory();
        this.characters = [];
    }

    addLetter(character) {
        const letter = this.letterFactory.getLetter(character);
        this.characters.push(letter);
    }

    displayText() {
        this.characters.forEach(letter => {
            letter.display();
        });
    }
}

// Testando o padrão Flyweight no editor de texto

const editor = new TextEditor();

// Adicionando letras ao texto
editor.addLetter("H");
editor.addLetter("e");
editor.addLetter("l");
editor.addLetter("l");
editor.addLetter("o");
editor.addLetter(" ");
editor.addLetter("W");
editor.addLetter("o");
editor.addLetter("r");
editor.addLetter("l");
editor.addLetter("d");

// Exibindo o texto
editor.displayText();


//Neste exemplo, temos a classe Letter que representa uma letra do alfabeto. A classe LetterFactory é responsável por criar e gerenciar instâncias de letras compartilhadas.

//Quando queremos adicionar uma letra ao texto no editor, utilizamos a LetterFactory para obter a instância da letra correspondente. Se a letra já existe, a LetterFactory retorna a instância existente; caso contrário, cria uma nova instância.

//Isso garante que apenas uma instância de cada letra seja criada e compartilhada entre todas as ocorrências dessa letra no texto. Como resultado, o uso de memória é minimizado, pois estamos reutilizando instâncias de letras em vez de criar uma nova instância para cada ocorrência da mesma letra.