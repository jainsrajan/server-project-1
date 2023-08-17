const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
                   name:{
                    type:String,
                    required:[true , 'Name is requiresd'],
                    trim:true,
                    maxLength:[20 , 'Name must be less then 20 character']
                   },

                
         email:{
            type:String,
            required:[true , 'Email is required'],
            unique:true
         }
})

module.exports = mongoose.model('User' , userSchema)