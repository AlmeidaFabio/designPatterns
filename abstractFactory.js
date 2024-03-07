//trabalha em torno de uma super-fábrica que cria outras fábricas
//uma interface é responsável por criar uma fábrica de objetos relacionados sem especificar explicitamente suas classes. Cada fábrica gerada pode fornecer objetos conforme o padrão de fábrica.
 
// Interface para o produto A
class Engine {
    description() {
        throw new Error("Método description() não implementado");
    }
}

// Implementação do produto A1
class PetrolEngine extends Engine {
    description() {
        return "Motor a gasolina";
    }
}

// Implementação do produto A2
class DieselEngine extends Engine {
    description() {
        return "Motor a diesel";
    }
}

// Interface para o produto B
class Tire {
    description() {
        throw new Error("Método description() não implementado");
    }
}

// Implementação do produto B1
class SummerTire extends Tire {
    description() {
        return "Pneu de verão";
    }
}

// Implementação do produto B2
class WinterTire extends Tire {
    description() {
        return "Pneu de inverno";
    }
}

// Interface para a fábrica abstrata
class VehicleFactory {
    createEngine() {
        throw new Error("Método createEngine() não implementado");
    }

    createTire() {
        throw new Error("Método createTire() não implementado");
    }
}

// Implementação da fábrica concreta para carros
class CarFactory extends VehicleFactory {
    createEngine() {
        return new PetrolEngine();
    }

    createTire() {
        return new SummerTire();
    }
}

// Implementação da fábrica concreta para caminhões
class TruckFactory extends VehicleFactory {
    createEngine() {
        return new DieselEngine();
    }

    createTire() {
        return new WinterTire();
    }
}

// Usando a fábrica de carros
const carFactory = new CarFactory();
const carEngine = carFactory.createEngine();
const carTire = carFactory.createTire();

console.log(carEngine.description()); // Saída: Motor a gasolina
console.log(carTire.description());   // Saída: Pneu de verão

// Usando a fábrica de caminhões
const truckFactory = new TruckFactory();
const truckEngine = truckFactory.createEngine();
const truckTire = truckFactory.createTire();

console.log(truckEngine.description()); // Saída: Motor a diesel
console.log(truckTire.description());   // Saída: Pneu de inverno 

//Neste exemplo, criamos as classes Engine e Tire que representam os produtos A e B, respectivamente. Em seguida, implementamos duas variantes de cada produto: PetrolEngine, DieselEngine, SummerTire, e WinterTire. Depois, definimos a classe VehicleFactory como a fábrica abstrata e implementamos as classes CarFactory e TruckFactory como fábricas concretas. Cada fábrica concreta cria uma família específica de produtos. Por fim, utilizamos as fábricas para criar motores e pneus de carros e caminhões.