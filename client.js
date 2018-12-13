$(document).ready(function() {
    var data = [],
        classno;
    for (var i = 0; i < 1000; i++) {


        data.push({
            "type-of-good-or-service-sold": "c-" + Math.floor((Math.random() * 45) + 1),
            "price": "" + ((Math.random() * 100) + 10).toFixed(2),
            "amount": "" + ((Math.random() * 100) + 10).toFixed(2),
            "geo-localization": "4.7110 n, 74.0721 w",
            "time": Math.floor((Math.random() * 1544439481) + 1543661849)
        });
    }
    $("#test-data").click(function() {



        $("#enter-data").val(JSON.stringify(data));

    });

    $("#process").click(function() {
        $("#result").hide();
        var classdata = [],
            classno = "c-" + $("#class-no").val(),
            minno = 0,
            maxno = 0;

        


        for (var i = 0; i < data.length; i++) {
            if (data[i]["type-of-good-or-service-sold"] == classno)
                classdata.push(data[i]);
        }
        

        for (var i = 0; i < classdata.length; i++) {
            if (parseFloat(classdata[i]["price"]) > parseFloat(classdata[maxno]["price"])) {

                maxno = i;
            }

            if (parseFloat(classdata[i]["price"]) < parseFloat(classdata[minno]["price"])) {

                minno = i;
            }

        }

        

        if (classdata.length == 1) {

            $("#result").html("Insufficient transaction data for class no.").fadeIn(1000);
        } else {
            $("#result").html("Min. price transaction: Good/service type: " + classdata[minno]["type-of-good-or-service-sold"] + ", Price: " + classdata[minno]["price"] + ", Amount: " + classdata[minno]["amount"] + ", Geo-localization: " + classdata[minno]["geo-localization"] + ", Time: " + classdata[minno]["time"] + "<br>Max. price transaction: Good/service type: " + classdata[maxno]["type-of-good-or-service-sold"] + ", Price: " + classdata[maxno]["price"] + ", Amount: " + classdata[maxno]["amount"] + ", Geo-localization: " + classdata[maxno]["geo-localization"] + ", Time: " + classdata[maxno]["time"] + "<br>Max. price is " + (((parseFloat(classdata[maxno]["price"]) / parseFloat(classdata[minno]["price"])) * 100) - 100).toFixed(2) + "% higher than min. price.").fadeIn(1000);

        }




    });
});
