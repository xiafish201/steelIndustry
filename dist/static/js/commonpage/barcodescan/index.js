webpackJsonp([4,0],{0:function(M,e,z){"use strict";function i(M){return M&&M.__esModule?M:{"default":M}}var t=z(3),c=i(t),N=z(5),s=i(N),u=z(52),o=i(u);c["default"].use(s["default"]);var l=new s["default"];mui.init({swipeBack:!1}),mui.plusReady(function(){l.start(o["default"],"#app")})},1:function(M,e){M.exports=vendorUtils_library},2:function(M,e){M.exports=vendors_library},3:function(M,e,z){M.exports=z(2)(190)},4:function(M,e,z){M.exports=z(1)(108)},5:function(M,e,z){M.exports=z(2)(192)},16:function(M,e,z){"use strict";function i(M){return M&&M.__esModule?M:{"default":M}}Object.defineProperty(e,"__esModule",{value:!0});var t=z(4),c=i(t);e["default"]={data:function(){return{color:plus.webview.currentWebview().fromSeller?"#419fdc":"#f04e30",scan:void 0,flash:!1}},methods:{initScan:function(){this.scan&&this.scan.close(),this.scan=new plus.barcode.Barcode("bcid",[plus.barcode.QR,plus.barcode.EAN8,plus.barcode.EAN13,plus.barcode.AZTEC,plus.barcode.DATAMATRIX,plus.barcode.UPCA,plus.barcode.UPCE,plus.barcode.CODABAR,plus.barcode.CODE39,plus.barcode.CODE93,plus.barcode.CODE128,plus.barcode.ITF,plus.barcode.MAXICODE,plus.barcode.PDF417,plus.barcode.RSS14,plus.barcode.RSSEXPANDED],{frameColor:this.color,scanbarColor:this.color}),this.scan.onmarked=this.onmarked,this.scan.start()},reset:function(){this.scan.cancel(),this.scan.start()},onmarked:function(M,e,z){e=e.replace(/\n/g,"");var i=this,t=/^https?:\/\/(\S+)\.jinxiudadi\.com\/(\S+?)(\d+)/i;null!=t.exec(e)?"detail"===RegExp.$1&&"detail/"===RegExp.$2?(i.setFullscreen(),c["default"].openWindow("../../buyer/supplier/product.html","buyer_supplier_product.html",{extras:{goods_common_id:RegExp.$3,fromSeller:plus.webview.currentWebview().fromSeller},createNew:!0,isClose:!0})):"store"===RegExp.$1&&"store/home/"===RegExp.$2&&(i.setFullscreen(),c["default"].openWindow("../../buyer/store/index.html","buyer_store_index.html",{extras:{store_id:RegExp.$3,fromSeller:plus.webview.currentWebview().fromSeller},createNew:!0,isClose:!0})):-1!==e.indexOf("jinxiudadi.com")?(i.setFullscreen(),c["default"].openWindow(e,e,{extras:{fromSeller:plus.webview.currentWebview().fromSeller},isClose:!0})):0===e.indexOf("http:")||0===e.indexOf("https:")?mui.confirm(e+"\n这是一个外站链接，是否打开？","扫码提示",["否","是"],function(M){1===M.index&&plus.runtime.openURL(e),setTimeout(i.reset,100)}):(plus.nativeUI.alert(e+"\n暂未处理此类条码."),setTimeout(i.reset,200))},scanPicture:function(){var M=this;plus.gallery.pick(function(e){plus.barcode.scan(e,M.onmarked,function(e){plus.nativeUI.alert("无法识别此图片"),setTimeout(M.reset,200)})},M.reset)},back:function(){this.setFullscreen();var M=mui.os.ios?"slide-out-bottom":"pop-out";setTimeout(function(){plus.webview.currentWebview().close(M)},10)},flashSwitch:function(){this.flash=!this.flash,this.scan.setFlash(this.flash)},setFullscreen:function(){mui.os.ios&&plus.navigator.setFullscreen(!1)}},ready:function(){this.initScan(),mui.os.ios&&(plus.navigator.setStatusBarBackground(this.color),plus.navigator.setStatusBarStyle("UIStatusBarStyleBlackOpaque"))}}},21:function(M,e){},33:function(M,e){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsKQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBpZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTQ0MjM3Mzg5Nl80NzU0NDU1LmVvdD8jaWVmaXgiKSBmb3JtYXQoImVtYmVkZGVkLW9wZW50eXBlIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNDQyMzczODk2XzQ3NTQ0NTUud29mZiIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTQ0MjM3Mzg5Nl80NzU0NDU1LnR0ZiIpIGZvcm1hdCgidHJ1ZXR5cGUiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE0NDIzNzM4OTZfNDc1NDQ1NS5zdmcjaWZvbnQiKSBmb3JtYXQoInN2ZyIpOyB9CgpdXT48L3N0eWxlPjwvZGVmcz48ZyBjbGFzcz0idHJhbnNmb3JtLWdyb3VwIj48ZyB0cmFuc2Zvcm09InNjYWxlKDAuMTk1MzEyNSwgMC4xOTUzMTI1KSI+PHBhdGggZD0iTTY0MCA0MDUuMDM0NjY3IDY0MCA0NTIuMTM4NjY3IDM3MC4zMDQgMjEzLjMzMzMzMyA3MjQuMjY2NjY3IDIxMy4zMzMzMzNDNzI0Ljk0OTMzMyAyMjAuMzUyIDcyNS4zMzMzMzMgMjI3LjQ1NiA3MjUuMzMzMzMzIDIzNC42NjY2NjcgNzI1LjMzMzMzMyAzMDQuMzg0IDY5MS43MzMzMzMgMzY2LjEwMTMzMyA2NDAgNDA1LjAzNDY2N1pNMjk4LjY2NjY2NyAxNDkuOTA5MzMzIDI5OC42NjY2NjcgMTA2LjY2NjY2NyA3MjUuMzMzMzMzIDEwNi42NjY2NjcgNzI1LjMzMzMzMyAxNzAuNjY2NjY3IDMyMi4xMTIgMTcwLjY2NjY2NyAyOTguNjY2NjY3IDE0OS45MDkzMzNaTTg1Ny4xOTQ2NjcgODQxLjM0NCA2NDAgNjQ5LjAwMjY2NyA2NDAgODk2IDM4NCA4OTYgMzg0IDQyMi4zMzYgMTEzLjEwOTMzMyAxODIuNDY0IDE2OS43OTIgMTE4LjY1NiA5MTMuODc3MzMzIDc3Ny41NTczMzMgODU3LjE5NDY2NyA4NDEuMzQ0WiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"},34:function(M,e){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsKQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBpZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTQ0MjM3Mzg5Nl80NzU0NDU1LmVvdD8jaWVmaXgiKSBmb3JtYXQoImVtYmVkZGVkLW9wZW50eXBlIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNDQyMzczODk2XzQ3NTQ0NTUud29mZiIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTQ0MjM3Mzg5Nl80NzU0NDU1LnR0ZiIpIGZvcm1hdCgidHJ1ZXR5cGUiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE0NDIzNzM4OTZfNDc1NDQ1NS5zdmcjaWZvbnQiKSBmb3JtYXQoInN2ZyIpOyB9CgpdXT48L3N0eWxlPjwvZGVmcz48ZyBjbGFzcz0idHJhbnNmb3JtLWdyb3VwIj48ZyB0cmFuc2Zvcm09InNjYWxlKDAuMTk1MzEyNSwgMC4xOTUzMTI1KSI+PHBhdGggZD0iTTI5OC42NjY2NjcgMTgxLjMzMzMzMyAyOTguNjY2NjY3IDExNy4zMzMzMzMgNzI1LjMzMzMzMyAxMTcuMzMzMzMzIDcyNS4zMzMzMzMgMTgxLjMzMzMzMyAyOTguNjY2NjY3IDE4MS4zMzMzMzNaTTcyNC4yNDUzMzMgMjM0LjY2NjY2N0M3MjQuOTQ5MzMzIDI0MS42ODUzMzMgNzI1LjMzMzMzMyAyNDguNzg5MzMzIDcyNS4zMzMzMzMgMjU2IDcyNS4zMzMzMzMgMzI1LjcxNzMzMyA2OTEuNzMzMzMzIDM4Ny40MzQ2NjcgNjQwIDQyNi4zNjhMNjQwIDkxNy4zMzMzMzMgMzg0IDkxNy4zMzMzMzMgMzg0IDQyNi4zNjhDMzMyLjI2NjY2NyAzODcuNDM0NjY3IDI5OC42NjY2NjcgMzI1LjcxNzMzMyAyOTguNjY2NjY3IDI1NiAyOTguNjY2NjY3IDI0OC43ODkzMzMgMjk5LjA1MDY2NyAyNDEuNjg1MzMzIDI5OS43MzMzMzMgMjM0LjY2NjY2N0w3MjQuMjQ1MzMzIDIzNC42NjY2NjdaTTUxMiA1NzZDNTM1LjU3MzMzMyA1NzYgNTU0LjY2NjY2NyA1NTYuOTA2NjY3IDU1NC42NjY2NjcgNTMzLjMzMzMzMyA1NTQuNjY2NjY3IDUwOS43NiA1MzUuNTczMzMzIDQ5MC42NjY2NjcgNTEyIDQ5MC42NjY2NjcgNDg4LjQyNjY2NyA0OTAuNjY2NjY3IDQ2OS4zMzMzMzMgNTA5Ljc2IDQ2OS4zMzMzMzMgNTMzLjMzMzMzMyA0NjkuMzMzMzMzIDU1Ni45MDY2NjcgNDg4LjQyNjY2NyA1NzYgNTEyIDU3NloiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="},39:function(M,e,z){M.exports='<div id=bcid> <div class=barcode-content></div> <p class=tip>...载入中...</p> </div> <footer> <div class=fbt style="background-color: {{color}}" @tap=back>取　 消</div> <div class=fbt style="background-color: {{color}}" @tap=scanPicture>从相册选择</div> <div class="fbt more" style="background-color: {{color}}" @tap=flashSwitch()> <a href=javascript:void(0) class=flash> <img  onerror=\'this.src=\"../../static/img/placehold.png\"\' v-show=flash src='+z(34)+"> <img  onerror=\'this.src=\"../../static/img/placehold.png\"\' v-else src="+z(33)+"> </a> </div> </footer>"},52:function(M,e,z){var i,t;z(21),i=z(16),t=z(39),M.exports=i||{},M.exports.__esModule&&(M.exports=M.exports["default"]),t&&(("function"==typeof M.exports?M.exports.options||(M.exports.options={}):M.exports).template=t)}});