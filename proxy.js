//uma classe representa a funcionalidade de outra classe.
//cria-se um objeto que possui o objeto original para fazer a interface de sua funcionalidade com o mundo exterior.

// Objeto real
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Depósito de $${amount} realizado. Novo saldo: $${this.balance}`);
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Saque de $${amount} realizado. Novo saldo: $${this.balance}`);
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    }

    getBalance() {
        return this.balance;
    }
}

// Proxy para controlar o acesso ao objeto BankAccount
class BankAccountProxy {
    constructor(initialBalance) {
        this.bankAccount = new BankAccount(initialBalance);
        this.minimumBalance = 100; // Saldo mínimo permitido
    }

    deposit(amount) {
        this.bankAccount.deposit(amount);
    }

    withdraw(amount) {
        if (this.bankAccount.getBalance() - amount >= this.minimumBalance) {
            this.bankAccount.withdraw(amount);
        } else {
            console.log("Saldo mínimo não atingido. Não é possível realizar o saque.");
        }
    }

    getBalance() {
        return this.bankAccount.getBalance();
    }
}

// Testando o proxy de conta bancária

const bankAccount = new BankAccountProxy(200); // Criando uma conta com saldo inicial de $200

// Tentando sacar uma quantia maior que o saldo disponível
bankAccount.withdraw(250); // Deve exibir uma mensagem de saldo mínimo não atingido

// Realizando um depósito e um saque válidos
bankAccount.deposit(150);
bankAccount.withdraw(100);


//Neste exemplo, temos a classe BankAccount, que representa um objeto real com métodos para depositar, sacar e obter o saldo da conta bancária. Em seguida, temos a classe BankAccountProxy, que atua como um proxy para controlar o acesso ao objeto BankAccount.

//O proxy BankAccountProxy adiciona a funcionalidade de verificar se o saldo mínimo é atingido antes de permitir um saque. Ele encapsula o objeto real BankAccount e intercepta chamadas para os métodos withdraw() para realizar essa verificação adicional.

//Ao usar o proxy, podemos adicionar funcionalidades extras (como validações de segurança, auditoria, etc.) sem modificar a classe original BankAccount. Isso mantém o código limpo e modular, seguindo o princípio de responsabilidade única.