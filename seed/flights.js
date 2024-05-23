const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const JFK = await Airport.find({ name: 'John F Kennedy' })
    const LAX = await Airport.find({ name: 'Los Angeles International' })
    const DFW = await Airport.find({ name: 'Dallas Fort Worth' })
    const MIA = await Airport.find({ name: 'Miami International' })
  
    const flights = [
        {
            airline: 'Delta',
            flight_number: 1234,
            price: 400,
            numberOfSeats: 35,
            departingAirport: DFW[0]._id,
            arrivalAirport: LAX[0]._id,
            departure_date: new Date("2024-06-23")
        },
        {
            airline: 'Delta',
            flight_number: 2345,
            price: 450,
            numberOfSeats: 40,
            departingAirport: JFK[0]._id,
            arrivalAirport: MIA[0]._id,
            departure_date: new Date("2024-06-24")
        },        
        {
            airline: 'United',
            flight_number: 3456,
            price: 500,
            numberOfSeats: 50,
            departingAirport: MIA[0]._id,
            arrivalAirport: LAX[0]._id,
            departure_date: new Date("2024-06-25")
        },        
        {
            airline: 'United',
            flight_number: 4567,
            price: 550,
            numberOfSeats: 60,
            departingAirport: DFW[0]._id,
            arrivalAirport: MIA[0]._id,
            departure_date: new Date("2024-06-26")
        },        
        {
            airline: 'Spirit',
            flight_number: 5678,
            price: 600,
            numberOfSeats: 70,
            departingAirport: JFK[0]._id,
            arrivalAirport: DFW[0]._id,
            departure_date: new Date("2024-06-27")
        },        
        {
            airline: 'Spirit',
            flight_number: 6789,
            price: 650,
            numberOfSeats: 80,
            departingAirport: MIA[0]._id,
            arrivalAirport: LAX[0]._id,
            departure_date: new Date("2024-06-28")
        },
        {
            airline: 'Alaska',
            flight_number: 7890,
            price: 750,
            numberOfSeats: 90,
            departingAirport: DFW[0]._id,
            arrivalAirport: JFK[0]._id,
            departure_date: new Date("2024-06-29")
        },
        {
            airline: 'Alaska',
            flight_number: 5749,
            price: 800,
            numberOfSeats: 25,
            departingAirport: JFK[0]._id,
            arrivalAirport: MIA[0]._id,
            departure_date: new Date("2024-06-30")
        },
    ]
  
    await Flight.insertMany(flights)
    console.log('Created flights with airports!')
  }
  
  const run = async () => {
    await main()
    //closes database
    db.close()
  }
  
  run()