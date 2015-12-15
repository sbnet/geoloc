var GEO = function()
{
    this.position =
    {
        "latitude": 48.8667,
        "longitude": 2.3333
    };

    this.success = function(pos)
    {
        $("#status").text("success");
        this.position.latitude = pos.coords.latitude;
        this.position.longitude = pos.coords.longitude;
    };

    this.error = function(err)
    {
        $("#status").text("ERROR("+err.code+"): "+err.message);
    };

    this.locate = function()
    {
        var options =
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(this.success, this.error, options);
        }
    };
};


