function WarpPad(location) {
  this.location = location;
  this.occupants = [];
}

WarpPad.prototype.load = function(occupants) {
  this.occupants.push(occupants);
}

WarpPad.prototype.setDestination = function(destination) {
  this.destination = destination;
}

WarpPad.prototype.activate = function(activatingGem) {
  if (activatingGem.race != "gem") {
    throw Error("Only gems can activate a Warp Pad.");
  }
  // Check that activatingGem is one of the occupants
  this.destination.receive(this.occupants);
  this.occupants = [];
}

WarpPad.prototype.receive = function(occupants) {
  this.occupants = [];
}

module.exports = WarpPad;
