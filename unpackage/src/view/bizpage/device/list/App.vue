/**
 * @file 店铺列表主组件 
 * @Author yupeng 
 * @private
 */

<template>
	<nonetworkmask :disnonetworkmask.sync="disnonetworkmask" :top="45" :bottom="0"></nonetworkmask>
	<div class="deviceList">
		<p class="conditions">
			<a href="javascript: void(0)" @tap="selectAddress">{{address.county || address.city || address.province}}</a>
			<a href="javascript: void(0)" @tap="selectType">{{type.child.text || type.text}}</a>
			<a href="javascript: void(0)" @tap="selectSortType">{{sortType.text}}</a>
		</p>
		<div id="scroll" class="mui-scroll-wrapper">
			<div id="pullrefresh" class="mui-scroll">
				<img class="advertisement" src="http://img0.imgtn.bdimg.com/it/u=3660483257,1608558041&fm=15&gp=0.jpg">
				<div class="oneStore" @tap="gotoDetail('id')">
					<img src="http://img1.imgtn.bdimg.com/it/u=1945716465,2733267266&fm=23&gp=0.jpg" />
					<div class="storeInfo">
						<p class="mui-ellipsis">店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称</p>
						<p>北京 北京市 海淀区</p>
						<p>
							<img src="../../../../static/img/mine/shimingrenzheng.svg">
							<img src="../../../../static/img/mine/noshimingrenzheng.svg">
							<img src="../../../../static/img/mine/qiyerenzheng.svg">
							<img src="../../../../static/img/mine/noqiyerenzheng.svg">
							<span class="mui-pull-right">距离：9999KM</span>
						</p>
						<p><a href="javascript:void(0)">进入店铺</a><span class="mui-pull-right">...</span></p>
					</div>
				</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import nonetworkmask from 'component/mask/NoNetWorkMask';
	import muiUtils from 'common/muiUtils';
	import log from 'common/logUtils';
	import api from 'api';
	import CONSTS from 'common/consts';
	import {
		cityData3Lev
	} from 'common/cityData';
	export default {
		data: function() {
			var cityPicker = new mui.PopPicker({
				layer: 3
			});
			for(var cityData of cityData3Lev) {
				for(var city of cityData.children) {;
					city.children.unshift({
						value: -1,
						area_parent_id: city.value,
						text: '全' + city.text,
						area_sort: 0,
						area_deep: 3,
						description: null
					});
				}
				cityData.children.unshift({
					value: -1,
					area_parent_id: cityData.value,
					text: '全' + cityData.text,
					area_sort: 0,
					area_deep: 2,
					description: null
				});
			}
			cityData3Lev.unshift({
				value: -1,
				area_parent_id: 0,
				text: '全国',
				area_sort: 0,
				area_deep: 1,
				description: null
			});
			cityPicker.setData(cityData3Lev);

			var typePicker = new mui.PopPicker({
				layer: 2
			});
			var typeData = [{
				value: '0',
				text: '不限',
			}, {
				value: '1',
				text: '全新',
				children: [{
					value: '10',
					text: '不限',
				}, {
					value: '11',
					text: '彩钢流水线',
				}, {
					value: '12',
					text: '单板机',
				}, {
					value: '13',
					text: '剪板机',
				}, {
					value: '14',
					text: '折弯机',
				}, {
					value: '15',
					text: '数控切割机',
				}, {
					value: '16',
					text: '阻焊机',
				}, {
					value: '17',
					text: '抛丸机',
				}, {
					value: '18',
					text: '二保焊机',
				}, {
					value: '19',
					text: '其他',
				}]
			}, {
				value: '2',
				text: '二手',
				children: [{
					value: '20',
					text: '不限',
				}, {
					value: '21',
					text: '彩钢流水线',
				}, {
					value: '22',
					text: '单板机',
				}, {
					value: '23',
					text: '剪板机',
				}, {
					value: '24',
					text: '折弯机',
				}, {
					value: '25',
					text: '数控切割机',
				}, {
					value: '26',
					text: '阻焊机',
				}, {
					value: '27',
					text: '抛丸机',
				}, {
					value: '28',
					text: '二保焊机',
				}, {
					value: '29',
					text: '其他',
				}]
			}];
			typePicker.setData(typeData);
			var sortTypePicker = new mui.PopPicker({
				layer: 1
			});
			sortTypePicker.setData([{
				value: 0,
				text: '默认排序',
			}, {
				value: 1,
				text: '时间',
			}, {
				value: 2,
				text: '距离',
			}]);
			return {
				cityPicker: cityPicker,
				typePicker: typePicker,
				sortTypePicker: sortTypePicker,
				searchValue: plus.webview.currentWebview().searchValue || '',
				address: {
					province: '全国',
					provinceid: 0,
					city: null,
					cityid: null,
					county: null,
					countyid: null
				},
				type: {
					value: '0',
					text: '类目',
					child: {}
				},
				sortType: {
					value: 0,
					text: '默认排序',
				},
				disnonetworkmask: false,
				pullrefresh: null
			};
		},
		created: function() {

		},
		methods: {
			gotoDetail: function(id) {
				muiUtils.openWindow('deviceinfo.html', {
                    extras: {
                        'id': id
                    }
               });
			},
			doSearch: function() {
				//this.$broadcast('reflashlist');
			},
			getData() {
				console.log('getData...');
				this.pullrefresh.endPullDownToRefresh();
				this.pullrefresh.refresh(true);
			},
			loadMore() {
				console.log('loadMore...');
				this.pullrefresh.endPullUpToRefresh(); 
			},
			itemtap: function(item) {

			},
			reload() {
				//this.$broadcast('reflashlist');
			},
			selectAddress: function() {
				var that = this;
				this.cityPicker.show(function(items) {
					that.address = {
						province: items[0].text,
						provinceid: items[0].value,
						city: items[1].value && items[1].value !== -1 ? items[1].text : undefined,
						cityid: items[1].value && items[1].value !== -1 ? items[1].value : undefined,
						county: items[2].value && items[2].value !== -1 ? items[2].text : undefined,
						countyid: items[2].value && items[2].value !== -1 ? items[2].value : undefined
					}
				});
			},
			selectType: function() {
				var that = this;
				this.typePicker.show(function(items) {
					that.type = {
						text: items[0].text === '不限' ? '类目' : items[0].text,
						value: items[0].value,
						child: items[1] ? {
							text: items[1].text && items[1].text !== '不限' ? items[1].text : undefined,
							value: items[1].text && items[1].text !== '不限' ? items[1].value : undefined,
						} : {}
					}

				});
			},
			selectSortType: function() {
				var that = this;
				this.sortTypePicker.show(function(items) {
					that.sortType = {
						text: items[0].text,
						value: items[0].value
					}

				});
			}
		},
		watch: {
			searchValue: function() {
				this.doSearch();
			}
		},
		ready: function() {
			var deceleration = mui.os.ios ? 0.003 : 0.0009;
			mui('.mui-scroll-wrapper').scroll({
				bounce: true,
				indicators: true, //是否显示滚动条
				deceleration: deceleration
			});
			var that = this;
			this.pullrefresh = mui('#pullrefresh').pullToRefresh({
				down: {
					auto: false,
					offset: 50,
					callback: function() {
						that.getData();
					}
				},
				up: {
					offset: 50,
					callback: function() {
						that.loadMore();
					}
				}
			});
		},
		components: {
			nonetworkmask
		}
	};
