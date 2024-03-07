//cria uma cadeia de objetos receptores para uma solicitação
//desaclopa o remetente e o destinátario
//cada receptor contém referência a outro receptor
//se um objeto não puder tratar a solicitação, ele passará para o próximo receptor e assim por diante.

// Classe base para os manipuladores de desconto
class DiscountHandler {
    constructor(successor = null) {
        this.successor = successor;
    }

    handle(request) {
        if (this.canHandle(request)) {
            return this.applyDiscount(request);
        } else if (this.successor) {
            return this.successor.handle(request);
        } else {
            console.log("Nenhum desconto aplicável.");
            return 0;
        }
    }

    canHandle(request) {
        throw new Error("Método canHandle() não implementado");
    }

    applyDiscount(request) {
        throw new Error("Método applyDiscount() não implementado");
    }
}

// Manipulador de desconto para compras de valor alto
class HighValueDiscountHandler extends DiscountHandler {
    canHandle(request) {
        return request.total >= 100;
    }

    applyDiscount(request) {
        console.log("Aplicando desconto de 10% para compras de valor alto.");
        return request.total * 0.1;
    }
}

// Manipulador de desconto para compras de valor médio
class MediumValueDiscountHandler extends DiscountHandler {
    canHandle(request) {
        return request.total >= 50;
    }

    applyDiscount(request) {
        console.log("Aplicando desconto de 5% para compras de valor médio.");
        return request.total * 0.05;
    }
}

// Manipulador de desconto para compras de valor baixo
class LowValueDiscountHandler extends DiscountHandler {
    canHandle(request) {
        return request.total > 0;
    }

    applyDiscount(request) {
        console.log("Aplicando desconto de 2% para compras de valor baixo.");
        return request.total * 0.02;
    }
}

// Classe para representar uma solicitação de desconto
class DiscountRequest {
    constructor(total) {
        this.total = total;
    }
}

// Testando o padrão Chain of Responsibility

// Criando os manipuladores de desconto
const lowValueHandler = new LowValueDiscountHandler();
const mediumValueHandler = new MediumValueDiscountHandler(lowValueHandler);
const highValueHandler = new HighValueDiscountHandler(mediumValueHandler);

// Criando uma solicitação de desconto
const request1 = new DiscountRequest(30);
const request2 = new DiscountRequest(70);
const request3 = new DiscountRequest(120);

// Solicitando desconto para cada compra
const discount1 = highValueHandler.handle(request1);
console.log(`Desconto aplicado: $${discount1}`);

const discount2 = highValueHandler.handle(request2);
console.log(`Desconto aplicado: $${discount2}`);

const discount3 = highValueHandler.handle(request3);
console.log(`Desconto aplicado: $${discount3}`);


//Neste exemplo, temos a classe base DiscountHandler, que define a estrutura da cadeia de manipuladores de desconto. Cada manipulador de desconto estende essa classe e implementa os métodos canHandle() e applyDiscount().

// Cada manipulador verifica se pode lidar com a solicitação (se o total da compra é suficiente para aplicar um desconto) e, se não puder, passa a solicitação para o próximo manipulador na cadeia.

// Ao criar uma solicitação de desconto e passá-la para o manipulador de desconto de maior valor (HighValueDiscountHandler), ele percorrerá a cadeia de manipuladores e tentará aplicar o desconto apropriado com base no valor total da compra.

// Isso permite que os manipuladores de desconto sejam adicionados ou removidos dinamicamente e garante que cada solicitação de desconto seja tratada de forma adequada, seguindo o princípio do Chain of Responsibility.