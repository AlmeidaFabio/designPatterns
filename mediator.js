//é usado para reduzir a complexidade de comunicação entre vários objetos ou classes.
// fornece uma classe mediadora que normalmente lida com todas as comunicações entre diferentes classes e suporta fácil manutenção de código por meio de baixo acoplamento.

// Mediator: Interface para o mediador
class ChatMediator {
    sendMessage(sender, message) {
        throw new Error("Método sendMessage() não implementado");
    }
}

// Concrete Mediator: Implementação específica do mediador
class ConcreteChatMediator extends ChatMediator {
    constructor() {
        super();
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    sendMessage(sender, message) {
        this.users.forEach(user => {
            if (user !== sender) {
                user.receiveMessage(message);
            }
        });
    }
}

// Colleague: Interface para os colegas
class User {
    constructor(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }

    sendMessage(message) {
        console.log(`${this.name} enviou mensagem: ${message}`);
        this.mediator.sendMessage(this, message);
    }

    receiveMessage(message) {
        console.log(`${this.name} recebeu mensagem: ${message}`);
    }
}

// Testando o padrão Mediator

// Criando o mediador
const mediator = new ConcreteChatMediator();

// Criando os usuários
const user1 = new User("Alice", mediator);
const user2 = new User("Bob", mediator);
const user3 = new User("Charlie", mediator);

// Adicionando os usuários ao mediador
mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);

// Enviando mensagens entre os usuários
user1.sendMessage("Olá, pessoal!");
user2.sendMessage("Oi, Alice!");
user3.sendMessage("E aí, pessoal?");
