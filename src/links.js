var React=require("react");
var store=require("./store");
var action=require("./actions");
var Links=React.createClass({
	propTypes:{
		text:React.PropTypes.string.isRequired
	}
	,getInitialState:function() {
		return {links:[]};
	}
	,componentWillReceiveProps:function(nextProps) {
		this.setState({links:store.listEntries(nextProps.text)});
	}
	,goEntry:function(e) {
		action.getDef(e.target.innerHTML);
	}
	,renderLink:function(item,idx) {
		return <span key={idx}><a href="#" onClick={this.goEntry}>{item}</a> </span>
	}
	,render:function(){
		return <span>{this.state.links.map(this.renderLink)}</span>
	}
});
module.exports=Links;