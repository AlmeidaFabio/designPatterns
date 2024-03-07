//é usado para interpretar uma linguagem ou expressão específica. 
//envolve a implementação de uma interface de expressão para interpretar um contexto específico.

// Contexto contendo variáveis e valores
class Context {
    constructor() {
        this.variables = {};
    }

    setVariable(name, value) {
        this.variables[name] = value;
    }

    getVariable(name) {
        return this.variables[name];
    }
}

// Interface para as expressões
class Expression {
    interpret(context) {
        throw new Error("Método interpret() não implementado");
    }
}

// Terminal expression para representar uma variável
class VariableExpression extends Expression {
    constructor(name) {
        super();
        this.name = name;
    }

    interpret(context) {
        return context.getVariable(this.name);
    }
}

// Terminal expression para representar um número
class NumberExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }

    interpret(context) {
        return this.value;
    }
}

// Non-terminal expression para representar uma operação binária
class BinaryOperationExpression extends Expression {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }
}

// Concrete expressions para operações matemáticas
class AddExpression extends BinaryOperationExpression {
    interpret(context) {
        return this.left.interpret(context) + this.right.interpret(context);
    }
}

class SubtractExpression extends BinaryOperationExpression {
    interpret(context) {
        return this.left.interpret(context) - this.right.interpret(context);
    }
}

class MultiplyExpression extends BinaryOperationExpression {
    interpret(context) {
        return this.left.interpret(context) * this.right.interpret(context);
    }
}

class DivideExpression extends BinaryOperationExpression {
    interpret(context) {
        return this.left.interpret(context) / this.right.interpret(context);
    }
}

// Testando o padrão Interpreter

// Criando um contexto com algumas variáveis
const context = new Context();
context.setVariable("x", 10);
context.setVariable("y", 5);

// Criando uma expressão matemática
const expression = new AddExpression(
    new VariableExpression("x"),
    new MultiplyExpression(
        new NumberExpression(2),
        new VariableExpression("y")
    )
);

// Interpretando a expressão e exibindo o resultado
const result = expression.interpret(context);
console.log("Resultado da expressão:", result);


// Neste exemplo, temos classes que representam diferentes tipos de expressões matemáticas, como VariableExpression para variáveis, NumberExpression para números e classes para operações matemáticas como adição, subtração, multiplicação e divisão.

// O contexto (Context) mantém as variáveis e seus valores. Quando uma expressão é interpretada, ela acessa o contexto para obter os valores das variáveis necessárias.

// Ao criar uma expressão matemática e interpretá-la usando um contexto específico, podemos calcular o resultado da expressão. Isso ilustra o padrão Interpreter em ação, onde uma linguagem ou expressão é interpretada por meio de uma série de objetos que representam os elementos da linguagem e suas interações.
