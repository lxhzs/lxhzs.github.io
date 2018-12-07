(function($){
  $('.article').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  $('.article2').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article2' + i);
    });
  });

  // if ($.fancybox){
  //   $('.fancybox').fancybox();
  // }


  // Change ol\ul list style
  $('.article ul, .article ol').each(function (i, elem) {
    $(elem).find('li').each(function(index, li) {
      var $li = $(li);

      if (!$li.children().hasClass('li-inner')) {
        $li.wrapInner('<span class="li-inner"></span>');
      }
    });
  });

  $('.article input[type="checkbox"]').each(function (i, elem) {
    var $elem = $(elem);
    var checked = elem.checked;
    var dom = '<span class="checkbox-wrap ' + (checked ? 'checked' : '') + '"></span>';

    if (!$elem.parent().hasClass('checkbox-wrap')) {
      var $parent = $elem.parent().parent();
      var text = $parent.text();

      $parent.html(dom + '<span class="check-content ' + (checked ? 'checked' : '') + '">' + text + '</span>');
    }
  });

  // // Avatar
  // var $mask = $('.about-me-mask');
  // $('.avatar').on('click', function () {
  //   if (!$mask.hasClass('open')) {
  //     $mask.addClass('open');
  //   }
  // });

  // $mask.on('click', function (e) {
  //   if (e.target.classList.contains('about-me-mask')) {
  //     $mask.removeClass('open');
  //   }
  // });

  // Back to top
  var $backToTop = $('#backToTop');
  var $articleMenu = $('#articleMenu');
  var $Toc = $('#toc');
  
  $(document).on('scroll', function () {
    var sX = $(document).scrollTop();
    if (sX > 100) {
      $backToTop.addClass('show');
      $articleMenu.addClass('show');
    }

    if (sX <= 100) {
      $backToTop.removeClass('show');
      $articleMenu.removeClass('show');
    }
    // if (sX > 200) {
    //   $Toc.addClass('show');
    // }

    if (sX <= 200) {
      $Toc.removeClass('show');
    }

  });

  $backToTop.on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
  });

  $('#articleMenu').click(function () {
    if($Toc.hasClass('show')){
      $Toc.removeClass('show');
    }else{
      $Toc.addClass('show');
    }
  });


// canvas
class Circle {
  //创建对象
  //以一个圆为对象
  //设置随机的 x，y坐标，r半径，_mx，_my移动的距离
  //this.r是创建圆的半径，参数越大半径越大
  //this._mx,this._my是移动的距离，参数越大移动
  constructor(x, y) {
      this.x = x;
      this.y = y;
      this.r = Math.random() * 5 ;
      this._mx = Math.random() ;
      this._my = Math.random() ;

  }

  //canvas 画圆和画直线
  //画圆就是正常的用canvas画一个圆
  //画直线是两个圆连线，为了避免直线过多，给圆圈距离设置了一个值，距离很远的圆圈，就不做连线处理
  drawCircle(ctx) {
      ctx.beginPath();
      //arc() 方法使用一个中心点和半径，为一个画布的当前子路径添加一条弧。
      ctx.arc(this.x, this.y, this.r, 0, 360)
      ctx.closePath();
      // ctx.fillStyle = 'rgba(219, 77, 82, 0.8)';
      ctx.fillStyle = 'rgba(204, 204, 204, 0.8)';
      ctx.fill();
  }

  drawLine(ctx, _circle) {
      let dx = this.x - _circle.x;
      let dy = this.y - _circle.y;
      let d = Math.sqrt(dx * dx + dy * dy)
      if (d < 150) {
          ctx.beginPath();
          //开始一条路径，移动到位置 this.x,this.y。创建到达位置 _circle.x,_circle.y 的一条线：
          ctx.moveTo(this.x, this.y);   //起始点
          ctx.lineTo(_circle.x, _circle.y);   //终点
          ctx.closePath();
          // ctx.strokeStyle = 'rgba(250, 168, 171, 0.5)';
          ctx.strokeStyle = 'rgba(220, 220, 220, 0.5)';
          ctx.stroke();
      }
  }

  // 圆圈移动
  // 圆圈移动的距离必须在屏幕范围内
  move(w, h) {
      this._mx = (this.x < w && this.x > 0) ? this._mx : (-this._mx);
      this._my = (this.y < h && this.y > 0) ? this._my : (-this._my);
      this.x += this._mx / 2;
      this.y += this._my / 2;
  }
}
//鼠标点画圆闪烁变动
class currentCirle extends Circle {
  constructor(x, y) {
      super(x, y)
  }

  drawCircle(ctx) {
      ctx.beginPath();
      //注释内容为鼠标焦点的地方圆圈半径变化
      //this.r = (this.r < 14 && this.r > 1) ? this.r + (Math.random() * 2 - 1) : 2;
      this.r = 8;
      ctx.arc(this.x, this.y, this.r, 0, 360);
      ctx.closePath();
      //ctx.fillStyle = 'rgba(0,0,0,' + (parseInt(Math.random() * 100) / 100) + ')'
      ctx.fillStyle = 'rgba(255, 77, 54, 0.6)'
      ctx.fill();

  }
}
//更新页面用requestAnimationFrame替代setTimeout
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let w = canvas.width = canvas.offsetWidth;
let h = canvas.height = canvas.offsetHeight;
let circles = [];
let current_circle = new currentCirle(0, 0)

let draw = function () {
  ctx.clearRect(0, 0, w, h);
  for (let i = 0; i < circles.length; i++) {
      circles[i].move(w, h);
      circles[i].drawCircle(ctx);
      for (j = i + 1; j < circles.length; j++) {
          circles[i].drawLine(ctx, circles[j])
      }
  }
  if (current_circle.x) {
      current_circle.drawCircle(ctx);
      for (var k = 1; k < circles.length; k++) {
          current_circle.drawLine(ctx, circles[k])
      }
  }
  requestAnimationFrame(draw)
}

let init = function (num) {
  for (var i = 0; i < num; i++) {
      circles.push(new Circle(Math.random() * w, Math.random() * h));
  }
  draw();
}
if(window.innerWidth <= 479 ){
  window.addEventListener('load', init(15));
}else if(window.innerWidth >= 480 && window.innerWidth <= 767){
  window.addEventListener('load', init(20));
}else{
  window.addEventListener('load', init(60));
}

// window.onmousemove = function (e) {
//   e = e || window.event;
//   current_circle.x = e.clientX;
//   current_circle.y = e.clientY;
// }
// window.onmouseout = function () {
//   current_circle.x = null;
//   current_circle.y = null;

// };

})(jQuery);

