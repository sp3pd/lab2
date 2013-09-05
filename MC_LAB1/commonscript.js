$(document).ready(function () {

    function ValidateForm() {
	
	   return true;
	   }
   
});

function getCityandState() {
    var x, y;
    var country = $("#country").val();
	    var zip = $("#zipcode").val();
		
		
	 if((country == "") && (zip == ""))
	{
	alert("Please enter the zipcode and country to retrieve the city and state");
	}
	else
	{
    $.ajax({
        type: "get",
        url: "http://api.geonames.org/postalCodeLookupJSON?postalcode=" + zip + "&country=" + country + "&username=sirip27@gmail.com",

        success: function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                  
                    if (key == '0') {
                       
                        x = value.placeName;
                        y = value.adminName1;

                    }



                });
               
            });
            $("#city").val(x);
             $("#state").val(y);
           $("input[type=submit]").removeAttr("disabled");
        },
        error: function () {
            alert('in here');
        }
    });
	}
}
