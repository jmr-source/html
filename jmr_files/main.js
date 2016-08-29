/**
 * Created by MAJIANGTAO on 2015/10/15.
 */

$(function(){
    var setTopbg = function () {
        var top = $(window).scrollTop();
        if(top>0){
            $('.site-top').css('background-color','rgba(0, 0, 0, 0.8)');
        }else{
            $('.site-top').css('background-color','rgba(0, 0, 0, 0.3)');
        }
        if(top > 550){
            $('.gotoTop').show();
        }else{
            $('.gotoTop').hide();
        }
    };
    setTopbg();
    $(window).scroll(function (e) {
        setTopbg();
    });

    if(bugCloseStorage.getItem('token') != null){
        $.ajax({
            type:'get',
            url:GLOBAL.URL+'user/heartBeat',
            data:{token:bugCloseStorage.getItem('token')},
            dataType:'json',
            success: function (data) {
                if(!data.success){
                    bugCloseStorage.delItem('token');
                }
            },
            error: function () {
                bugCloseStorage.delItem('token');
            }
        });
        if(bugCloseStorage.getItem('userObj') == null){
            bugCloseStorage.delItem('token');
            $('.reg-login').show();
        }else{
            var userObj = JSON.parse(bugCloseStorage.getItem('userObj'));
            $('.reg-login').html('<p class="currUserInfo"><img src="'+userObj.headImageUrl+'" class="headImage" alt="'+userObj.email+'" title="'+userObj.email+'"> <span class="textOverHiden pd42" alt="'+userObj.email+'" title="'+userObj.email+'">'+strRegExp(userObj.userName)+'</span> <span class="logout"><i class="fa fa-power-off"></i></span></p>').show();
        }
        $('.reg-login .logout').click(function () {
            layer.confirm('确定退出登录？',{title:'提示',move:false},function () {
                var loadIngTips = '';
                loadIngTips = setTimeout(function () {
                    layer.msg('<i class="fa fa-spinner fa-spin"></i> 正在退出',{time:5*60*1000,shade:[0.4 ,'#000',true]});
                },GLOBAL.TIME);
                $.ajax({
                    type:'get',
                    url:GLOBAL.URL+'user/logout',
                    data:{token:bugCloseStorage.getItem('token')},
                    dataType:'json',
                    success: function (data) {
                        clearTimeout(loadIngTips);
                        if(data.success){
                            layer.msg('退出成功');
                            bugCloseStorage.delItem('token');
                            bugCloseStorage.delItem('userObj');
                            bugCloseStorage.delItem('bug_id');
                            window.location.href = 'login.html'
                        }else{
                            layer.msg('退出登录失败');
                        }
                    },
                    error: function () {
                        layer.msg('请求失败');
                    }
                });
            });
        });
    }else{
        $('.reg-login').show();
    }

    $('.gotoTop').click(function () {
        $('html,body').animate({scrollTop:0},300);
    });
    $('.gotoBottom').click(function () {
        $('html,body').animate({scrollTop:$(document).height()},300);
    });

    //功能详解
    $('.easyMenu li').click(function(){
        var $this = $(this);
        $('.easyMenu li span').removeClass('actived');
        $this.find('span').addClass('actived');
        $('.easyPage .title').text($this.find('span').text());
        $('.easyPage .cell').hide();
        $('.easyPage .cell').eq($this.index()).show();
    });

    isInternetExplorer();
});

