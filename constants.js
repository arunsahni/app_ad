
const messages = {
	"errorRetreivingData": "Error occured while retreiving the data from collection",
	"vehicleTypeFailure": "Error occured while saving the data",
	"vehicleTypeSuccess": "Vehicle Type saved successfully",
	"vehicleTypeUpdateSuccess": "Vehicle Type updated successfully",
	"vehicleTypeStatusUpdateSuccess": "Status updated successfully",
	"vehicleTypeStatusUpdateFailure": "Error occured while updating status",
	"vehicleTypeStatusDeleteFailure": "Error occured while deleting the vehicle types",
	"vehicleTypeDeleteSuccess":"Vehicle Type deleted successfully",
	"successSendingForgotPasswordEmail": "Password sent successfully"

}

const gmailSMTPCredentials = {
	"service": "gmail",
	"host": "smtp.gmail.com",
	"username": "username",
	"password": "password"

}


const facebookCredentials = {
	"app_id" : "1655859644662114", 
	"secret":"62da09d9663d9f8315e873abfdbbe70f",
	 "token_secret": process.env.token_secret || 'JWT Token Secret'
}

const twitterCredentials = {
	"consumer_key" : "q2doqAf3TC6Znkc1XwLvfSD4m",
	"consumer_secret" : "Yrfi1hr84UMoamS2vnJZQn6CeP8dHsv6XjDoyRqsfzSNwyFQBZ"
}

const googleCredentials = {
	"client_secret_key" : "leWdLHJOoo9g6B9oLCV1lMqY"
}

var obj = {messages:messages, gmailSMTPCredentials:gmailSMTPCredentials, facebookCredentials:facebookCredentials, twitterCredentials : twitterCredentials, googleCredentials : googleCredentials};
module.exports = obj; 