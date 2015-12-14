var Ruby =
    { name: "Ruby",
      race: "gem",
      affiliation: "Crystal Gems" }

var Saphire =
    { name: "Saphire",
      race: "gem",
      affiliation: "Crystal Gems" }

var Garnet =
    { name: "Garnet",
      race: "gem",
      affiliation: "Crystal Gems",
      fusion: [ Ruby, Saphire ]
    }

var Amethyst =
    { name: "Amethyst",
      race: "gem",
      affiliation: "Crystal Gems" }

var Perl =
    { name: "Perl",
      race: "gem",
      affiliation: "Crystal Gems" }


var Steven =
    { name: "Steven",
      race: "human / gem",
      affiliation: "Crystal Gems" }

var SadieMiller =
    { name: "Sadie Miller",
      race: "human",
      affiliation: "Big Donut" }

module.exports.Garnet = Garnet;
module.exports.Amethyst = Amethyst;
module.exports.Perl = Perl;
module.exports.Steven = Steven;
module.exports.SadieMiller = SadieMiller;
module.exports.TheCrystalGems = [Garnet, Amethyst, Perl, Steven];
