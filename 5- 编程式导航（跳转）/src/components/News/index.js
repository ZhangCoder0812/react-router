import React , {Component} from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from "./Detail";
class News  extends Component{
    render () {
        return (
            <div>

                 <h3>News</h3>
                <hr/>
                <ul>
                    <li><Link to='/news/detail/1/娱乐新闻' >新闻1</Link> </li>
                    <li><Link to='/news/detail/2/体育新闻' >新闻2</Link> </li>
                    <li><Link to='/news/detail/3/时政新闻' >新闻3</Link> </li>
                </ul>
                <hr/>

                <Route path='/news/detail/:news_id/:news_type' component={Detail} />


            </div>
        )
    }
}

export default News