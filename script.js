$(document).ready(function () {

    for (let i = 0; i < pictures.length; i++) {
        var card = $('<div>')
        card.attr("class", "row")
        card.attr("class", "col-12")
        $("#votes").append(card)

        var url = $("<img src=" + pictures[i].url + "></img>")
        url.css("width", "100%", "height", "100%")

        // var id = $("<p>" + pictures[i].id + "</p>")

        var title = $("<p>" + pictures[i].title + "</p>")
        title.css("background-color", "grey")
        title.attr("class", "p-0 mb-0")

        var subtile = $("<p>" + pictures[i].subtile + "</p>")
        subtile.css("background-color", "grey")
        subtile.attr("class", "p-0 mb-0")

        // var btn1 = $('<i class="fas fa-poo"></i>');
        // var btn2 = $('<i class="fas fa-heart"></i>');
        // var text = $("pictures[i].votes");
        // votes.append(btn1);
        // votes.append(btn2);
        // votes.append(text);
        // var cpt = 0;
        // btn1.click(function () {
        //     cpt = cpt - 1;
        //     text.val(cpt)
        // });
        // btn2.click(function () {
        //     cpt = cpt + 1;
        //     text.val(cpt)
        // });
        var votes = $("<p>" + '<i class="fas fa-poo mr-1 btn-danger fa-2x rounded-circle"></i>' + pictures[i].votes + " vote(s) " + '<i class="fas fa-heart ml-1 btn-success fa-2x rounded-circle"></i>' + "</p>")
        votes.css("background-color", "grey")
        votes.attr("class", "p-0 mb-5")

        card.append(url, title, subtile, votes)
    }
})
// });