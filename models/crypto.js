import mongoose, {Schema} from "mongoose";

const cryptoSchema = new Schema({
  name: String,        
  price: Number,        
  marketCap: Number,   
  change24h: Number,   
},{
    timestamps:true
});

const Crypto = mongoose.model("Crypto", cryptoSchema);
export default Crypto
