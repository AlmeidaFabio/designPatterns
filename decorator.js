//permite que o usuário adicione novas funcionalidades a um objeto existente sem alterar a sua estrutura.
//cria uma classe decoradora que agrupa a classe original e fornece funcionalidade adicional, mantendo intácta a assinatura dos métodos de classe.

// Interface para o componente de texto
class TextComponent {
    getText() {
        throw new Error("Método getText() não implementado");
    }
}

// Implementação básica do componente de texto
class BasicText extends TextComponent {
    constructor(text) {
        super();
        this.text = text;
    }

    getText() {
        return this.text;
    }
}

// Decorator base para adicionar estilos ao texto
class TextDecorator extends TextComponent {
    constructor(textComponent) {
        super();
        this.textComponent = textComponent;
    }

    getText() {
        return this.textComponent.getText();
    }
}

// Implementação de um decorator para negrito
class BoldDecorator extends TextDecorator {
    getText() {
        return `<b>${super.getText()}</b>`;
    }
}

// Implementação de um decorator para itálico
class ItalicDecorator extends TextDecorator {
    getText() {
        return `<i>${super.getText()}</i>`;
    }
}

// Implementação de um decorator para sublinhado
class UnderlineDecorator extends TextDecorator {
    getText() {
        return `<u>${super.getText()}</u>`;
    }
}

// Criando um texto básico
const basicText = new BasicText("Olá, mundo!");

// Adicionando estilos ao texto
const boldText = new BoldDecorator(basicText);
const italicText = new ItalicDecorator(basicText);
const boldItalicText = new BoldDecorator(new ItalicDecorator(basicText));
const underlinedText = new UnderlineDecorator(basicText);

// Exibindo os textos com diferentes estilos
console.log("Texto básico:", basicText.getText());
console.log("Texto em negrito:", boldText.getText());
console.log("Texto em itálico:", italicText.getText());
console.log("Texto em negrito e itálico:", boldItalicText.getText());
console.log("Texto sublinhado:", underlinedText.getText());


//Neste exemplo, temos a classe TextComponent que define a interface comum para os componentes de texto. A classe BasicText é uma implementação básica dessa interface que simplesmente retorna o texto original.

//Os decoradores, como BoldDecorator, ItalicDecorator e UnderlineDecorator, estendem a classe TextDecorator e adicionam estilos específicos ao texto. Cada decorador envolve um componente de texto existente e modifica seu comportamento ao chamar o método getText().

//Ao criar e combinar diferentes decoradores, podemos adicionar estilos diferentes ao texto base, de forma dinâmica e flexível.