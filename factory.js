//Cria-se objetos sem expor a lógica de criação ao cliente e refere-se ao objeto recém criado usando uma interface comum.

// Definindo a classe base Vehicle
class Vehicle {
    move() {
        throw new Error("Método move() não implementado");
    }
}

// Implementação da classe Carro
class Car extends Vehicle {
    move() {
        return "Carro se deslocando na estrada";
    }
}

// Implementação da classe Bicicleta
class Bicycle extends Vehicle {
    move() {
        return "Bicicleta se deslocando na ciclovia";
    }
}

// Criando a fábrica de veículos
class VehicleFactory {
    createVehicle(vehicleType) {
        switch (vehicleType) {
            case "carro":
                return new Car();
            case "bicicleta":
                return new Bicycle();
            default:
                throw new Error("Tipo de veículo desconhecido");
        }
    }
}

// Usando a fábrica para criar veículos
const factory = new VehicleFactory();

const car = factory.createVehicle("carro");
console.log(car.move()); // Saída: Carro se deslocando na estrada

const bike = factory.createVehicle("bicicleta");
console.log(bike.move()); // Saída: Bicicleta se deslocando na ciclovia

//Neste exemplo, criamos a classe VehicleFactory que possui um método createVehicle para criar instâncias de diferentes tipos de veículos com base no tipo fornecido. O código cliente pode criar veículos usando a fábrica sem precisar conhecer a implementação específica de cada tipo de veículo.