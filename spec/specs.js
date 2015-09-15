describe('Ticket', function() {
  it("create a new ticket with the given specification", function() {
    var testTicket = new Ticket("Cool Movie", "early", 30, "Yes");
    expect(testTicket.movieName).to.equal("Cool Movie");
    expect(testTicket.movieTime).to.equal("early");
    expect(testTicket.userAge).to.equal(30);
    expect(testTicket.newRelease).to.equal("Yes");
  });

  it("calculates ticket price for user inputs", function() {
    var testTicket = new Ticket("Cool Movie", "matinee", 30, "No");
    expect(testTicket.ticketPrice()).to.equal(5);
  });
});
