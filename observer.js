// é usado para definir uma dependência um-para-muitos entre objetos, de modo que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.

// Subject: Interface para o objeto observável
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(message) {
        this.observers.forEach(observer => {
            observer.notify(message);
        });
    }
}

// Concrete Subject: Implementação específica do objeto observável
class NotificationService extends Subject {
    sendNotification(message) {
        console.log("Notificação enviada:", message);
        this.notifyObservers(message);
    }
}

// Observer: Interface para os observadores
class Observer {
    notify(message) {
        throw new Error("Método notify() não implementado");
    }
}

// Concrete Observer: Implementação específica do observador
class UserNotificationObserver extends Observer {
    constructor(name) {
        super();
        this.name = name;
    }

    notify(message) {
        console.log(`${this.name} recebeu notificação: ${message}`);
    }
}

// Testando o padrão Observer

// Criando o serviço de notificação
const notificationService = new NotificationService();

// Criando alguns usuários observadores
const user1 = new UserNotificationObserver("Alice");
const user2 = new UserNotificationObserver("Bob");
const user3 = new UserNotificationObserver("Charlie");

// Inscrevendo os usuários para receber notificações
notificationService.addObserver(user1);
notificationService.addObserver(user2);
notificationService.addObserver(user3);

// Enviando uma notificação
notificationService.sendNotification("Nova promoção!");

// Desinscrevendo um usuário
notificationService.removeObserver(user2);

// Enviando outra notificação
notificationService.sendNotification("Lançamento de produto!");


// Neste exemplo, temos a classe Subject, que define a interface comum para o objeto observável. A classe NotificationService é uma implementação específica desse objeto observável e representa o serviço de notificação que envia notificações para os usuários inscritos.

// A classe Observer define a interface comum para os observadores. A classe UserNotificationObserver é uma implementação específica do observador e representa os usuários que recebem as notificações.

// Ao criar o serviço de notificação, os usuários observadores e inscrevê-los para receber notificações, podemos enviar notificações usando o serviço de notificação. Quando uma nova notificação é enviada, todos os usuários inscritos são notificados automaticamente. Isso demonstra o padrão Observer em ação, onde os observadores são notificados automaticamente quando o estado do objeto observável muda.