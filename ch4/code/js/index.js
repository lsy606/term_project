/** 
 * 乐购商店首页js
 * 2019-05-12 by 石公子
 */
//当页面加载完毕
$(function() {
        $('#banner').tyslide({
            boxh: 460, //盒子的高度
            w: 1000, //盒子的宽度
            h: 390, //图片的高度
            isShow: true, //是否显示控制器
            isShowBtn: true, //是否显示左右按钮
            controltop: 40, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 20, //控制按钮宽度
            controlsH: 20, //控制按钮高度
            radius: 0, //控制按钮圆角度数
            controlsColor: "#d7d7d7", //普通控制按钮的颜色
            controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
            isShowNum: true //是否显示数字
        });
    })
    // 图书电子书轮播
$(function() {
    $('#ebooks-bannner').tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
    });
    var $lis = $('.ebooks .ebooks-nav>li');
    $lis.mouseover(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        var $ebooksList = $('.ebooks-list');
        $ebooksList.eq(index).show().siblings('.ebooks-list').hide();
    })
    $('.ebooks .right-box ul>li').mouseenter(function() {
        $(this).siblings().find('.desc').hide();
        $(this).siblings().find('e.books-title').show();

        //当前:隐藏标题
        $(this).find('.ebboks-title').hide();
        $(this).find('.desc').show();


    })
})