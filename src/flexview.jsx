var React=require("react");
var Reflux=require("reflux");
var store=require("./store");
var Dictview=require("./dictview");
var style={
	display:"flex",
	alignContent:"flex-start",
	flexWrap:"wrap"
}
var Flexview = React.createClass({
	mixins:[Reflux.listenTo(store,"onStore")]
	,getInitialState:function(){
		return {data:store.get()};
	}
	,onStore:function(data) {
		this.setState({data:data});
	}
	,renderItem:function(item,idx) {
		return <Dictview key={item[0]} entry={item[0]} data={item[1]}/>
	}
	,render: function() {
		return <div style={style}>
			{this.state.data.map(this.renderItem)}
		</div>;
	}
});
module.exports=Flexview;