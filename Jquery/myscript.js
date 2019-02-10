
$(document).ready(function(){

    $.ajax({
        url: "data.json",
        dataType: "json"
        }).done(function(response){  
            response.forEach(element => {
                $("#table").append(
                    "<tr>"+
                    "<td>"+element.rank+"</td>"+
                    "<td>"+element.title+"</td>"+
                    "<td>"+element.distributor+"</td>"+
                    "<td>"+element.gross+"</td>"+
                    "<td>"+element.genres+"</td>"+
                    "</tr>"
                );
            });
    }) 
}) ;
    