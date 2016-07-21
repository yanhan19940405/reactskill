import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return ( <div className="main-wrapper">
    <header>
       
        <nav className="nav">
            <div id="logo" className="logo"><a title="成都云创新" className="hid nav"
                                           href="">成都云创新</a></div>
            <ul className="nav-group">
                <li><a className="nav index" title="公司介绍" href="#banner">公司介绍</a></li>
                <li><a className="nav goodness" title="公司文化" href="#goodness">公司文化</a></li>
                <li><a className="nav demo_show" title="产品种类" href="#demo">产品种类 </a></li>
                <li><a className="nav about_me" title="技术体系" href="#about">技术体系</a></li>
                <li><a className="nav content_me" title="基本信息" href="#content">基本信息</a></li>
            </ul>

        </nav>
        

    </header>

    <div id="banner">
        <div className="inner">
            <div className="hr_up"></div>
            <h1 className="move">公司介绍</h1>
            <h1 className="move"></h1>

            <div className="hr_down "></div>
            <p className="banner_text ">
                <span className="myself"></span> 公司描述文本</p>
            <button type="button" className="down">了解更多 </button>

        </div>
    </div>

    <div className="content">

        <section id="goodness" className="green-section">
            <div className="wrapper">
                <div>
                    <h2 className="move2 "><span className="fa fa-flag-checkered"></span>公司文化</h2>

                    <div className="hr  green"></div>
                    <p className="move3 ">
                       公司提倡一种精英主义文化
                        <br/>
                      2015年获得了很多荣耀，比如....
                       </p>
                </div>
                <div className="item-group">
                    <span className="item">敢于创新</span>
                    <span className="item">团队协作</span>
                    <span className="item">追求细节</span>
                </div>
            </div>
        </section>

        <section id="demo" className="gray-section">
            <h2 className="demo_h2"><span className="fa fa-terminal"></span>产品种类</h2>

            <div className="demo">
                <div className="img_demo">
                    <a href="http://ychmusic.com/" title="音约吧" target="_blank"> <img
                            className="moveimg1 " src="images/park.png" alt="音约吧"/>
                    </a>
                </div>
                <div className="text_demo movetext1 ">
                    <h2>音约吧，简简单单玩音乐</h2>

                    <p>这里你能约到一起玩乐器的伙伴</p>
                      <p> 这里你能约到一起看演出的同伴</p>
                      <p>这里你能约到最优秀的乐器老师
                    </p><br/>

                   
                </div>
            </div>
            <div className="demo">
                <div className="text_demo  movetext2">
                    <h2>英菲尔幼儿园展示页面</h2>

                    <p>&nbsp;&nbsp;这是一家专业幼儿教育场所。
                    </p><br/>

                    
                </div>
                <div className="img_demo ">
                    <a href="http://www.ifehome.com/" title="英菲尔幼儿园" target="_blank"><img
                            className="moveimg2 "
                            src="images/park2.png"
                            alt="英菲尔幼儿园"/></a>
                </div>
            </div>

        </section>
        <section id="about" className="section purple-section">
            <div className="wrapper">
                <div className="heading-wrapper">
                    <h2 className="cardh2 "><span className="fa fa-key"></span>公司结构</h2>

                    <div className="hr cardhr"></div>
                    <div className="sub-heading  cardtext ">
                     我们分工明确，互帮互助，共同实现成就事业的梦想
                    </div>
                </div>
                <div className="card-group clear">
                    <div className="card  cardone">
                        <h3>开发部门</h3>


                        <div id="myStat" data-dimension="170" data-text="25%"  data-info="开发部门" data-width="5"
                             data-fontsize="38"
                             data-percent="25" data-fgcolor="yellow" data-bgcolor="#4ebdd6"data-fill="transparent"></div>
                       <div >详细描述1</div>
                    </div>
                    <div className="card  cardtow">
                        <h3>产品部</h3>

                        <div id="myStat2" data-dimension="170" data-text="25%" data-info="产品部" data-width="5"
                             data-fontsize="38" data-percent="25" data-fgcolor="#330033" data-bgcolor="#4ebdd6"
                            data-fill="transparent"></div>
                        <div >详细描述2</div>
                    </div>
                    <div className="card cardthree cardvip">
                        <h3>UI设计</h3>

                        <div id="myStat3" data-dimension="170" data-text="25%" data-info="UI设计" data-width="5"
                             data-fontsize="38" data-percent="25" data-fgcolor="blue" data-bgcolor="#4ebdd6" data-fill="transparent"
                             data-icon="fa-task"></div>
                        <div >详细描述3</div>
                    </div>
                    <div className="card cardfour">
                        <h3>市场营销</h3>


                        <div id="myStat4" data-dimension="170" data-text="25%" data-info="市场营销" data-width="5"
                             data-fontsize="38" data-percent="25" data-fgcolor="black" data-bgcolor="#4ebdd6" data-fill="transparent"></div>
                             <div >详细描述4</div>
                    </div>
                </div>
            </div>
        </section>
        <section className="info">
            <div className="info-wrap">
                <h2><span className="fa fa-street-view "></span>基本信息</h2>
                
                <ul style={{"marginLeft" : "45%"}}>

                   <li>联系方式：XXXXXXX</li>
                    <li>地址：XXXXXX</li>
                    <li>QQ：xxxxxx</li>
                    <li>微信公众号：xxx</li>
                    <li>邮箱：XXXXXXXX</li>
                    <li>公司官网：XXXXXXXX</li>
                </ul>
            </div>
        </section>
        <section className="section" id="content">
            <div className="wrap" id="wrap">
                <h1><span className="fa fa-send"></span>联系我们</h1>

                <div className="fa fa-hand-o-down fa-3x"></div>
                <div id='form_wrap'>
                    <form action="./php/send.php" method="post">
                         <p>您好，XXX,</p>
                        <label htmlFor="name">  姓名: </label>
                        <input type="text" name="name"  required="required" placeholder="姓名"
                               id="name"/>
                        <label htmlFor="name">  联系方式: </label>
                        <input type="text" name="name"  required="required" placeholder="联系方式"
                               id="name"/>
                        <label htmlFor="name">  邮箱: </label>
                        <input type="text" name="name"  required="required" placeholder="邮箱"
                               id="name"/>
                        <label htmlFor="message">  您的信息：</label>
                        <textarea name="message" placeholder="您的信息" required="required" id="message"></textarea>

                        <input type="submit" name="submit" value="提交"/>
                    </form>
                </div>
            </div>
        </section>
    </div>
   
    <footer>
        <ul className="share-group">
            <li><i className="fa  fa-facebook"></i></li>
            <li><i className="fa  fa-google-plus"></i></li>
            <li><i className="fa  fa-linkedin"></i></li>
            <li><i className="fa  fa-twitter"></i></li>
            <li><i className="fa  fa-wechat"></i></li>
            <li><i className="fa  fa-weibo"></i></li>
            <li><i className="fa  fa-yahoo"></i></li>
            <li><i className="fa  fa-youtube-square"></i></li>
        </ul>
    <span className="copy">
       <i className="fa fa-copyright"></i>云创新2015-2016
    </span>
    </footer>
   
	</div>)
  }
}

export default App
