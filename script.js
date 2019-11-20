$(document).ready(function () {

    for (let i = 0; i < pictures.length; i++) {
        var card = $('<div>')
        card.attr("class", "col-3")
        $("#votes").append(card)

        var url = $("<img src=" + pictures[i].url + "></img>")

        // var id = $("<p>" + pictures[i].id + "</p>")
       
        var title = $("<p>" + pictures[i].title + "</p>")
        title.css("background-color", "grey")
        title.attr("class", "p-13")
 
        var subtile = $("<p>" + pictures[i].subtile + "</p>")
        subtile.css("background-color", "grey")
        
        var votes = $("<p>" + '<i class="fas fa-poo mr-1 btn-danger fa-4 rounded-circle"></i>' + pictures[i].votes + '<i class="fas fa-heart ml-1 btn-success fa-4 rounded-circle"></i>' + "</p>")
        votes.css("background-color", "grey")

        card.append(url, title, subtile, votes)
    }
})

