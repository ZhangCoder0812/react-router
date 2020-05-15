import React  from 'react'

function Detail (props) {
    let {news_id,news_type} = props.match.params
    return (
        <div>
            <h3>新闻详情</h3>
            <p>新闻ID：{news_id} --- 新闻类型：{news_type}</p>
            <hr/>
            <button onClick={()=>{handleback(props)}}>回到首页</button>
        </div>
    )

}
const handleback=(props)=>{

    props.history.push('/home',{info:'从新闻页面跳过来'})

}

export default Detail