import React, { Component } from 'react'
import PubSub  from 'pubsub-js'
// import axios   from 'axios'

export default class Search extends Component {


    search = async() => {
        //获取用户输入(连续解构赋值+重命名)
        const {keyWordElement : {value: keyword} } = this
        console.log(keyword);

        //发送请求前通知List更新状态
        // this.props.updateAppState({isFirst:false, isLoading:true})
        PubSub.publish('changeState', {isFirst:false, isLoading:true})
        
        //#region 发送网络请求
        /*
        axios.get(`http://localhost:3000/api1/search/users2?q=${keyword}`).then(
            response => {
                console.log('成功了', response.data)
                //请求成功后通知List更新状态
                // this.props.updateAppState({isLoading:false, users: response.data.items, err:''})
                PubSub.publish('changeState', {isLoading:false, users: response.data.items, err:''})
            }, error => {
                console.log('失败了', error)
                //请求失败后通知List更新状态
                // this.props.updateAppState({isLoading:false, err:error.message})
                PubSub.publish('changeState', {isLoading:false, err:error.message})
            }
        )*/
        //#endregion

        // 发送网络请求
        // fetch(`/api1/search/users2?q=${keyword}`).then(
        //     response => { 
        //         console.log('联系服务器成功了')
        //         return response.json()
        //     },
        //     error => { 
        //         console.log('联系服务器失败了', error)
        //     }
        // ).then(
        //     response => { 
        //         console.log('成功了', response)
        //         PubSub.publish('changeState', {isLoading:false, users: response.items, err:''})
        //     },
        //     error => { 
        //         console.log('失败了', error)
        //         PubSub.publish('changeState', {isLoading:false, err:error.message})
        //     }
        // )
            
        //发送网络请求优化
        try {
            const response= await fetch(`/api1/search/users2?q=${keyword}`)
			const data = await response.json()
            console.log("data", data)
            PubSub.publish('changeState', {isLoading:false, users: data.items, err:''})
        } catch (error) {
            console.log('请求错误', error)
            PubSub.publish('changeState', {isLoading:false, err:error.message})
        }
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={ c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />
                    &nbsp;<button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