</script>
<style>
	.deviceList {
		position: absolute;
		top: 45px;
		bottom: 0;
		width: 100%;
	}
	
	.deviceList .mui-scroll-wrapper {
		top: 45px;
	}
	
	.deviceList .conditions {
		line-height: 25px;
		padding: 10px 0;
		text-align: center;
	}
	
	.deviceList .conditions a {
		color: #000;
		width: 32%;
		position: relative;
	}
	
	.deviceList .conditions a:nth-child(1),
	.deviceList .conditions a:nth-child(2) {
		border-right: solid 1px #ddd;
	}
	
	.deviceList .conditions a:after {
		content: "";
		position: absolute;
		width: 4px;
		height: 4px;
		margin-left: 5px;
		top: 10px;
		box-sizing: border-box;
		border-top: 4px solid #aaa;
		border-right: 4px solid transparent;
		border-left: 4px solid transparent;
	}
	
	.deviceList .advertisement {
		width: 100%;
		height: 120px;
		margin-bottom: 8px;
	}
	
	.oneStore {
		padding: 10px;
		background-color: #fff;
		margin-bottom: 8px;
	}
	
	.oneStore img {
		float: left;
		width: 106px;
		height: 106px;
	}
	
	.oneStore .storeInfo {
		padding-left: 116px;
		min-height: 80px;
	}
	
	.oneStore .storeInfo p {
		font-size: 13px;
	}
	
	.oneStore .storeInfo p:nth-child(1) {
		color: #000;
		font-size: 14px;
	}
	
	.oneStore .storeInfo p:nth-child(3) {
		overflow: hidden;
		padding: 5px 0;
	}
	
	.oneStore .storeInfo p:nth-child(3) img {
		width: 19px;
		height: 19px;
		margin-right: 4px;
	}
	
	.oneStore .storeInfo p:nth-child(4) a {
		color: #fff;
		background-color: #26c6da;
		line-height: 1;
		padding: 5px 8px;
		border-radius: 3px;
		margin: 5px 0;
	}
	
	.oneStore .storeInfo p:nth-child(4) span {
		line-height: 1;
		margin-top: 4px;
		font-size: 19px;
		font-weight: 800;
		color: #777;
	}
</style>