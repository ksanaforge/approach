var React=require("react");
var keyboard_mixin=require("./keyboard_mixin");
var style={
	borderStyle:"solid",
	borderColor:"blue",
	borderWidth:"1px",
	maxWidth:"200px"
}
var Links=require("./links");
var Title=require("./title");
var Dictview=React.createClass({
	mixins:[keyboard_mixin]
	,getInitialState:function(){
		return {allowkeys:keyboard_mixin.arrowkeys,atcaret:""};
	}
	,onKeyUp:function(e) {
		var sel=window.getSelection();
		var s=this.props.data.substr(sel.anchorOffset+this.titlewidth,10).replace(/[。，、！；：」「]/g,"");
		this.setState({atcaret:s});
	}
	,componentDidMount:function() {
		this.refs.body.getDOMNode().contentEditable=true;
	}
	,getDef:function() {
		var i=this.props.data.indexOf("\n");
		this.titlewidth=i+1;
		return this.props.data.substr(i+1);
	}
	,render:function() {
		return <div style={style}>
			<Title text={this.props.entry}/>
			<div onKeyUp={this.onKeyUp} onMouseUp={this.onKeyUp} onKeyDown={this.onkeydown} ref="body">{this.getDef()}</div>
			<Links text={this.state.atcaret}/>
			</div>
	}
});
module.exports=Dictview;