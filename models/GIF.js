
const mongoose = require("mongoose");

const GIFSchema = new mongoose.Schema(
	{

        user: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],

		GIF_url: {
			type: String,
			required: true,
		},

        
    },
	
);


module.exports = mongoose.model("GIF", GIFSchema);