var expect = require("chai").expect;
var WarpPad = require("../app/warp_pad");
var Characters = require("../app/characters");

describe("WarpPad", function() {

  describe("load", function() {
    it("has the correct occupants", function() {
      var warpPadA = new WarpPad("The Temple");
      var gems = Characters.TheCrystalGems;

      warpPadA.load(gems);

      expect(warpPadA.occupants).to.have.length(gems.length);
    });
  });


  describe("activate", function() {

    it("moves occupants to another WarpPad", function() {
      var warpPadA = new WarpPad("The Temple");
      var warpPadB = new WarpPad("Sky Spire");
      var gems = Characters.TheCrystalGems;

      warpPadA.load(gems);
      warpPadA.setDestination(warpPadB);
      warpPadA.activate(gems[0]);

      expect(warpPadB.occupants).to.have.length(gems.length);
    });

    it("is cleared of occupants", function() {
      var warpPadA = new WarpPad("The Temple");
      var warpPadB = new WarpPad("Sky Spire");
      var gems = Characters.TheCrystalGems;

      warpPadA.load(gems);
      warpPadA.setDestination(warpPadB);
      warpPadA.activate(gems[0]);

      expect(warpPadA.occupants).to.have.length(0);
    });


  });
});


















    // it("doesn't transport a human", function() {
    //   var warpPadA = new WarpPad("The Temple");
    //   var warpPadB = new WarpPad("Sky Spire");
    //   var gems = Characters.TheCrystalGems;
    //   var sadie = Characters.SadieMiller;

    //   warpPadA.load([sadie]);
    //   warpPadA.setDestination(warpPadB);
    //   warpPadA.activate(sadie);

    //   expect(warpPadB.occupants).to.have.length(0);
    // });






    // it("won't activate for non gems", function() {
    //   var warpPadA = new WarpPad("The Temple");
    //   var warpPadB = new WarpPad("Sky Spire");
    //   var gems = Characters.TheCrystalGems;
    //   var sadie = Characters.SadieMiller;

    //   warpPadA.load(gems);
    //   warpPadA.setDestination(warpPadB);

    //   var fn = function() { warpPadA.activate(sadie); };

    //   expect(fn).to.throw(Error);
    // });
