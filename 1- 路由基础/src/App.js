import React from 'react';

import {HashRouter as Router , Route , Link} from 'react-router-dom'

/*

1. BrowserRouter as Router 路由器
        之所以取别名是因为 react-router 提供了两个路由的容器
        BrowserRouter 和 HashRouter ，所有的操作都必须包含在该组件下面

        BrowserRouter 使用的是 H5 history 实现的SPA
        HashRouter   使用的是锚点实现的SPA

        开发阶段使用HashRouter 可以很好的看出页面是有hash跳转 不利于SEO优化（因为对于搜索来说 hash不是一个新的url地址 不会收录）
        上线使用BrowserRouter 更利于SEO优化

2. Route 路线的意思
         定义路径显示的组件

3. Link 类似于a链接
         实现声明式跳转  声明式路由


*/
import Home from './components/Home'
import News from './components/News'
import Profile from './components/Profile'



function App() {
  return (
    <div className="App">

        <Router>

            <Link to='/home'>首页</Link>  <br/>
            <Link to='/news'>新闻页</Link>  <br/>
            <Link to='/profile'>个人中心</Link>  <br/>
            {/*
             用 a 标签也可以
            <a href='#/profile'>个人中心</a>  <br/>  */}

            <br/>
            <hr/>
                            /* component 也可以写成 render */
            <Route path='/home' component={Home} />
           <Route path='/news' component={News} />
           <Route path='/profile' component={Profile} />

        </Router>


    </div>
  );
}

export default App;
