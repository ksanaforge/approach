var React=require("react");
var actions=require("./actions");
var Controls=React.createClass({
	randomContent:function() {
		var out="";
		var c=Math.floor((Math.random()*20)+3);
		for (var i=0;i<c;i++) {
			var code=Math.floor(Math.random()*20000)+0x4e00;
			out+=String.fromCharCode(code);
		}
		return out;
	}	
 	,add:function() {
		actions.add(this.randomContent());
	}
	,clear:function() {
		actions.clear();
	}
	,render:function() {
		return <div>
      		<button onClick={this.add}>Add</button>
      		<button onClick={this.clear}>Clear</button>
      	</div>
	}
});

module.exports=Controls;