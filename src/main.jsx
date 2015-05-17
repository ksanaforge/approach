var React=require("react");
var Flexview=require("./flexview.jsx");
var kde=require("ksana-database");
var Maincomponent = React.createClass({
  render: function() {
    return <div>
      <Flexview/>
    </div>;
  }
});
module.exports=Maincomponent;