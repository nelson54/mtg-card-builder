
var name = "Runeclaw Bear",
    type = "Bear",
    expansion = "M12",
    powerToughness = 2;

var RuneclawBear = new CardBuilder()
    .Name(name)
    .Expansion(expansion)
    .Creature()
    .CreatureType(type)
    .Power(powerToughness)
    .Toughness(powerToughness)
    .build();