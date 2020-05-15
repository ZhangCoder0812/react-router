import React from 'react';

import {HashRouter as Router , Route ,Link,Switch ,Redirect} from 'react-router-dom'

/*
    react-router 匹配路由时默认从上到下一直匹配
    使用 exact 精准匹配
    Switch 匹配到一个就停止 不会向下继续匹配
*/


import Home from './components/Home'
import News from './components/News'
import Profile from './components/Profile'
import NotFount from './components/NotFount'



function App() {
  return (
    <div className="App">

        <Router>

            <Link to='/'  >首页</Link>  <br/>
            <Link to='/home'  >首页</Link>  <br/>
            <Link to='/news' >新闻页</Link>  <br/>
            <Link to='/profile' >个人中心</Link>  <br/>

            <br/>
            <hr/>

            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/home' component={Home} />
                {/*
                    <Route path='/:name' component={()=>{
                        return (
                            <div>路由传参匹配，测试Switch</div>
                        )
                    }} /
                >*/}
                <Route path='/news' component={News} />
                <Route path='/profile' component={Profile} />

                {/* 404 匹配组件 不用写path  */}
                <Route component={NotFount} />

                {/*

                      或者使用 Redirect 配置404页面 表示路径都匹配不到时候
                      跳转到 /notfound

                      <Route path='/notfound' component={NotFount} />
                      <Redirect from='*' to='/notfound'></Redirect>

                */}

            </Switch>




        </Router>


    </div>
  );
}

export default App;
