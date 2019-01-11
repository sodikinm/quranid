(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{108:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(9),o=a(11),i=a(10),c=a(12),l=a(0),s=a.n(l),u=a(54),p=a(15),f=a(16);function d(){var e=Object(p.a)(["\n  border: none;\n  flex: 1;\n  font-weight: lighter;\n  color: #777777;\n"]);return d=function(){return e},e}function m(){var e=Object(p.a)(["\n  padding: 0 15px;\n  background-color: #f2f4fb;\n  border: 1px solid #f2f4fb;\n  outline: none;\n  width: 100%;\n  color: #777777;\n  font-weight: bold;\n\n  ::placeholder {\n    color: #777777;\n  }\n"]);return m=function(){return e},e}function h(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 6px 30px;\n  box-sizing: border-box;\n  border-radius: 25px;\n  background-color: #f2f4fb;\n  border: none;\n  outline: none;\n  width: 100%;\n  color: #131313;\n"]);return h=function(){return e},e}var b=f.a.div(h()),v=f.a.input(m()),y=f.a.span(d()),g=function(e){return s.a.createElement(b,null,s.a.createElement(y,null,s.a.createElement("i",{className:"fas fa-search"})),s.a.createElement(v,{value:e.value,onChange:e.onChange,placeholder:"Cari surat disini.."}))},S=a(1),O=a.n(S),E=a(4),j=a.n(E),w=a(19),k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var C=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},N=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return a=n=x(this,e.call.apply(e,[this].concat(o))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!C(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,o=a.to;r?t.replace(o):t.push(o)}},x(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);j()(this.context.router,"You should not use <Link> outside a <Router>"),j()(void 0!==t,'You must specify the "to" property');var r=this.context.router.history,o="string"===typeof t?Object(w.b)(t,null,null,r.location):t,i=r.createHref(o);return s.a.createElement("a",k({},n,{onClick:this.handleClick,href:i,ref:a}))},t}(s.a.Component);N.propTypes={onClick:O.a.func,target:O.a.string,replace:O.a.bool,to:O.a.oneOfType([O.a.string,O.a.object]).isRequired,innerRef:O.a.oneOfType([O.a.string,O.a.func])},N.defaultProps={replace:!1},N.contextTypes={router:O.a.shape({history:O.a.shape({push:O.a.func.isRequired,replace:O.a.func.isRequired,createHref:O.a.func.isRequired}).isRequired}).isRequired};var R=N,D=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"saveToLocalStorage",value:function(e,t,a,n,r){localStorage.setItem("nomor_surat",e),localStorage.setItem("keterangan_surat",t),localStorage.setItem("nama_surat",a),localStorage.setItem("audio_surat",n),localStorage.setItem("arti_surat",r)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-md-4"},s.a.createElement(R,{onClick:function(){return e.saveToLocalStorage(e.props.nomorSurat,e.props.additionalData.keteranganSurat,e.props.namaSurat,e.props.additionalData.audioSurat,e.props.additionalData.artiSurat)},to:{pathname:"/surat/".concat(this.props.nomorSurat),additionalData:{namaSurat:this.props.namaSurat,artiSurat:this.props.additionalData.artiSurat,audioSurat:this.props.additionalData.audioSurat}},params:{testValue:1},className:"list-surah"},s.a.createElement("h3",null,this.props.namaSurat),s.a.createElement("p",null,this.props.asmaSurat)))}}]),t}(l.Component),_=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={search:""},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.filter(function(t){return-1!==t.nama.toLowerCase().indexOf(e.state.search)});return s.a.createElement("div",null,s.a.createElement(u.a,null,s.a.createElement("h1",{className:"hero-title"},"QuranID"),s.a.createElement("p",{className:"hero-description"},"Al-Quran dengan terjemahan bahasa Indonesia.")),s.a.createElement("div",{className:"main-content"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"row d-flex align-items-center mb-20",style:{padding:"0 10px 30px"}},s.a.createElement("div",{className:"col-md-8"},s.a.createElement("h2",null,"Surat (Juz)")),s.a.createElement("div",{className:"col-md-4"},s.a.createElement(g,{value:this.state.search,onChange:function(t){e.setState({search:t.target.value.substr(0,20)})},placeholder:"Cari ayat atau surat..."}))),s.a.createElement("div",{className:"row"},t.map(function(e){return s.a.createElement(D,{key:e.nomor,asmaSurat:e.asma,namaSurat:e.nama,nomorSurat:e.nomor,additionalData:{keteranganSurat:e.keterangan,audioSurat:e.audio,artiSurat:e.arti}})}))))))}}]),t}(l.Component);t.default=_}}]);
//# sourceMappingURL=1.092ffcb2.chunk.js.map