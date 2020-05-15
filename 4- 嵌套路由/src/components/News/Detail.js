import React  from 'react'

function Detail (props) {
    let {news_id,news_type} = props.match.params
    return (
        <div>
            <h3>新闻详情</h3>
            <p>新闻ID：{news_id} --- 新闻类型：{news_type}</p>
        </div>
    )
}

export default Detail