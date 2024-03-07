// é usado para separar um algoritmo de uma estrutura de dados em que opera. 

// Element: Interface para os elementos da árvore
class Element {
    accept(visitor) {
        throw new Error("Método accept() não implementado");
    }
}

// Concrete Elements: Implementações específicas dos elementos da árvore

class HtmlElement extends Element {
    constructor(tagName) {
        super();
        this.tagName = tagName;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }

    accept(visitor) {
        visitor.visitHtmlElement(this);
    }
}

class TextNode extends Element {
    constructor(text) {
        super();
        this.text = text;
    }

    accept(visitor) {
        visitor.visitTextNode(this);
    }
}

// Visitor: Interface para o visitor
class Visitor {
    visitHtmlElement(element) {
        throw new Error("Método visitHtmlElement() não implementado");
    }

    visitTextNode(element) {
        throw new Error("Método visitTextNode() não implementado");
    }
}

// Concrete Visitor: Implementação específica do visitor para calcular o número de nós
class NodeCountVisitor extends Visitor {
    constructor() {
        super();
        this.nodeCount = 0;
    }

    visitHtmlElement(element) {
        this.nodeCount++;
        element.children.forEach(child => {
            child.accept(this);
        });
    }

    visitTextNode(element) {
        this.nodeCount++;
    }

    getNodeCount() {
        return this.nodeCount;
    }
}

// Testando o padrão Visitor

// Criando a estrutura da árvore HTML
const html = new HtmlElement("html");
const head = new HtmlElement("head");
const title = new HtmlElement("title");
const body = new HtmlElement("body");
const h1 = new HtmlElement("h1");
const textNode = new TextNode("Olá, mundo!");

html.addChild(head);
html.addChild(body);
head.addChild(title);
body.addChild(h1);
body.addChild(textNode);

// Criando um visitor para contar o número de nós na árvore
const nodeCountVisitor = new NodeCountVisitor();

// Visitando a árvore com o visitor
html.accept(nodeCountVisitor);

// Obtendo o número total de nós
console.log("Número total de nós na árvore:", nodeCountVisitor.getNodeCount());


// Neste exemplo, a classe Element define a interface comum para os elementos da árvore, enquanto as classes HtmlElement e TextNode são implementações específicas desses elementos.

// A classe Visitor define a interface comum para o visitor, enquanto a classe NodeCountVisitor é uma implementação específica desse visitor que calcula o número de nós na árvore.

// Ao criar a estrutura da árvore HTML e visitá-la com o visitor NodeCountVisitor, o número total de nós na árvore é calculado e exibido. Isso demonstra como o padrão Visitor permite separar o algoritmo de cálculo do número de nós da estrutura da árvore em que opera.