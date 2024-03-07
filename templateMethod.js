//é usado para definir o esqueleto de um algoritmo em uma superclasse, permitindo que as subclasses redefinam partes desse algoritmo sem alterar sua estrutura geral. 

// Abstract Class: Classe que define o Template Method
class ProductionProcess {
    constructor() {}

    // Template Method
    manufacture() {
        this.prepareMaterials();
        this.assembleProduct();
        this.testProduct();
        this.packageProduct();
    }

    // Métodos abstratos que devem ser implementados pelas subclasses
    prepareMaterials() {
        throw new Error("Método prepareMaterials() não implementado");
    }

    assembleProduct() {
        throw new Error("Método assembleProduct() não implementado");
    }

    testProduct() {
        throw new Error("Método testProduct() não implementado");
    }

    packageProduct() {
        throw new Error("Método packageProduct() não implementado");
    }
}

// Concrete Classes: Implementações específicas do Template Method

class ToyProductionProcess extends ProductionProcess {
    prepareMaterials() {
        console.log("Preparando plástico e peças metálicas para produção de brinquedos.");
    }

    assembleProduct() {
        console.log("Montando brinquedos.");
    }

    testProduct() {
        console.log("Testando brinquedos para garantir qualidade.");
    }

    packageProduct() {
        console.log("Embalando brinquedos para envio.");
    }
}

class FurnitureProductionProcess extends ProductionProcess {
    prepareMaterials() {
        console.log("Preparando madeira e tecidos para produção de móveis.");
    }

    assembleProduct() {
        console.log("Montando móveis.");
    }

    testProduct() {
        console.log("Inspeção visual para garantir acabamento adequado.");
    }

    packageProduct() {
        console.log("Embalando móveis para entrega.");
    }
}

// Testando o padrão Template Method

// Processo de produção de brinquedos
console.log("Processo de produção de brinquedos:");
const toyProduction = new ToyProductionProcess();
toyProduction.manufacture();

console.log();

// Processo de produção de móveis
console.log("Processo de produção de móveis:");
const furnitureProduction = new FurnitureProductionProcess();
furnitureProduction.manufacture();


// Neste exemplo, a classe ProductionProcess define o Template Method manufacture(), que encapsula o processo geral de fabricação de um produto. Os métodos prepareMaterials(), assembleProduct(), testProduct() e packageProduct() são métodos abstratos que devem ser implementados pelas subclasses.

// As classes ToyProductionProcess e FurnitureProductionProcess são implementações específicas desse Template Method. Cada uma delas fornece implementações concretas para os métodos abstratos de acordo com o tipo específico de produto que está sendo fabricado.

// Ao criar instâncias das classes de processo de produção e chamar o método manufacture(), o processo de produção é executado conforme definido pelo Template Method, com etapas específicas sendo implementadas pelas subclasses conforme necessário. Isso demonstra como o padrão Template Method permite definir um algoritmo genérico com partes específicas sendo implementadas pelas subclasses.