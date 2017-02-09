<?php
	if(isset($PHPZevelop))
	{
		/* Page setup
		------------------------------*/
		$PHPZevelop->OverrideObjectData("CFG", array(
			"PageTitle"  => "AOE2 - Fight Simulator"
		));

		$Path = "/site/pages/aoe2/fightsim/";
	}
	else
	{
		$Path = "";
	}
?>

<script type="text/javascript" src="<?php echo $Path; ?>aoe2_units.js?0"></script>
<script type="text/javascript" src="<?php echo $Path; ?>aoe2_fightsim.js?0"></script>

<script type="text/javascript">
	window.onload = function(){
		var Calc = AOE2_HitsCalc();
		var DOMselects = document.querySelectorAll("select");

		for(var u in DOMselects)
		{
			var optgroup = "";
			for(var i in Calc.Units)
			{
				if(typeof(Calc.Units[i]) == "string" && optgroup != Calc.Units[i])
				{
					optgroup = Calc.Units[i];
					DOMselects[u].innerHTML += "<optgroup label='"+Calc.Units[i]+"'>";
				}
				else
				{
					DOMselects[u].innerHTML += "<option value='"+i+"'>"+Calc.Units[i].name+"</option>";
				}
			}
		}

		document.querySelector("form").addEventListener("submit", function(e){
			event.preventDefault();
			
			DOMresult = document.querySelector("#result");
			DOMresult.innerHTML = "";
			Calc.Fight(
				Units[DOMselects[0].value],
				Units[DOMselects[1].value]
			, function(str){
				DOMresult.innerHTML += str+"<br />";
			});

			window.scrollTo(0, document.body.scrollHeight);
		});
	}
</script>

<style type="text/css">
	#unitForm select {padding: 6px; width: 100%; margin-bottom: 7px; font-size: 18px;}
	#unitForm input {padding: 6px; width: 100%; margin-bottom: 7px; font-size: 18px;}
</style>

<h2>AOE2 Fight Simulator</h2>
<p>
	This is a fight simulator between units in AOE2, the idea came from
	Reddit user '<a href="https://www.reddit.com/user/xThomas">xThomas</a>' <a href="https://www.reddit.com/r/aoe2/comments/5s4mue/number_of_hits_calculator">post here</a>.<br /><br />
	If you have any ideas please reply on <a href="https://www.reddit.com/r/aoe2/comments/5ssg4a/aoe2_hits_calculator_inspired_by_xthomas/">this Reddit post</a>
	<br /><br />
</p>

<form id="unitForm">
	<select class="unit"></select>
	<p style="font-size: 18px; margin: 0px; padding: 0px 0px 7px 0px; text-align: center; font-weight: bold;">vs</p>
	<select class="unit"></select>
	<input type="submit" value="Fight!">
</form>

<br />
<div id="result" style="height: 400px; overflow: auto; width: 95%; border: 2px solid #CCCCCC; padding: 5px; margin: auto; line-height: 20px; font-size: 14px;">Select units to fight!</div>