var Reflux=require("reflux");
var actions=require("./actions");
var kde=require("ksana-database");

var store=Reflux.createStore({
	listenables:actions
	,getDef:function(entry) {
		var fseg=this.db.findSeg(entry,1)[0];
		this.db.get(["filecontents",fseg.file,fseg.seg],function(data){
				this.onAdd(entry,data);
		}.bind(this));
	}
	,init:function() {
		kde.open("moedict",function(err,db){
			this.db=db;
			this.getDef("四諦");
		},this);
	}
	,data:[]
	,onAdd:function(entry,item) {
		this.data.push([entry,item]);
		this.trigger(this.data);
	}
	,onClose:function(entry) {
		if (this.data.length<2) return;
		for (var i=0;i<this.data.length;i++) {
			if (this.data[i][0]==entry) {
				this.data.splice(i,1);
				this.trigger(this.data);
				break;
			}
		}

	}
	,onClear:function() {
		this.data=[];
		this.trigger(this.data);
	}
	,listEntries:function(text) {
		var out=[];
		var segnames=this.db.get("segnames");
		for (var i=1;i<text.length;i++) {
			var e=text.substr(0,i);
			var idx=segnames.indexOf(e);
			if (idx>-1) {
				out.push(segnames[idx]);
			}
		}
		return out;
	}
	,get:function() {
		return this.data;
	}
});

module.exports=store;