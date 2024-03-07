// é usado para capturar e armazenar o estado interno de um objeto de forma que possa ser restaurado posteriormente sem violar o encapsulamento. 

// Memento: Classe que representa o estado capturado
class EditorMemento {
    constructor(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }
}

// Originator: Classe que contém o estado a ser salvo ou restaurado
class Editor {
    constructor() {
        this.content = "";
    }

    type(text) {
        this.content += text;
    }

    getContent() {
        return this.content;
    }

    save() {
        return new EditorMemento(this.content);
    }

    restore(memento) {
        this.content = memento.getContent();
    }
}

// Caretaker: Classe que mantém a lista de mementos e gerencia o estado do editor
class History {
    constructor() {
        this.mementos = [];
        this.currentIndex = -1;
    }

    push(memento) {
        // Limpa a lista de mementos que foram desfeitos
        this.mementos.splice(this.currentIndex + 1);
        this.mementos.push(memento);
        this.currentIndex++;
    }

    undo() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.mementos[this.currentIndex];
        }
        return null;
    }

    redo() {
        if (this.currentIndex < this.mementos.length - 1) {
            this.currentIndex++;
            return this.mementos[this.currentIndex];
        }
        return null;
    }
}

// Testando o padrão Memento

// Criando o editor e o histórico
const editor = new Editor();
const history = new History();

// Digitando e salvando alguns textos
editor.type("Olá, ");
history.push(editor.save());
editor.type("mundo!");
history.push(editor.save());
editor.type(" Isso é um exemplo de Memento.");
history.push(editor.save());

// Imprimindo o conteúdo atual do editor
console.log("Conteúdo atual:", editor.getContent());

// Desfazendo uma ação
editor.restore(history.undo());
console.log("Conteúdo após desfazer:", editor.getContent());

// Refazendo uma ação
editor.restore(history.redo());
console.log("Conteúdo após refazer:", editor.getContent());


// Neste exemplo, temos a classe Editor que representa o originador, ou seja, o objeto cujo estado queremos salvar e restaurar. Ele mantém o conteúdo atual do editor e fornece métodos para digitar texto, obter o conteúdo e salvar/restaurar o estado usando mementos.

// A classe EditorMemento representa o memento, ou seja, o estado capturado do editor. Ela contém uma cópia do conteúdo do editor no momento em que foi salvo.

// A classe History é o cuidador, ou seja, a classe que mantém a lista de mementos e gerencia o estado do editor. Ela fornece métodos para desfazer e refazer ações, usando os mementos armazenados na lista.

// Ao criar o editor, digitar texto e salvar o estado em diferentes pontos, podemos desfazer e refazer ações para restaurar o estado anterior do editor. Isso demonstra o padrão Memento em ação, permitindo que o estado de um objeto seja capturado e restaurado sem violar o encapsulamento.