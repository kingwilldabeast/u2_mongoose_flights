

const db = require('./db')
const { Airport, Flight } = require('./models')

//Read
const findData = async () => {
    // const airports = await Airport.find()
    // console.log(airports)
    const flights = await Flight.find({ airline: 'Delta'})
    console.log(flights)
    const result = await Airport.findById( "664fc164cccff3db0a86e529")
    console.log(result)
  }
  

//Create
const createData = async () => {
    const LAX = await Airport.find({ name: 'Los Angeles International' })
    const DFW = await Airport.find({ name: 'Dallas Fort Worth' })

    let newObject = await Flight.create({
        airline: 'Delta',
        flight_number: 8455,
        price: 300,
        numberOfSeats: 29,
        departingAirport: DFW[0]._id,
        arrivalAirport: LAX[0]._id,
        departure_date: new Date("2024-07-23")
    })
    console.log(newObject)
  }

//Update
const updateData = async () => {
    const updated = await Flight.updateOne(
        { flight_number: 1234 },
        { price: 777 }
    )
    console.log(updated)
}

//Delete
const deleteData = async () => {
    let deleted = await Flight.deleteOne({ flight_number: 8455 })
    console.log(deleted)
}

  async function main() {
    try {
        // await updateData()
        // await createData()
        // await deleteData()
        await findData()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
  }
  
  main()