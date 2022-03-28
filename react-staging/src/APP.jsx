import React, { Component } from 'react'
import {Button, DatePicker, ConfigProvider} from 'antd'
import {WechatOutlined} from '@ant-design/icons'

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const {RangePicker} = DatePicker
export default class App extends Component {
  render() {
	return (
	  <div>
		  	<ConfigProvider locale={zhCN}>
				App...
				<Button type='primary'>Primary Button</Button>
				<Button type='link'>Link Button</Button>
				<WechatOutlined/>
				<RangePicker></RangePicker>
			</ConfigProvider>
	  </div>
	)
  }
}
