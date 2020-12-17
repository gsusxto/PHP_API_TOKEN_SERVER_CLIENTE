$(document).ready(function () {
    let datos = ["Richard Alexander","Briceño Santiago"];
    $.ajax({
        type: "post",
        url: "Api.php",
        headers : {
            "Token-Metodo" :"16080729825fd93f1605fa2",
            "Class" : "1b91a5bd78dd60869b1213b009abcd3c6a56d7f4",
        },
        data: {datos},
        success: function (response) {
            console.log(response);
        }
    });
    
});