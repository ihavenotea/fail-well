var expect = require("chai").expect;
var WarpPad = require("../app/warp_pad");
var Characters = require("../app/characters");

describe("WarpPad", function() {

  it("works", function() {
    var warpPadA = new WarpPad("The Temple");
    var warpPadB = new WarpPad("Sky Spire");

    Characters.TheCrystalGems.forEach(function(gem) {
      expect(gem).to.have.property('affiliation', 'Crystal Gems');
    });

    var gems = Characters.TheCrystalGems;

    warpPadA.load(gems);
    expect(warpPadA.occupants).to.equal(gems);

    warpPadA.setDestination(warpPadB);
    warpPadA.activate(gems[0]);

    expect(warpPadB.occupants).to.have.length(gems.length);
    expect(warpPadA.occupants).to.have.length(0);

  });

});
