import React from 'react';

import {HashRouter as Router , Route ,Link} from 'react-router-dom'

/*
  嵌套路由： 一般在后台系统中布局使用 (上 左 中)
*/


import Home from './components/Home'
import News from './components/News'
import Profile from './components/Profile'



function App() {
  return (
    <div className="App">

        <Router>

            <Link to='/home'  >首页</Link>  <br/>
            <Link to='/news' >新闻页</Link>  <br/>
            <Link to='/profile' >个人中心</Link>  <br/>

            <br/>
            <hr/>

            <Route path='/home' component={Home} />
            <Route path='/news' component={News} />
            <Route path='/profile' component={Profile} />



        </Router>


    </div>
  );
}

export default App;
