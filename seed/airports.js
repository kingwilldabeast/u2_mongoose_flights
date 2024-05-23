const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
   
   
   
    const airports = [
        {
            name: 'John F Kennedy',
            location: '375 Airport St, New York, NY 10014',
            code: 'JFK'
          },
          {
            name: 'Los Angeles International',
            location: '123 Airport Blvd, Los Angeles, CA 90014',
            code: 'LAX'
          },
          {
            name: 'Dallas Fort Worth',
            location: '456 Airport Rd, Dallas, TX 78014',
            code: 'DFW'
          },
          {
            name: 'Miami International',
            location: '789 Airport St, Miami, FL 33142',
            code: 'MIA'
          },
    ]

    await Airport.insertMany(airports)
    console.log('Created airports!')
}

const run = async () => {
    await main() 
    //closes database
    db.close()
}

run ()