class TicketManager {
    constructor(basePrice = 0.15) {
        this.events = []
        this.basePrice = basePrice
    }

    getEvents() {
        return this.events
    }

    addEvent({ nome, lugar, preco, capacidade = 50, data = new Date() }) {
        const evento = {
            id: this.events.length + 1,
            nome,
            lugar,
            preco: preco + this.basePrice,
            capacidade,
            data,
            participants: []
        }
        this.events.push(evento)
        return evento
    }

    addUser(eventId, userId) {
        const event = this.events.find(e => id === eventId)
        if (!event) {
            throw new Error("Evento não encontrado")
        }
        if (event.participants.includes(userId)) {
            throw new Error("Usuario já cadastrado neste evento")
        }
        event.participants.push(userId)
        return true
    }

    putEventoEnGira(eventId, novaCidade, novaData) {
        const eventoOriginal = this.events.findIndex(e => e.id === eventId)
        if (!eventoOriginal) {
            throw new Error("Evento não encontrado")
        }
        const novoEvento = {
            ...eventoOriginal,
            id: this.events.length + 1,
            lugar: novaCidade,
            data: novaData,
            participants: []
        }
        this.events.push(novoEvento)
        return novoEvento
    }
}

const manager = new TicketManager()
const evento = manager.addEvent({
    nome: "Lollapalooza",
    lugar: "São Paulo",
    preco: 50
})

manager.addUser(1, "user123")
const novoEvento = manager.putEventoEnGira(1, "SP", new Date("2024-12-31"))