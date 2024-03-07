// é usado para definir uma família de algoritmos, encapsulá-los e torná-los intercambiáveis. 

// Context: Classe que contém a estratégia atual
class PaymentContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executePayment(amount) {
        this.strategy.pay(amount);
    }
}

// Strategy: Interface para as estratégias de pagamento
class PaymentStrategy {
    pay(amount) {
        throw new Error("Método pay() não implementado");
    }
}

// Concrete Strategies: Implementações específicas das estratégias de pagamento

class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Pagamento de $${amount} realizado com cartão de crédito.`);
    }
}

class PayPalPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Pagamento de $${amount} realizado com PayPal.`);
    }
}

class BankTransferPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Pagamento de $${amount} realizado por transferência bancária.`);
    }
}

// Testando o padrão Strategy

// Criando o contexto de pagamento
const paymentContext = new PaymentContext(new CreditCardPayment());

// Realizando pagamentos usando diferentes estratégias
paymentContext.executePayment(100);
paymentContext.setStrategy(new PayPalPayment());
paymentContext.executePayment(50);
paymentContext.setStrategy(new BankTransferPayment());
paymentContext.executePayment(200);


// Neste exemplo, temos a classe PaymentContext, que representa o contexto onde a estratégia de pagamento atual é armazenada. Ela contém um método executePayment() que executa o pagamento usando a estratégia atual.

// A classe PaymentStrategy define a interface comum para as estratégias de pagamento. As classes CreditCardPayment, PayPalPayment e BankTransferPayment são implementações específicas dessas estratégias, cada uma definindo um algoritmo de pagamento diferente.

// Ao criar o contexto de pagamento e executar diferentes pagamentos usando diferentes estratégias, o pagamento é processado de acordo com a estratégia atualmente definida. Isso demonstra o padrão Strategy em ação, onde diferentes algoritmos podem ser intercambiados dinamicamente sem afetar o cliente que os utiliza.