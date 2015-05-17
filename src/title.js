var React=require("react");
var style={fontSize:"150%",display:"flex"};
var buttonstyle={marginLeft:"auto"};
var action=require("./actions");

var Title=React.createClass({
	propTypes:{
		text:React.PropTypes.string.isRequired
	}
	,close:function() {
		action.close(this.props.text);
	}
	,render:function(){
		return <div style={style}>
		<span>{this.props.text}</span><button onClick={this.close} style={buttonstyle}>x</button></div>
	}
});
module.exports=Title;