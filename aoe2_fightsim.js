AOE2_HitsCalc = function()
{
	this.FightOver = false;
	this.unit1 = null;
	this.unit2 = null;

	// compares two units and prints the number of hits to beat and lose
	Fight = function(obj1, obj2, callback)
	{
		this.FightOver = false;
		this.unit1 = (JSON.parse(JSON.stringify(obj1))); 
		this.unit2 = (JSON.parse(JSON.stringify(obj2)));
		this.unit1.ar = this.unit1.ar.split('/');
		this.unit2.ar = this.unit2.ar.split('/');
		callback("<span style='color: blue;'>Battle: "+this.unit1.name+" ("+this.unit1.hp+"HP) vs "+this.unit2.name+" ("+this.unit2.hp+" HP)</span>");

		//a.hp -= (Math.abs(b.at - a.mdef) + Math.abs(b.patt - a.pdef));

		this.unit1.hits = 0;
		this.unit2.hits = 0;

		this.PerformAttack(this.unit1, this.unit2, callback);
		this.PerformAttack(this.unit2, this.unit1, callback);
	}

	PerformAttack = function(obj1, obj2, callback)
	{
		if(obj1.fr !== undefined && obj1.fr != "-" && obj1.fr > 0)
		{
			this.Timeout = setTimeout(function(){
				if(!this.FightOver && obj1.hp > 0)
					{
						obj1.hits++;

						var at = 0;
						var atbonus = 0;
						var def = 0;

						at = (obj1.at != "-") ? obj1.at : 0;

						if(!obj1.t.includes("pierce")) def = obj2.ar[0];
						else def = obj2.ar[1];

						//bonus
						if(obj1.extra !== undefined && obj1.extra["attack bonus"] !== undefined)
						{
							var atbonusarr = [];
							var temp = obj1.extra["attack bonus"].split(", ");
							for(var i in temp){
								var spl = temp[i].split(" ");
								atbonusarr[spl[1]] = spl[0];
							}
		//
							var temp = obj2.t.split(" ");
							for(var i in temp)
							{
								if(atbonusarr[temp[i]] != undefined)
								{
									atbonus = atbonusarr[temp[i]].substr(1);
									break;
								}
							}
						}
						//bonus

						at = parseFloat(at);
						atbonus = parseFloat(atbonus);
						def = parseFloat(def);

						if(obj1.at != "-" && obj1.at != 0 && at <= 0) at = 1;

						var totaldmg = (at + atbonus) - def;
						obj2.hp -= totaldmg;

						var str = obj1.name + " attacks " + obj2.name + " (" + obj2.hp + " HP) causing total " + totaldmg+" damage";
						if(atbonus > 0) str += " (" + atbonus + " bonus dmg)";
						if(def > 0)str += " (-"+def+" def)";
						callback(str);

						if(obj2.hp <= 0)
						{
							this.Finished(callback);
							this.FightOver = true;
						}
						
						this.PerformAttack(obj1, obj2, callback);
					}
			}, obj1.fr * 100);
		}
	}

	Finished = function(callback){
		clearTimeout(this.Timeout);
		
		if(this.unit1.hp > this.unit2.hp)
			callback("<span style='color: green;'>"+this.unit1.name + " ("+this.unit1.hp+" HP) wins against " + this.unit2.name + " ("+this.unit2.hp+" HP) after "+this.unit1.hits+" hits</span>");

		if(this.unit1.hp < this.unit2.hp)
			callback("<span style='color: red;'>"+this.unit1.name + " ("+this.unit1.hp+" HP) loses against " + this.unit2.name + " ("+this.unit2.hp+" HP) after "+this.unit2.hits+" hits</span>");
	}

	return this;
}