!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Draggable=e():t.Draggable=e()}(window,function(){return function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";a.r(e);var n={start:"mousedown",move:"mousemove",stop:"mouseup"},r=function(){function t(t){this.dragging=!1,this.dragData={},this.config=t,this.container=this.config.container,this.container.style.cssText+="cursor: "+this.config.cursor,this.registerEvent()}return t.prototype.registerEvent=function(){var t=this;this.container.addEventListener(n.start,function(e){t.onDragStart(e,t.dragData)}),document.addEventListener(n.move,function(e){t.dragData.deltaX=e.clientX-t.dragData.x,t.dragData.deltaY=e.clientY-t.dragData.y,t.onDrag(e,t.dragData)}),document.addEventListener(n.stop,function(e){t.dragData.lastX=e.clientX,t.dragData.lastY=e.clientY,t.onDragStop(e,t.dragData)})},t.prototype.onDragStart=function(t,e){this.dragging=!0;var a=getComputedStyle(this.container).transform;if("none"===a)return this.dragData.x=t.clientX,this.dragData.y=t.clientY,this.translateX=0,void(this.translateY=0);var n=a.split(",");this.translateX=Number(n[n.length-2]),this.translateY=Number(n[n.length-1].split(")")[0]),this.dragData.x=t.clientX-this.translateX,this.dragData.y=t.clientY-this.translateY},t.prototype.onDrag=function(t,e){if(this.dragging)switch(this.config.axis){case"both":this.container.style.cssText+="transform: translate("+this.dragData.deltaX+"px, "+this.dragData.deltaY+"px)";break;case"x":this.container.style.cssText+="transform: translate("+this.dragData.deltaX+"px, "+this.translateY+"px)";break;case"y":this.container.style.cssText+="transform: translate("+this.translateX+"px, "+this.dragData.deltaY+"px)";break;case"none":break;default:this.container.style.cssText+="transform: translate("+this.dragData.deltaX+"px, "+this.dragData.deltaY+"px)"}},t.prototype.onDragStop=function(t,e){this.dragData.deltaX=this.dragData.x-this.dragData.lastX,this.dragData.deltaY=this.dragData.y-this.dragData.lastY,this.dragging=!1},t}(),i={$:function(t){return document.querySelectorAll(t)},extend:function(t){for(var e=[],a=1;a<arguments.length;a++)e[a-1]=arguments[a];var n=t||{};return n instanceof Object&&e.forEach(function(t){t instanceof Object&&Object.keys(t).forEach(function(e){switch(Object.prototype.toString.call(t[e])){case"[object Object]":t[e]=i.extend(n[e],t[e])}n[e]=t[e]})}),n},parseToDOM:function(t){var e=document.createElement("div");return e.innerHTML=t,e.children[0]},find:function(t,e){return t.querySelector(e)},addClass:function(t,e){var a=t.getAttribute("class");a+=" "+e,t.setAttribute("class",a)},removeClass:function(t,e){t.getAttribute("class").replace(e,"")},throttle:function(t){var e,a=this.extend({method:function(){},wait:1e3,ctx:this,immediate:!0,arguments:[]},t);return function(){a.immediate&&(a.method.apply(a.ctx,a.arguments),a.immediate=!1),e||(e=setTimeout(function(){e=null,a.method.apply(a.ctx,a.arguments)},a.wait))}},setData:function(t,e,a){t.dataset?t.dataset.key=a:t.setAttribute("data-"+e,a)},getData:function(t,e){return t.dataset?t.dataset.key:t.getAttribute("data-"+e)},show:function(t){t.style.cssText+=";display"+this.getData(t,"display")},hide:function(t){var e=window&&window.getComputedStyle(t).display||"block";this.setData(t,"display",e),t.style.cssText+=";display: none;"}},o=i,s=function(){return function(t){var e=this;this.config=o.extend({axis:"both",cursor:"move"},t),o.$(this.config.selector).forEach(function(t){var a=o.extend(e.config,{container:t});new r(a)})}}();e.default=s}]).default});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZ2FibGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdnYWJsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZ2FibGUvLi9zcmMvanMvdXRpbHMvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vRHJhZ2dhYmxlLy4vc3JjL2pzL2NvbXBvbmVudHMvZHJhZ2dhYmxlLWNvcmUudHMiLCJ3ZWJwYWNrOi8vRHJhZ2dhYmxlLy4vc3JjL2pzL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL0RyYWdnYWJsZS8uL3NyYy9qcy9jb21wb25lbnRzL2FwcC50cyIsIndlYnBhY2s6Ly9EcmFnZ2FibGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwid2luZG93IiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInV0aWxzX2V2ZW50Iiwic3RhcnQiLCJtb3ZlIiwic3RvcCIsImRyYWdnYWJsZV9jb3JlIiwiRHJhZ2dhYmxlQ29yZSIsImNvbmZpZyIsInRoaXMiLCJkcmFnZ2luZyIsImRyYWdEYXRhIiwiY29udGFpbmVyIiwic3R5bGUiLCJjc3NUZXh0IiwiY3Vyc29yIiwicmVnaXN0ZXJFdmVudCIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJvbkRyYWdTdGFydCIsImRvY3VtZW50IiwiZGVsdGFYIiwiY2xpZW50WCIsIngiLCJkZWx0YVkiLCJjbGllbnRZIiwieSIsIm9uRHJhZyIsImxhc3RYIiwibGFzdFkiLCJvbkRyYWdTdG9wIiwiZGF0YSIsInRyYW5zU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFucyIsInNwbGl0IiwiTnVtYmVyIiwibGVuZ3RoIiwiYXhpcyIsInV0aWxzIiwiJCIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImV4dGVuZCIsInRhcmdldCIsImFyZ3MiLCJfaSIsImFyZ3VtZW50cyIsInJlc3VsdCIsImZvckVhY2giLCJvYmoiLCJrZXlzIiwidG9TdHJpbmciLCJwYXJzZVRvRE9NIiwic3RyIiwiZWxlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNoaWxkcmVuIiwiZmluZCIsInBhcmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRDbGFzcyIsImNsYXNzTmFtZSIsInRtcENsYXNzIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJyZXBsYWNlIiwidGhyb3R0bGUiLCJjb2YiLCJ0aW1lciIsIm1ldGhvZCIsIndhaXQiLCJjdHgiLCJpbW1lZGlhdGUiLCJhcHBseSIsInNldFRpbWVvdXQiLCJzZXREYXRhIiwiZGF0YXNldCIsImdldERhdGEiLCJzaG93IiwiaGlkZSIsImRpc3BsYXlTdGF0dXMiLCJkaXNwbGF5IiwidXRpbHNfdXRpbHMiLCJhcHAiLCJpdGVtIiwiX193ZWJwYWNrX2V4cG9ydHNfXyJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBQUEsRUFBQUMsR0FDQSxpQkFBQUMsU0FBQSxpQkFBQUMsT0FDQUEsT0FBQUQsUUFBQUQsSUFDQSxtQkFBQUcsZUFBQUMsSUFDQUQsVUFBQUgsR0FDQSxpQkFBQUMsUUFDQUEsUUFBQSxVQUFBRCxJQUVBRCxFQUFB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ZmlsZSI6ImRyYWdnYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRyYWdnYWJsZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJEcmFnZ2FibGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxyXG5leHBvcnQgY29uc3QgZXZlbnRzID0ge1xyXG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxyXG4gICAgbW92ZTogJ21vdXNlbW92ZScsXHJcbiAgICBzdG9wOiAnbW91c2V1cCcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XHJcbiIsImltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuLy4uL3V0aWxzL2V2ZW50JztcclxuaW1wb3J0IHsgQ29uZmlnSW50ZXJmYWNlIH0gZnJvbSAnLi9hcHAnO1xyXG5cclxuaW50ZXJmYWNlIERhcmdEYXRhSW50ZXJmYWNlIHtcclxuICAgIC8vIHggLSBkZWx0YVggPT09IGxhc3RYXHJcbiAgICBub2RlPzogSFRNTEVsZW1lbnQ7XHJcbiAgICB4PzogbnVtYmVyO1xyXG4gICAgeT86IG51bWJlcjtcclxuICAgIGRlbHRhWD86IG51bWJlcjtcclxuICAgIGRlbHRhWT86IG51bWJlcjtcclxuICAgIGxhc3RYPzogbnVtYmVyO1xyXG4gICAgbGFzdFk/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNsYXNzIERyYWdnYWJsZUNvcmUge1xyXG4gICAgY29uZmlnOiBDb25maWdJbnRlcmZhY2U7XHJcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgZHJhZ2dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGRyYWdEYXRhOiBEYXJnRGF0YUludGVyZmFjZSA9IHt9O1xyXG4gICAgdHJhbnNsYXRlWDogbnVtYmVyO1xyXG4gICAgdHJhbnNsYXRlWTogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBDb25maWdJbnRlcmZhY2UpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY29uZmlnLmNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ICs9IGBjdXJzb3I6ICR7dGhpcy5jb25maWcuY3Vyc29yfWA7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgICB9XHJcbiAgICByZWdpc3RlckV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLnN0YXJ0LCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0KGUsIHRoaXMuZHJhZ0RhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLm1vdmUsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0RhdGEuZGVsdGFYID0gZS5jbGllbnRYIC0gdGhpcy5kcmFnRGF0YS54O1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdEYXRhLmRlbHRhWSA9IGUuY2xpZW50WSAtIHRoaXMuZHJhZ0RhdGEueTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWcoZSwgdGhpcy5kcmFnRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMuc3RvcCwgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kcmFnRGF0YS5sYXN0WCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgdGhpcy5kcmFnRGF0YS5sYXN0WSA9IGUuY2xpZW50WTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdTdG9wKGUsIHRoaXMuZHJhZ0RhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25EcmFnU3RhcnQoZTogTW91c2VFdmVudCwgZGF0YT86IERhcmdEYXRhSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgdHJhbnNTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5jb250YWluZXIpLnRyYW5zZm9ybTtcclxuICAgICAgICBpZiAodHJhbnNTdHlsZSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0RhdGEueCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgdGhpcy5kcmFnRGF0YS55ID0gZS5jbGllbnRZO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVkgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyYW5zOiBhbnkgPSB0cmFuc1N0eWxlLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlWCA9IE51bWJlcih0cmFuc1t0cmFucy5sZW5ndGggLSAyXSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGVZID0gTnVtYmVyKHRyYW5zW3RyYW5zLmxlbmd0aCAtIDFdLnNwbGl0KCcpJylbMF0pO1xyXG4gICAgICAgIHRoaXMuZHJhZ0RhdGEueCA9IGUuY2xpZW50WCAtIHRoaXMudHJhbnNsYXRlWDtcclxuICAgICAgICB0aGlzLmRyYWdEYXRhLnkgPSBlLmNsaWVudFkgLSB0aGlzLnRyYW5zbGF0ZVk7XHJcbiAgICB9XHJcbiAgICBvbkRyYWcoZTogTW91c2VFdmVudCwgZGF0YT86IERhcmdEYXRhSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmNvbmZpZy5heGlzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdib3RoJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ICs9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgke3RoaXMuZHJhZ0RhdGEuZGVsdGFYfXB4LCAke3RoaXMuZHJhZ0RhdGEuZGVsdGFZfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd4JzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ICs9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgke3RoaXMuZHJhZ0RhdGEuZGVsdGFYfXB4LCAke3RoaXMudHJhbnNsYXRlWX1weClgO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAneSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuY3NzVGV4dCArPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHt0aGlzLnRyYW5zbGF0ZVh9cHgsICR7dGhpcy5kcmFnRGF0YS5kZWx0YVl9cHgpYDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ25vbmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ICs9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgke3RoaXMuZHJhZ0RhdGEuZGVsdGFYfXB4LCAke3RoaXMuZHJhZ0RhdGEuZGVsdGFZfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25EcmFnU3RvcChlOiBNb3VzZUV2ZW50LCBkYXRhPzogRGFyZ0RhdGFJbnRlcmZhY2UpIHtcclxuICAgICAgICB0aGlzLmRyYWdEYXRhLmRlbHRhWCA9IHRoaXMuZHJhZ0RhdGEueCAtIHRoaXMuZHJhZ0RhdGEubGFzdFg7XHJcbiAgICAgICAgdGhpcy5kcmFnRGF0YS5kZWx0YVkgPSB0aGlzLmRyYWdEYXRhLnkgLSB0aGlzLmRyYWdEYXRhLmxhc3RZO1xyXG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEcmFnZ2FibGVDb3JlO1xyXG4iLCJjb25zdCB1dGlscyA9IHtcclxuICAgICQoc2VsZWN0b3I6IHN0cmluZyk6IE5vZGVMaXN0IHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICB9LFxyXG4gICAgZXh0ZW5kKHRhcmdldDogYW55LCAuLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRhcmdldCB8fCB7fTtcclxuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGFyZ3MuZm9yRWFjaCgob2JqOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmpba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1tvYmplY3QgT2JqZWN0XSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSB1dGlscy5leHRlbmQocmVzdWx0W2tleV0sIG9ialtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sXHJcbiAgICBwYXJzZVRvRE9NKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZWxlLmlubmVySFRNTCA9IHN0cjtcclxuICAgICAgICByZXR1cm4gZWxlLmNoaWxkcmVuWzBdO1xyXG4gICAgfSxcclxuICAgIGZpbmQocGFyZW50OiBIVE1MRWxlbWVudCwgY2hpbGRyZW46IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvcihjaGlsZHJlbik7XHJcbiAgICB9LFxyXG4gICAgYWRkQ2xhc3MoZWxlOiBIVE1MRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdG1wQ2xhc3M6IHN0cmluZyA9IGVsZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcbiAgICAgICAgdG1wQ2xhc3MgKz0gYCAke2NsYXNzTmFtZX1gO1xyXG4gICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdG1wQ2xhc3MpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUNsYXNzKGVsZTogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgdG1wQ2xhc3MgPSBlbGUuZ2V0QXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgIHRtcENsYXNzLnJlcGxhY2UoY2xhc3NOYW1lLCAnJyk7XHJcbiAgICB9LFxyXG4gICAgdGhyb3R0bGUoY29mOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBvID0gdGhpcy5leHRlbmQoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICgpID0+IHt9LCBcclxuICAgICAgICAgICAgd2FpdDogMTAwMCxcclxuICAgICAgICAgICAgY3R4OiB0aGlzLFxyXG4gICAgICAgICAgICBpbW1lZGlhdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFyZ3VtZW50czogW10sXHJcbiAgICAgICAgfSwgY29mKTtcclxuICAgICAgICBsZXQgdGltZXI6IG51bWJlcjtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoby5pbW1lZGlhdGUpIHtcclxuICAgICAgICAgICAgICAgIG8ubWV0aG9kLmFwcGx5KG8uY3R4LCBvLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICBvLmltbWVkaWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGltZXIpIHtcclxuICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIG8ubWV0aG9kLmFwcGx5KG8uY3R4LCBvLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB9LCBvLndhaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBzZXREYXRhKGVsZTogSFRNTEVsZW1lbnQsIGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGVsZS5kYXRhc2V0KSB7XHJcbiAgICAgICAgICAgIGVsZS5kYXRhc2V0LmtleSA9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoYGRhdGEtJHtrZXl9YCwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXREYXRhKGVsZTogSFRNTEVsZW1lbnQsIGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGVsZS5kYXRhc2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGUuZGF0YXNldC5rZXk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZS5nZXRBdHRyaWJ1dGUoYGRhdGEtJHtrZXl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3coZWxlOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGVsZS5zdHlsZS5jc3NUZXh0ICs9IGA7ZGlzcGxheSR7dGhpcy5nZXREYXRhKGVsZSwgJ2Rpc3BsYXknIHx8ICdibG9jaycpfWA7XHJcbiAgICB9LFxyXG4gICAgaGlkZShlbGU6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheVN0YXR1cyA9IHdpbmRvdyAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGUpLmRpc3BsYXkgfHwgJ2Jsb2NrJztcclxuICAgICAgICB0aGlzLnNldERhdGEoZWxlLCAnZGlzcGxheScsIGRpc3BsYXlTdGF0dXMpO1xyXG4gICAgICAgIGVsZS5zdHlsZS5jc3NUZXh0ICs9ICc7ZGlzcGxheTogbm9uZTsnO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xyXG4iLCJpbXBvcnQgRHJhZ2dhYmxlQ29yZSBmcm9tICcuL2RyYWdnYWJsZS1jb3JlJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMvdXRpbHMnO1xyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0ludGVyZmFjZSB7XHJcbiAgICBzZWxlY3Rvcjogc3RyaW5nO1xyXG4gICAgYXhpcz86ICdib3RoJyB8ICd4JyB8ICd5JyB8ICdub25lJztcclxuICAgIGN1cnNvcj86IHN0cmluZztcclxuICAgIGNvbnRhaW5lcj86IEhUTUxFbGVtZW50O1xyXG59XHJcbmNsYXNzIERyYWdnYWJsZSB7XHJcbiAgICBjb25maWc6IENvbmZpZ0ludGVyZmFjZTtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQ29uZmlnSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB1dGlscy5leHRlbmQoe1xyXG4gICAgICAgICAgICBheGlzOiAnYm90aCcsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ21vdmUnLFxyXG4gICAgICAgIH0sIGNvbmZpZyk7XHJcbiAgICAgICAgY29uc3Qgbm9kZUxpc3QgPSB1dGlscy4kKHRoaXMuY29uZmlnLnNlbGVjdG9yKTtcclxuICAgICAgICBub2RlTGlzdC5mb3JFYWNoKChpdGVtOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB1dGlscy5leHRlbmQodGhpcy5jb25maWcsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IGl0ZW0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbmV3IERyYWdnYWJsZUNvcmUoY29uZmlnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEcmFnZ2FibGU7XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9Jy4vLi4vdHlwZXMvaW5kZXguZC50cycgLz5cclxuXHJcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9qcy9jb21wb25lbnRzL2FwcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmFnZ2FibGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=