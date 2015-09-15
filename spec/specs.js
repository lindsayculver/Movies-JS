describe('Ticket', function() {
  it("create a new ticket with the given specification", function() {
    var testTicket = new Ticket("Cool Movie", "early", 30);
    expect(testTicket.movieName).to.equal("Cool Movie");
    expect(testTicket.movieTime).to.equal("early");
    expect(testTicket.userAge).to.equal(30);
  });
});
