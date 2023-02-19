class Card {
    constructor({name}){
        this.card = document.createElement('div');
        this.name = name
        this.render()
    }

    render(){
        const buttonClose = document.createElement('button');
        const cardName = document.createElement('h4');

        this.card.classList.add('classCard')
        buttonClose.classList.add('close')
        cardName.classList.add('card-name')

        cardName.innerHTML = this.name

        buttonClose.addEventListener('click', () => {
            this.remove()
        })

        this.card.append(cardName, buttonClose)
    }

    show(){
        const container = document.body
        container.append(this.card)
    }
    remove(){
        this.card.remove()
    }
}

class StarshipCard extends Card{
    constructor({model, manufacturer, max_atmosphere_speed, ...rest}){

        super(rest)
        this.model = model;
        this.manufacturer = manufacturer;
        this.maxSpeed = max_atmosphere_speed;

        this.render()
    }

    render(){
        super.render()

        const textModel = document.createElement('p');
        const textManufacturer = document.createElement('p');
        const textMaxSpeed = document.createElement('p');

        //styles

        textModel.innerHTML = this.model
        manufacturer.innerHTML = this.manufacturer
        maxSpeed.innerHTML = this.maxSpeed

        this.card.append(textModel, textManufacturer, textMaxSpeed)
    }
}

class API{
    constructor(){
        this.BASE_URL = 'https://swapi.dev/api'
    }

    findErrors = async (response) => {
        if(!response.ok){
            const { detail } = await response.json();
            throw new Error(detail)
        }

        return response
    }

    getStarship = async(id) => {
        const starship = await this.sendRequest(`${this.BASE_URL}/starships/${id}`)
        return starship
    }

    sendRequest = async(url) => {
        const response = await this.findErrors(await fetch(url))
        const result = await response.json()
        return result 
    }
}

const api = new API()

const CARD_MAP = {
    starship: StarshipCard,
}

const API_MAP = {
    starship: api.getStarship,
    // vehicle: api.getVehicle,
    // ...,
}

const handleSubmit = async (event) => {
    event.preventDefault()

    const type = select.value;
    const id = input.id;

    try{
        const item = await API_MAP[type](id);
        const card = new CARD_MAP[type](item);

        card.show()
    }catch(error){
        alert(error.message)
    }
}

form.addEventListener('submit', handleSubmit)