var baseUrl = "http://localhost:3000";

var webservices = {	

	"authenticate" : baseUrl + "/adminlogin/authenticate",
	"forgot_password" : baseUrl + "/adminlogin/forgot_password",
	"listVehicleTypes" : baseUrl + "/vehicletypes/list",
	"addVehicleType": baseUrl + "/vehicletypes/add",
	"editVehicleType": baseUrl + "/vehicletypes/edit",
	"updateVehicleType": baseUrl + "/vehicletypes/update",
	"statusUpdateVehicleType": baseUrl + "/vehicletypes/update_status",
	"deleteVehicleType": baseUrl + "/vehicletypes/delete",

	//vehicle webservice listing
	"listVehicles": baseUrl + "/vehicles/list"


}

var facebookConstants = {
	"facebook_app_id": "1655859644662114"
}

var googleConstants = {

	"google_client_id" : "54372597586-09u72notkj8g82vl3jt77h7cbutvr7ep.apps.googleusercontent.com",
	
}

var appConstants = {

	"authorizationKey": "dGF4aTphcHBsaWNhdGlvbg=="	
}


var headerConstants = {

	"json": "application/json"

}

var pagingConstants = {
	"defaultPageSize": 10,
	"defaultPageNumber":1
}