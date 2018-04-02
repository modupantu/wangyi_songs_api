    var str = '';
    var urlLrc;//网址
    var songs;
    $.ajax({
        type: 'POST',
        url:'https://api.hibai.cn/api/index/index',
        data:{"TransCode":"020112","OpenId":"123456789","Body":{"SongListId":"141998290"}},
        success: function (data) {
            //console.log(data);
            songs = data.Body;
            for (var item in songs) {
        var element = songs[item];
                console.log(element);
                urlLrc = element.lrc;
                str += '<ul>';
                str += '<a href="./index.html?title=' + element.title + '">';
                str += '<li><img src=' + element.pic + '></li>';
                str += ' <li>歌名：' + element.title + '</li>';
                str += `<li>作者：${element.author}</li>`;
                str += '</a>';
                str += '<li class="audio"><audio id="audio" src=' + element.url + ' controls></audio></li>'
                str += '</ul>';
    }
    $('#div1').append(str);
        },
        error: function (err) {
            console.log(err)
        }
    })


    
            //时间处理
//        var time = element.time;
//        time = (parseInt(time / 60) + ':' + (time % 60 / 100).toFixed(2).slice(-2));
    

