<template>
    <div class="indexView">
        <div class="wrapper">
            <!-- 头部开始 -->
            <div class="top">
                <div class="touxiang">
                    <img src="../../assets/myedu/xj.png" alt="">
                </div>
                <span>马小帅</span>
            </div>
        </div>
        <!-- 头部结束 -->
        <div class="banner">
            <img src="../../assets/myedu/banner.png" alt="">
        </div>
        <div class="message_2">
            <span class="message_title"> <i> 消息</i> </span>
            <span class="message_type">考勤</span>
            <span class="message_content">还有4分钟就要上课了，记得打卡有4分钟就要上课了，记得打卡</span>
        </div>
        <!-- 应用开始 -->
        <div class="wrapper">
            <div class="wrapper_top">
                <div class="blue"></div>
                <span class="title"> <i> 应用广场</i> </span>
                <span class="more">更多>></span>
            </div>
            <div class="line"></div>
            <div class="wrapper_bottom">
                <ul>
                    <li class="application">
                        <img src="../../assets/myedu/kg.png" alt="">
                        <p>考勤</p>
                    </li>
                    <li class="application">
                        <img src="../../assets/myedu/kg.png" alt="">
                        <p>考勤</p>
                    </li>
                    <li class="application">
                        <img src="../../assets/myedu/kg.png" alt="">
                        <span class="small">NEW</span>
                        <p>考勤</p>
                    </li>
                    <li class="application">
                        <img src="../../assets/myedu/kg.png" alt="">
                        <p>考勤</p>
                    </li>
                    <li class="application">
                        <img src="../../assets/myedu/kg.png" alt="">
                        <p>考勤</p>
                    </li>
                    <li class="application">
                        <img src="../../assets/myedu/kg.png" alt="">
                        <p>考勤</p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 应用结束 -->
        <div class="wrapper_3">
            <div class="wrapper_top">
                <div class="blue"></div>
                <span class="title"> <i>通知</i> </span>
                <span class="more">更多>></span>
            </div>
            <div class="line"></div>
            <div class="gonggao">
                <p class="biaoti">欢迎使用青峰教务系统</p>
                <p class="continer">青峰教务系统是青峰软件有限公司专为小学、初 中和高中研发的智能化校园教务办公系统，旨在 解决学校教务办公、家长查询...
                </p>
                <div class="time">
                    <img src="../../assets/myedu/time.png" alt="">
                    <span>5分钟前</span>
                </div>
                <div class="line"></div>
            </div>
            <div class="gonggao">
                <p class="biaoti">欢迎使用青峰教务系统</p>
                <p class="continer">青峰教务系统是青峰软件有限公司专为小学、初 中和高中研发的智能化校园教务办公系统，旨在 解决学校教务办公、家长查询...
                </p>
                <div class="time">
                    <img src="../../assets/myedu/time.png" alt="">
                    <span>5分钟前</span>
                </div>
                <div class="line"></div>
            </div>
            <div class="gonggao">
                <p class="biaoti">欢迎使用青峰教务系统</p>
                <p class="continer">青峰教务系统是青峰软件有限公司专为小学、初 中和高中研发的智能化校园教务办公系统，旨在 解决学校教务办公、家长查询...
                </p>
                <div class="time">
                    <img src="../../assets/myedu/time.png" alt="">
                    <span>5分钟前</span>
                </div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.indexView{
    font-family: '微软雅黑';
}
.top{
    padding: 0 15px;
    width: calc(100% - 30px);
    height: 44px;
    background: #fff;
    display: flex;
    align-items: center;
}
.touxiang{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
    margin-right: 16px;
}
.touxiang img{
    width: 100%;
}
.top span{
    font-size: 17px;
    color: #4185de;
    width: 280px;
}
.message{
    width: 20px;
    height: 17px;
    float: right;
}
.message img{
    width: 100%;
}
.new{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ff1616;
    position: relative;
    left: 15px;
    bottom: 20px;
}
.banner{
    width: 100%;
    height: 173px;
}
.banner img{
    width: 100%;
}
.message_2{
    /* width:calc(100% - 0.6px); */
    padding: 15px;
    background: #fff;
}
.message_title{
    font-size: 18px;
    color: #333;
    font-weight: 600;
    float: left;
}
.message_type{
    font-size: 14px;
    color: #f2b504;
    background: #fff7e5;
    border: solid  1px #f2b504;
    border-radius: 4px;
    padding: 2px 3px;
    margin-left: 8px;
    margin-right: 8px;
    float: left;
}
.message_content{
    display: block;
    font-size: 16px;
    color: #333;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.small{
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    background: #ff1b1b;
    border: solid 2px #fff;
    padding: 3px 6px;
    box-shadow: 0 8px 10px #ffbec3;
    border-radius: 12px 12px 12px 0;
    /* position:relative;
    left: 0.2px;
    bottom: 0.2px; */
    position: absolute;
    top: -12px;
    right: -18px;
}


/* 应用开始 */
.wrapper{
    width: 100%;
    background:#fff;
}
.wrapper_top{
    width:calc(100% - 18px);
    padding: 12px 0px 12px 18px;
    margin-top: 10px;
}
.blue{
    width: 3px;
    height: 16px;
    border-radius: 3px;
    background: #4185de;
    display: inline-block;
}
.title{
    font-size: 18px;
    color: #333;
    font-weight: 600;
    margin-left: 5px;
}
.more{
    font-size: 16px;
    color: #999;
    float: right;
}
.line{
    width: 100%;
    height: 1px;
    background: #e5e5e5;
}
.wrapper_bottom{
    overflow: hidden;
    padding: 30px 15px 0 15px;
    background: #fff;
    text-align: center;
}
.application{
    width: 25%;
    float: left;
    margin-bottom: 30px;
    position: relative;
}
.application img{
    width: 56px;
    height: 56px;;
    display: inline-block;
}
.application p{
    color: #333;
    font-size: 16px;
    margin-top:5px;
}

.gonggao{
    padding:20px 18px 0 18px;
    background: #fff;
    /* border-bottom: solid 1px #e5e5e5; */
}
.biaoti{
    font-size: 18px;
    color: #333;
    font-weight: 600;
    position: relative;
}
.continer{
    font-size: 16px;
    color: #666;
    text-indent: 2em;
    margin-top: 7px;
}
.time{
    margin-top: 7px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.time img{
    width: 14px;
    height: 14px;
    /* float: left; */
}
.time span{
    color: #999;
    font-size: 15px;
    margin-left: 8px;
}
/* 公告开始 */
.small_2{
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    background: #ff1b1b;
    border: solid 2px #fff;
    padding: 7px 12px;
    box-shadow: 0 8px 10px #ffbec3;
    border-radius: 8px 8px 8px 0;
    position: absolute;
    top: 0;
    right:0;
}
.wrapper_3{
    width: 100%;
    background:#fff;
    margin-bottom:49px;
}
</style>

