//导入插件
import axios from 'axios'

export let getswiper = function(){
	return axios.get('../static/moke/swiper.json')
}

export let getdatas = function(){
	return axios.get('../static/moke/datas.json')
}
