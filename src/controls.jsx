var React=require("react");
var actions=require("./actions");
var Controls=React.createClass({
	open:function(e) {
		actions.getDef(this.refs.tofind.getDOMNode().value);
	}
	,keypress:function(e) {
		if (e.key=="Enter") this.open(e);
	}
	,reset:function() {
		actions.clear();
	}
	,render:function() {
		return <div>
      		<input onKeyPress={this.keypress} size={4} style={{fontSize:"200%"}} ref="tofind" defaultValue="四諦"></input>
      		<button onClick={this.open}>Open</button>
      		<button onClick={this.reset}>Reset</button>
      	</div>
	}
});

module.exports=Controls;