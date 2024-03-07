// é usado para percorrer elementos de uma coleção sem expor sua representação subjacente.

// Classe para representar um iterator
class NumberIterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.collection.length;
    }

    next() {
        return this.collection[this.index++];
    }
}

// Classe que contém a coleção
class NumberCollection {
    constructor() {
        this.numbers = [];
    }

    addNumber(number) {
        this.numbers.push(number);
    }

    createIterator() {
        return new NumberIterator(this.numbers);
    }
}

// Testando o padrão Iterator

// Criando uma coleção de números
const collection = new NumberCollection();
collection.addNumber(1);
collection.addNumber(2);
collection.addNumber(3);
collection.addNumber(4);
collection.addNumber(5);

// Criando um iterator para a coleção
const iterator = collection.createIterator();

// Percorrendo e exibindo os números usando o iterator
console.log("Números da coleção:");
while (iterator.hasNext()) {
    console.log(iterator.next());
}


// Neste exemplo, temos a classe NumberIterator, que implementa a lógica para percorrer os elementos da coleção de números. Ela mantém uma referência para a coleção e um índice que indica a posição atual durante a iteração.

// A classe NumberCollection contém a coleção de números e fornece um método createIterator() para criar um iterator para essa coleção.

// Ao criar a coleção de números e um iterator correspondente, podemos percorrer os números da coleção usando o iterator, sem precisar conhecer os detalhes da implementação interna da coleção. Isso ilustra o padrão Iterator, onde a iteração é encapsulada em um objeto separado, fornecendo uma interface simples e consistente para percorrer elementos de uma coleção.