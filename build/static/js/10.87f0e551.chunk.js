(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{237:function(e,a,t){"use strict";var l=t(7),n=t(8),i=t(12),r=t(11),c=t(13),s=t(0),o=t.n(s),u=t(238),m=t.n(u),d=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(c)))).matchingType=function(e){switch(e){case"line-scale":return o.a.createElement("div",{className:m.a["line-scale"]},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null));case"ball-clip-rotate-multiple":return o.a.createElement("div",{className:m.a["ball-clip-rotate-multiple"]},o.a.createElement("div",null),o.a.createElement("div",null));case"ball-clip-rotate-pulse":return o.a.createElement("div",{className:m.a["ball-clip-rotate-pulse"]},o.a.createElement("div",null),o.a.createElement("div",null));case"square-spin":return o.a.createElement("div",{className:m.a["square-spin"]},o.a.createElement("div",null));case"ball-scale":return o.a.createElement("div",{className:m.a["ball-scale"]},o.a.createElement("div",null));case"ball-scale-multiple":return o.a.createElement("div",{className:m.a["ball-scale-multiple"]},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null));default:return o.a.createElement("div",{className:m.a["line-scale"]},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}},t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props,a=e.type;return e.loading?o.a.createElement("div",{className:m.a["loading-box"],style:this.props.style},this.matchingType(a)):null}}]),a}(o.a.Component);d.defaultProps={style:{}},a.a=d},238:function(e,a,t){e.exports={"loading-box":"index_loading-box__1Kgdg","line-scale":"index_line-scale__1_OJc","ball-clip-rotate-multiple":"index_ball-clip-rotate-multiple__3iegK",rotate:"index_rotate__mxK17","ball-clip-rotate-pulse":"index_ball-clip-rotate-pulse__2h6Nk",scale:"index_scale__3JsNk","square-spin":"index_square-spin__37Em9","ball-scale":"index_ball-scale__16fEH","ball-scale-multiple":"index_ball-scale-multiple__1jdW_"}},358:function(e,a,t){e.exports={container:"index_container__3tkXg",navbar:"index_navbar__27Aoe",iconfont:"index_iconfont__1GOHh",loading:"index_loading__23UgK","singer-item":"index_singer-item__1AXn7",avatar:"index_avatar__1rglQ",name:"index_name__1epes"}},385:function(e,a,t){"use strict";t.r(a);var l,n,i=t(22),r=t.n(i),c=t(27),s=t(7),o=t(8),u=t(12),m=t(11),d=t(13),p=t(0),v=t.n(p),E=t(358),_=t.n(E),b=t(78),h=t(390),g=t(266),f=t(46),x=t(237),y=t(17),j=(l=Object(y.b)("appStore"),Object(h.a)(n=l(n=Object(y.c)(n=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={artists:[],loading:!1,isLoadMore:!1,haveMore:!0},t.getArtists=Object(c.a)(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),e.next=3,Object(b.a)("/top/artists",{limit:30});case 3:a=e.sent,t.setState({loading:!1,artists:a.artists||[],haveMore:a.more});case 5:case"end":return e.stop()}},e,this)})),t.goBack=function(){t.props.history.goBack()},t.onLoadMore=Object(c.a)(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.state.haveMore&&!t.state.isLoadMore){e.next=2;break}return e.abrupt("return");case 2:return t.setState({isLoadMore:!0}),e.next=5,Object(b.a)("/top/artists",{limit:30,offset:t.state.artists.length});case 5:a=e.sent,setTimeout(function(){t.setState({artists:t.state.artists.concat(a.artists||[]),isLoadMore:!1,haveMore:a.more}),t.scroll&&t.scroll.finishPullUp()},2e3);case 7:case"end":return e.stop()}},e,this)})),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getArtists()}},{key:"render",value:function(){var e=this,a=this.state,t=a.artists,l=a.loading,n=a.isLoadMore,i=a.haveMore,r=this.props.appStore.playlist.length?60:0,c={height:"calc(100vh - ".concat(44+r,"px")};return v.a.createElement("div",{className:_.a.container},v.a.createElement("div",{className:_.a.navbar},v.a.createElement("div",{className:"iconfont icon-zuojiantou ".concat(_.a.iconfont),onClick:this.goBack}),v.a.createElement("div",{className:_.a.title},"\u70ed\u95e8\u6b4c\u624b")),v.a.createElement("div",{style:c},v.a.createElement(f.a,{onPullingUp:this.onLoadMore,ref:function(a){return e.scroll=a}},v.a.createElement("div",null,v.a.createElement("ul",null,t&&t.map(function(e){return v.a.createElement("li",{key:e.id},v.a.createElement(g.a,{to:"/singer/".concat(e.id)},v.a.createElement("div",{className:_.a["singer-item"]},v.a.createElement("div",{className:_.a.avatar},v.a.createElement("img",{src:e.img1v1Url,alt:""})),v.a.createElement("div",null,v.a.createElement("div",{className:_.a.name},e.name),v.a.createElement("div",null,v.a.createElement("span",{style:{display:e.albumSize?"":"none"}},"\u4e13\u8f91:",e.albumSize),"\u2003",v.a.createElement("span",{style:{display:e.musicSize?"":"none"}},"\u5355\u66f2:",e.musicSize))))))})),v.a.createElement("div",{className:_.a.loading,style:{display:n?"":"none"}},"\u52a0\u8f7d\u4e2d..."),v.a.createElement("div",{className:_.a.loading,style:{display:i?"none":""}},"\u52a0\u8f7d\u5b8c\u6bd5")))),v.a.createElement(x.a,{loading:l}))}}]),a}(v.a.Component))||n)||n)||n);a.default=j}}]);
//# sourceMappingURL=10.87f0e551.chunk.js.map