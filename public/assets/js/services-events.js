$(document).ready(function () {

    var newService = []

    $("#addServicesBtn").on("click", function (event) {
        event.preventDefault();
        console.log("you clicked add");
    
        var newServiceItem = $("#selectServices").val ()
        var newListEl = $("<ul>");
        var newListItem = $("<li>");
        var newTextSize = $("<h6>");
    
        newTextSize.text(newServiceItem);
        newListItem.append(newTextSize);
        newListEl.append(newListItem);
        
        newListEl.addClass("chosen-service");
        $("#chosen-service").append(newListEl)
        newService.push(newServiceItem);
        console.log(newService);
    })
    
    $("#createServices").on("click", function (event) {
        event.preventDefault();
        for (i = 0; i < newService.length; i++) {
            var createdService = {
                serviceName: newService[i]
            }
            createNewServices(createdService.serviceName);

        }
        console.log("you clicked submit");
    });
    function createNewServices(serviceName) {        
        $.post("/api/services", {
            serviceName: serviceName
        }).then(function () {
            window.location.replace("/customer-profile");
            // log the data we found
            console.log(newService)
        });
    }
});
