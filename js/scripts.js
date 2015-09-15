function Ticket(movieName, movieTime, userAge, newRelease) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.userAge = userAge;
  this.newRelease = newRelease;
  this.startPrice = 10;
}

Ticket.prototype.ticketPrice = function() {
  if(this.movieTime === "matinee" || this.userAge >= 65 || this.userAge <= 12 || this.newRelease == "old-release") {
    this.startPrice = 5;
  }
  return this.startPrice;
};

function resetFields() {
  $("input#new-movie").val("");
  $("input#optionsRadios1").attr('checked', false);
  $("input#optionsRadios2").attr('checked', false);
  $("input#new-age").val("");
  $("input#optionsRadios3").attr('checked', false);
  $("input#optionsRadios4").attr('checked', false);
}

$(document).ready(function() {
  $("form#movie").submit(function(event) {
    event.preventDefault();

    var inputtedMovieName = $("input#new-movie").val();
    var inputtedMovieTime = $("input[name=time-choice]:checked", "#movie").val();
    var inputtedUserAge = $("input#new-age").val();
    var inputtedNewRelease = $("input[name=release]:checked", "#movie").val();

    var newTicket = new Ticket (inputtedMovieName, inputtedMovieTime, inputtedUserAge, inputtedNewRelease);
    var newTicketPrice = newTicket.ticketPrice();
    $("ul#show-ticket-price").append("<li>" + newTicketPrice + "</li>");
  });
  resetFields();
});
