// é usado para permitir que um objeto altere seu comportamento quando seu estado interno muda. 

// Context: Classe que contém o estado atual
class MusicPlayer {
    constructor() {
        this.state = new StoppedState(this);
    }

    setState(state) {
        this.state = state;
    }

    play() {
        this.state.play();
    }

    pause() {
        this.state.pause();
    }

    stop() {
        this.state.stop();
    }
}

// State: Interface para os estados
class State {
    constructor(player) {
        this.player = player;
    }

    play() {
        throw new Error("Método play() não implementado");
    }

    pause() {
        throw new Error("Método pause() não implementado");
    }

    stop() {
        throw new Error("Método stop() não implementado");
    }
}

// Concrete States: Implementações específicas dos estados

class PlayingState extends State {
    play() {
        console.log("A música já está tocando.");
    }

    pause() {
        console.log("Música pausada.");
        this.player.setState(new PausedState(this.player));
    }

    stop() {
        console.log("Música parada.");
        this.player.setState(new StoppedState(this.player));
    }
}

class PausedState extends State {
    play() {
        console.log("Música continuando a partir da pausa.");
        this.player.setState(new PlayingState(this.player));
    }

    pause() {
        console.log("A música já está pausada.");
    }

    stop() {
        console.log("Música parada.");
        this.player.setState(new StoppedState(this.player));
    }
}

class StoppedState extends State {
    play() {
        console.log("Iniciando música.");
        this.player.setState(new PlayingState(this.player));
    }

    pause() {
        console.log("Não é possível pausar, a música ainda não começou a tocar.");
    }

    stop() {
        console.log("Música já parada.");
    }
}

// Testando o padrão State

// Criando o player de música
const player = new MusicPlayer();

// Tocando música
player.play();
// Pausando música
player.pause();
// Tentando pausar novamente
player.pause();
// Tocando música novamente
player.play();
// Parando música
player.stop();
// Tentando parar novamente
player.stop();


// Neste exemplo, temos a classe MusicPlayer, que representa o contexto onde o estado atual é armazenado. Ele contém métodos para controlar o player de música, como play, pause e stop.

// A classe State define a interface comum para os estados. As classes PlayingState, PausedState e StoppedState são implementações específicas desses estados, cada uma definindo o comportamento correspondente do player de música em um determinado estado.

// Ao criar o player de música e executar diferentes ações, como play, pause e stop, o comportamento do player é alterado de acordo com seu estado atual. Isso demonstra o padrão State em ação, onde o objeto altera seu comportamento quando seu estado interno muda.