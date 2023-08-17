const mongoose = require('mongoose')
const connectestodb = async =()=>{
mongoose.connect(process.env.mongourl)

    .then((conn)=>{
          console.log(`Connected to database ${conn.connection.host}`)
    })

    .catch((err)=>{
   console.log(err)
   process.exit(1)
    })
}

module.exports = connectestodb;