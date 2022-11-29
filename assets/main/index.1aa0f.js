window.__require=function e(t,o,r){function n(i,s){if(!o[i]){if(!t[i]){var a=i.split("/");if(a=a[a.length-1],!t[a]){var l="function"==typeof __require&&__require;if(!s&&l)return l(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+i+"'")}i=a}var p=o[i]={exports:{}};t[i][0].call(p.exports,function(e){return n(t[i][1][e]||e)},p,p.exports,e,t,o,r)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<r.length;i++)n(r[i]);return n}({EmptyController:[function(e,t,o){"use strict";cc._RF.push(t,"53819OvyEhB3pvv6MLNa/1q","EmptyController");var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=this&&this.__decorate||function(e,t,o,r){var n,c=arguments.length,i=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,o,i):n(t,o))||i);return c>3&&i&&Object.defineProperty(t,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=e("./PlayerController"),s=cc._decorator,a=s.ccclass,l=s.property,p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.player=null,t}return n(t,e),t.prototype.start=function(){var e=this;this.node.on(cc.Node.EventType.TOUCH_START,function(t){console.log("touch start..."),e.player.touchStart(t)}),this.node.on(cc.Node.EventType.TOUCH_END,function(t){console.log("touch end..."),e.player.touchEnd(t)})},c([l(i.default)],t.prototype,"player",void 0),c([a],t)}(cc.Component);o.default=p,cc._RF.pop()},{"./PlayerController":"PlayerController"}],PlayerController:[function(e,t,o){"use strict";cc._RF.push(t,"2f362waMARCa4XbQqhRYJtb","PlayerController");var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=this&&this.__decorate||function(e,t,o,r){var n,c=arguments.length,i=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,o,i):n(t,o))||i);return c>3&&i&&Object.defineProperty(t,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,s=i.ccclass,a=i.property,l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.camera=null,t.rigid=null,t.initXDistance=0,t.pressTime=0,t.isPressing=!1,t.pressType=1,t}return n(t,e),t.prototype.onLoad=function(){cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE),cc.director.getPhysicsManager().enabled=!0,cc.systemEvent.setAccelerometerEnabled(!0)},t.prototype.start=function(){var e=this;cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,function(t){switch(console.log("down "+t.keyCode),t.keyCode){case cc.macro.KEY.space:e.touchStart(null);break;case cc.macro.KEY.left:e.pressType=0;break;case cc.macro.KEY.right:e.pressType=2}}),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,function(t){switch(console.log("up"+t.keyCode),t.keyCode){case cc.macro.KEY.space:e.touchEnd(null);break;case cc.macro.KEY.left:case cc.macro.KEY.right:e.pressType=1}}),cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION,function(e){console.log("x="+e.acc.x+"y="+e.acc.y+"z="+e.acc.z)}),this.initXDistance=this.camera.y-this.node.y,console.log("start..."),console.log("gravity:"+cc.director.getPhysicsManager().gravity),console.log("mass:"+this.getComponent(cc.RigidBody).getMass())},t.prototype.touchStart=function(){this.isPressing=!0},t.prototype.touchEnd=function(){this.jump()},t.prototype.jump=function(){if(this.isPressing&&0==this.rigid.linearVelocity.y){var e=700*this.pressTime,t=60;0==this.pressType?t=120:2==this.pressType&&(t=60);var o=t/180*Math.PI,r=e*Math.cos(o),n=Math.abs(e*Math.sin(o));1==this.pressType&&(r=0),this.rigid.linearVelocity=new cc.Vec2(r,n),console.log("pressTime="+this.pressTime+" x="+r+" y="+n),this.isPressing=!1,this.pressTime=0}},t.prototype.update=function(e){Math.abs(this.node.y-this.camera.y)>=200&&(this.node.y-this.camera.y>0?this.camera.y=this.camera.y+400:this.camera.y=this.camera.y-400),this.isPressing&&this.pressTime<1&&0==this.rigid.linearVelocity.y&&(this.pressTime+=2*e),0!=this.rigid.linearVelocity.x&&0==this.rigid.linearVelocity.y&&1==this.pressType&&console.log("highest point "+this.node.y),this.isPressing||0!=Math.abs(this.rigid.linearVelocity.y)||(0==this.pressType?this.node.x-=100*e:2==this.pressType&&(this.node.x+=100*e))},t.prototype.onBeginContact=function(e,t,o){var r=e.getWorldManifold().points[0];if(console.log("contactPoint:"+r),console.log("otherCollider.node.y:"+o.node.y),console.log("otherCollider.node.height:"+o.node.height),r.y-o.node.y<o.node.height/2)return console.log("\u4fa7\u97621"+t.body.linearVelocity.x),t.body.linearVelocity=new cc.Vec2(-t.body.linearVelocity.x,t.body.linearVelocity.y),void console.log("\u4fa7\u97622"+t.body.linearVelocity.x)},c([a(cc.Node)],t.prototype,"camera",void 0),c([a(cc.RigidBody)],t.prototype,"rigid",void 0),c([s],t)}(cc.Component);o.default=l,cc._RF.pop()},{}]},{},["EmptyController","PlayerController"]);