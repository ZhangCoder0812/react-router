import React from 'react';

import {HashRouter as Router , Route , NavLink} from 'react-router-dom'

/*
  1. 使用 NavLink 标签 配合 activeClassName 类型使用，可以实现点击高亮
     或者使用　activeStyle 将样式写在NavLink标签行内

  2. path 匹配的组件也可以使用 children ，但是无论路径是什么 会一直
     显示(渲染)这个组件，且这个组件必须是函数式组件。只有路径匹配上时
     props.match 才会有内容 否则为null

  3. router-router 跳转的无论是类组件还是函数式组件，props中都会包含一些
     信息。 例如： 1 history 用来做函数式导航(跳转)
                  2 location url地址信息
                  3 match 路由传参 参数信息
*/


import Home from './components/Home'
import News from './components/News'
import Profile from './components/Profile'
import About from './components/About'

import './css/index.css'

function App() {
  return (
    <div className="App">

        <Router>

            <NavLink to='/home' activeClassName='selected'>首页</NavLink>  <br/>
            <NavLink to='/news' activeClassName='selected'>新闻页</NavLink>  <br/>
            <NavLink to='/profile' activeClassName='selected'>个人中心</NavLink>  <br/>
            <NavLink to='/about' activeClassName='selected'>关于</NavLink>  <br/>

            <br/>
            <hr/>

            <Route path='/home' component={Home} />
           <Route path='/news' component={News} />
           <Route path='/profile' component={Profile} />
           <Route path='/about' children={About} />


        </Router>


    </div>
  );
}

export default App;
