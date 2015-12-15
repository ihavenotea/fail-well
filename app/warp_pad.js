function WarpPad(location) {
  this.location = location;
  this.occupants = [];
}

WarpPad.prototype.load = function(occupants) {
  this.occupants = occupants;
}

WarpPad.prototype.setDestination = function(destination) {
  this.destination = destination;
}

WarpPad.prototype.activate = function(activatingGem) {

  this.destination.receive(this.occupants);
  this.occupants = [];
}

WarpPad.prototype.receive = function(occupants) {
  this.occupants = occupants;
}

module.exports = WarpPad;

























  // for(var i = 0; i < this.occupants.length; i++) {
  //   if (this.occupants[i].race != "gem") {
  //     this.occupants.splice(i, 1);
  //     i = i - 1;
  //   }
  // }






  // if (activatingGem.race != "gem") {
  //   throw Error("Only gems can activate a Warp Pad.");
  // }

  // this.occupants = this.occupants.filter(
  //   function(person){
  //     return person.race === 'gem';
  //   });
