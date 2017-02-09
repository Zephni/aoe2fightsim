Units = [
	"Militia line",
	{name:"Milita",					hp:40, 	matt:4, 	mdef:0, patt:0, pdef:1, rate:2.03, uclass:"infantry"},
	{name:"Man at Arms",			hp:45, 	matt:6, 	mdef:0, patt:0, pdef:1, rate:2.03, uclass:"infantry", atkbonus:{"eaglewarior":2, "standardbuilding":2}},
	{name:"Long Swordsman",			hp:60, 	matt:9, 	mdef:0, patt:0, pdef:1, rate:2.03, uclass:"infantry", atkbonus:{"eaglewarior":6, "standardbuilding":3}},
	{name:"Two-Handed Swordsman",	hp:60, 	matt:12, 	mdef:0, patt:0, pdef:1, rate:2.03, uclass:"infantry", atkbonus:{"eaglewarior":8, "standardbuilding":4}},
	{name:"Champion",				hp:70, 	matt:13, 	mdef:1, patt:0, pdef:1, rate:2.03, uclass:"infantry", atkbonus:{"eaglewarior":8, "standardbuilding":4}},

	"Spearman line",
	{name:"Spearman",				hp:45, 	matt:3, 	mdef:0, patt:0, pdef:0, rate:3.05, uclass:"spearman", atkbonus:{"cavalry":15, "warelephant":15, "camel":9, "ship":9, "eaglewarior":1, "standardbuilding":1}},
	{name:"Pikeman",				hp:55, 	matt:4, 	mdef:0, patt:0, pdef:0, rate:3.05, uclass:"spearman", atkbonus:{"cavalry":22, "warelephant":25, "camel":16, "ship":16, "eaglewarior":1, "standardbuilding":1}},
	{name:"Halberdier",				hp:60, 	matt:6, 	mdef:0, patt:0, pdef:0, rate:3.05, uclass:"spearman", atkbonus:{"cavalry":32, "warelephant":28, "camel":17, "ship":17, "eaglewarior":1, "standardbuilding":1}},

	"Archer line",
	{name:"Archer",					hp:30, 	matt:0, 	mdef:0, patt:4, pdef:0, rate:2.03, uclass:"archer", atkbonus:{"spearman":3}},
	{name:"Crossbowman",			hp:35, 	matt:0, 	mdef:0, patt:5, pdef:0, rate:2.03, uclass:"archer", atkbonus:{"spearman":3}},
	{name:"Arbalest",				hp:40, 	matt:0, 	mdef:0, patt:6, pdef:0, rate:2.03, uclass:"archer", atkbonus:{"spearman":3}},

	"Scout line",
	{name:"Scout Cavalry (Dark)",	hp:45, 	matt:3, 	mdef:0, patt:0, pdef:2, rate:2.03, uclass:"cavalry", atkbonus:{"monk":6}},
	{name:"Scout Cavalry (Feudal)",	hp:45, 	matt:5, 	mdef:0, patt:0, pdef:2, rate:2.03, uclass:"cavalry", atkbonus:{"monk":6}},
	{name:"Light Cavalry",			hp:60, 	matt:7, 	mdef:0, patt:0, pdef:2, rate:2.03, uclass:"cavalry", atkbonus:{"monk":10}},
	{name:"Hussar",					hp:75, 	matt:7, 	mdef:0, patt:0, pdef:2, rate:1.93, uclass:"cavalry", atkbonus:{"monk":12}},

	"Knight line",
	{name:"Knight",					hp:100, 	matt:10, 	mdef:2, patt:0, pdef:2, rate:1.83, uclass:"cavalry"},
	{name:"Cavalier",				hp:120, 	matt:12, 	mdef:2, patt:0, pdef:2, rate:1.35, uclass:"cavalry"},
	{name:"Paladin",				hp:160, 	matt:14, 	mdef:2, patt:0, pdef:3, rate:1.93, uclass:"cavalry"},

	"Villagers",
	{name:"Villager",				hp:25, 	matt:3, 	mdef:0, patt:0, pdef:0, rate:2.03, uclass:"villager"}
];