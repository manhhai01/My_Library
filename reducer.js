
const init = {
    cars: [
        'BMW',
        'Mercedes',
        'Honda',
        'Yamaha'
    ]
}

export default function reducer(state = init, action, args) {

    console.log(action, args)

    switch (action) {
        case 'ADD':
            const [newCar] = args
            return {
                ...state,
                cars: [...state.cars, newCar]
            }
            break;

        default:
            return state
    }
}
