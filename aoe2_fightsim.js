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
		callback("<span style='color: blue;'>Battle: "+this.unit1.name+" ("+this.unit1.hp+"HP) vs "+this.unit2.name+" ("+this.unit2.hp+" HP)</span>");

		//a.hp -= (Math.abs(b.matt - a.mdef) + Math.abs(b.patt - a.pdef));

		this.unit1.hits = 0;
		this.unit2.hits = 0;

		this.PerformAttack(this.unit1, this.unit2, callback);
		this.PerformAttack(this.unit2, this.unit1, callback);
	}

	PerformAttack = function(obj1, obj2, callback)
	{
		this.Timeout = setTimeout(function(){
			if(!this.FightOver && obj1.hp > 0)
			{
				obj1.hits++;
				
				if(obj1.matt > 0)
					var damage = obj1.matt - obj2.mdef;
				else if(obj1.patt > 0)
					var damage = obj1.patt - obj2.pdef;
				else
					var damager = 0;

				obj2.hp -= damage;

				callback(obj1.name + " attacks " + obj2.name + " (" + obj2.hp + " HP) causing " + damage + " damage");

				if(obj2.hp <= 0)
				{
					this.Finished(callback);
					this.FightOver = true;
				}
				else
				{
					this.PerformAttack(obj1, obj2, callback);
				}
			}
		}, obj1.rate * 100);
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