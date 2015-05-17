var React=require("react");
var Flexview=require("./flexview.jsx");
var kde=require("ksana-database");
var Controls=require("./controls.jsx");
var Maincomponent = React.createClass({
  render: function() {
    return <div>
    	<Controls/>
      <Flexview/>
    </div>;
  }
});
module.exports=Maincomponent;