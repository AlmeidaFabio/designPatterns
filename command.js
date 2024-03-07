//é usado para encapsular uma solicitação como um objeto, permitindo que se parametrize clientes com solicitações, enfileire solicitações, registre solicitações e execute operações de desfazer.

// Receiver: Classe base para os dispositivos controlados
class Device {
    turnOn() {
        throw new Error("Método turnOn() não implementado");
    }

    turnOff() {
        throw new Error("Método turnOff() não implementado");
    }
}

// Concrete Receivers: Implementações específicas de dispositivos

class Light extends Device {
    turnOn() {
        console.log("Luz ligada");
    }

    turnOff() {
        console.log("Luz desligada");
    }
}

class Fan extends Device {
    turnOn() {
        console.log("Ventilador ligado");
    }

    turnOff() {
        console.log("Ventilador desligado");
    }
}

// Command: Interface para os comandos
class Command {
    execute() {
        throw new Error("Método execute() não implementado");
    }
}

// Concrete Commands: Implementações específicas de comandos

class TurnOnCommand extends Command {
    constructor(device) {
        super();
        this.device = device;
    }

    execute() {
        this.device.turnOn();
    }
}

class TurnOffCommand extends Command {
    constructor(device) {
        super();
        this.device = device;
    }

    execute() {
        this.device.turnOff();
    }
}

// Invoker: Classe que invoca os comandos

class RemoteControl {
    constructor() {
        this.commands = [];
    }

    addCommand(command) {
        this.commands.push(command);
    }

    executeCommands() {
        this.commands.forEach(command => {
            command.execute();
        });
        this.commands = []; // Limpa a lista de comandos após a execução
    }
}

// Testando o padrão Command

// Criando dispositivos
const light = new Light();
const fan = new Fan();

// Criando comandos para ligar e desligar os dispositivos
const turnOnLightCommand = new TurnOnCommand(light);
const turnOffLightCommand = new TurnOffCommand(light);
const turnOnFanCommand = new TurnOnCommand(fan);
const turnOffFanCommand = new TurnOffCommand(fan);

// Criando o controle remoto e adicionando os comandos
const remoteControl = new RemoteControl();
remoteControl.addCommand(turnOnLightCommand);
remoteControl.addCommand(turnOnFanCommand);
remoteControl.addCommand(turnOffLightCommand);
remoteControl.addCommand(turnOffFanCommand);

// Executando os comandos
remoteControl.executeCommands();


// Neste exemplo, temos a classe base Device, que define a interface comum para os dispositivos controlados (nesse caso, Light e Fan). As classes TurnOnCommand e TurnOffCommand são comandos concretos que encapsulam as operações de ligar e desligar os dispositivos.

// O controle remoto (RemoteControl) atua como o invocador dos comandos. Ele mantém uma lista de comandos e os executa quando necessário.

// Ao criar os dispositivos e os comandos correspondentes e adicioná-los ao controle remoto, podemos controlar os dispositivos de forma fácil e flexível, sem a necessidade de conhecer os detalhes de implementação específicos de cada dispositivo. Isso ilustra o padrão Command em ação, encapsulando solicitações como objetos e permitindo sua manipulação e execução dinâmicas.
