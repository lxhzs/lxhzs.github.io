(function ($) {
  $('.article').each(function (i) {
    $(this).find('img').each(function () {
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function () {
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox) {
    $('.fancybox').fancybox();
  }

  $('.article2').each(function (i) {
    $(this).find('img').each(function () {
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function () {
      $(this).attr('rel', 'article2' + i);
    });
  });

  // if ($.fancybox){
  //   $('.fancybox').fancybox();
  // }


  // Change ol\ul list style
  $('.article ul, .article ol').each(function (i, elem) {
    $(elem).find('li').each(function (index, li) {
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
    if ($Toc.hasClass('show')) {
      $Toc.removeClass('show');
    } else {
      $Toc.addClass('show');
    }
  });


  // canvas
  // class Circle {
  //   //创建对象
  //   //以一个圆为对象
  //   //设置随机的 x，y坐标，r半径，_mx，_my移动的距离
  //   //this.r是创建圆的半径，参数越大半径越大
  //   //this._mx,this._my是移动的距离，参数越大移动
  //   constructor(x, y) {
  //       this.x = x;
  //       this.y = y;
  //       this.r = Math.random() * 5 ;
  //       this._mx = Math.random() ;
  //       this._my = Math.random() ;

  //   }

  //   //canvas 画圆和画直线
  //   //画圆就是正常的用canvas画一个圆
  //   //画直线是两个圆连线，为了避免直线过多，给圆圈距离设置了一个值，距离很远的圆圈，就不做连线处理
  //   drawCircle(ctx) {
  //       ctx.beginPath();
  //       //arc() 方法使用一个中心点和半径，为一个画布的当前子路径添加一条弧。
  //       ctx.arc(this.x, this.y, this.r, 0, 360)
  //       ctx.closePath();
  //       // ctx.fillStyle = 'rgba(219, 77, 82, 0.8)';
  //       ctx.fillStyle = 'rgba(204, 204, 204, 0.8)';
  //       ctx.fill();
  //   }

  //   drawLine(ctx, _circle) {
  //       let dx = this.x - _circle.x;
  //       let dy = this.y - _circle.y;
  //       let d = Math.sqrt(dx * dx + dy * dy)
  //       if (d < 150) {
  //           ctx.beginPath();
  //           //开始一条路径，移动到位置 this.x,this.y。创建到达位置 _circle.x,_circle.y 的一条线：
  //           ctx.moveTo(this.x, this.y);   //起始点
  //           ctx.lineTo(_circle.x, _circle.y);   //终点
  //           ctx.closePath();
  //           // ctx.strokeStyle = 'rgba(250, 168, 171, 0.5)';
  //           ctx.strokeStyle = 'rgba(220, 220, 220, 0.5)';
  //           ctx.stroke();
  //       }
  //   }

  //   // 圆圈移动
  //   // 圆圈移动的距离必须在屏幕范围内
  //   move(w, h) {
  //       this._mx = (this.x < w && this.x > 0) ? this._mx : (-this._mx);
  //       this._my = (this.y < h && this.y > 0) ? this._my : (-this._my);
  //       this.x += this._mx / 2;
  //       this.y += this._my / 2;
  //   }
  // }
  // //鼠标点画圆闪烁变动
  // class currentCirle extends Circle {
  //   constructor(x, y) {
  //       super(x, y)
  //   }

  //   drawCircle(ctx) {
  //       ctx.beginPath();
  //       //注释内容为鼠标焦点的地方圆圈半径变化
  //       //this.r = (this.r < 14 && this.r > 1) ? this.r + (Math.random() * 2 - 1) : 2;
  //       this.r = 8;
  //       ctx.arc(this.x, this.y, this.r, 0, 360);
  //       ctx.closePath();
  //       //ctx.fillStyle = 'rgba(0,0,0,' + (parseInt(Math.random() * 100) / 100) + ')'
  //       ctx.fillStyle = 'rgba(255, 77, 54, 0.6)'
  //       ctx.fill();

  //   }
  // }
  // //更新页面用requestAnimationFrame替代setTimeout
  // window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  // let canvas = document.getElementById('canvas');
  // let ctx = canvas.getContext('2d');
  // let w = canvas.width = canvas.offsetWidth;
  // let h = canvas.height = canvas.offsetHeight;
  // let circles = [];
  // let current_circle = new currentCirle(0, 0)

  // let draw = function () {
  //   ctx.clearRect(0, 0, w, h);
  //   for (let i = 0; i < circles.length; i++) {
  //       circles[i].move(w, h);
  //       circles[i].drawCircle(ctx);
  //       for (j = i + 1; j < circles.length; j++) {
  //           circles[i].drawLine(ctx, circles[j])
  //       }
  //   }
  //   if (current_circle.x) {
  //       current_circle.drawCircle(ctx);
  //       for (var k = 1; k < circles.length; k++) {
  //           current_circle.drawLine(ctx, circles[k])
  //       }
  //   }
  //   requestAnimationFrame(draw)
  // }

  // let init = function (num) {
  //   for (var i = 0; i < num; i++) {
  //       circles.push(new Circle(Math.random() * w, Math.random() * h));
  //   }
  //   draw();
  // }
  // if(window.innerWidth <= 479 ){
  //   window.addEventListener('load', init(15));
  // }else if(window.innerWidth >= 480 && window.innerWidth <= 767){
  //   window.addEventListener('load', init(20));
  // }else{
  //   window.addEventListener('load', init(60));
  // }

  // window.onmousemove = function (e) {
  //   e = e || window.event;
  //   current_circle.x = e.clientX;
  //   current_circle.y = e.clientY;
  // }
  // window.onmouseout = function () {
  //   current_circle.x = null;
  //   current_circle.y = null;

  // };

  window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 100);
      }
    );
  })();

  // now we will setup our basic variables for the demo
  var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    // full screen dimensions
    cw = window.innerWidth,
    ch = window.innerHeight,
    // firework collection
    fireworks = [],
    // particle collection
    particles = [],
    // starting hue
    hue = 120,
    // when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
    limiterTotal = 3,
    limiterTick = 0,
    // this will time the auto launches of fireworks, one launch per 80 loop ticks
    timerTotal = 80,
    timerTick = 0,
    mousedown = false,
    // mouse x coordinate,
    mx,
    // mouse y coordinate
    my;

  // set canvas dimensions
  canvas.width = cw;
  canvas.height = ch;

  // now we are going to setup our function placeholders for the entire demo

  // get a random number within a range
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  // calculate the distance between two points
  function calculateDistance(p1x, p1y, p2x, p2y) {
    var xDistance = p1x - p2x,
      yDistance = p1y - p2y;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }

  // create firework
  function Firework(sx, sy, tx, ty) {
    // actual coordinates
    this.x = sx;
    this.y = sy;
    // starting coordinates
    this.sx = sx;
    this.sy = sy;
    // target coordinates
    this.tx = tx;
    this.ty = ty;
    // distance from starting point to target
    this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
    this.distanceTraveled = 0;
    // track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
    this.coordinates = [];
    this.coordinateCount = 3;
    // populate initial coordinate collection with the current coordinates
    while (this.coordinateCount--) {
      this.coordinates.push([this.x, this.y]);
    }
    this.angle = Math.atan2(ty - sy, tx - sx);
    this.speed = 2;
    this.acceleration = 1.05;
    this.brightness = random(50, 70);
    // circle target indicator radius
    this.targetRadius = 1;
  }

  // update firework
  Firework.prototype.update = function (index) {
    // remove last item in coordinates array
    this.coordinates.pop();
    // add current coordinates to the start of the array
    this.coordinates.unshift([this.x, this.y]);

    // cycle the circle target indicator radius
    if (this.targetRadius < 8) {
      this.targetRadius += 0.3;
    } else {
      this.targetRadius = 1;
    }

    // speed up the firework
    this.speed *= this.acceleration;

    // get the current velocities based on angle and speed
    var vx = Math.cos(this.angle) * this.speed,
      vy = Math.sin(this.angle) * this.speed;
    // how far will the firework have traveled with velocities applied?
    this.distanceTraveled = calculateDistance(
      this.sx,
      this.sy,
      this.x + vx,
      this.y + vy
    );

    // if the distance traveled, including velocities, is greater than the initial distance to the target, then the target has been reached
    if (this.distanceTraveled >= this.distanceToTarget) {
      createParticles(this.tx, this.ty);
      // remove the firework, use the index passed into the update function to determine which to remove
      fireworks.splice(index, 1);
    } else {
      // target not reached, keep traveling
      this.x += vx;
      this.y += vy;
    }
  };

  // draw firework
  Firework.prototype.draw = function () {
    ctx.beginPath();
    // move to the last tracked coordinate in the set, then draw a line to the current x and y
    ctx.moveTo(
      this.coordinates[this.coordinates.length - 1][0],
      this.coordinates[this.coordinates.length - 1][1]
    );
    ctx.lineTo(this.x, this.y);
    ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
    ctx.stroke();

    ctx.beginPath();
    // draw the target for this firework with a pulsing circle
    ctx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
    ctx.stroke();
  };

  // create particle
  function Particle(x, y) {
    this.x = x;
    this.y = y;
    // track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
    this.coordinates = [];
    this.coordinateCount = 5;
    while (this.coordinateCount--) {
      this.coordinates.push([this.x, this.y]);
    }
    // set a random angle in all possible directions, in radians
    this.angle = random(0, Math.PI * 2);
    this.speed = random(1, 10);
    // friction will slow the particle down
    this.friction = 0.95;
    // gravity will be applied and pull the particle down
    this.gravity = 1;
    // set the hue to a random number +-20 of the overall hue variable
    this.hue = random(hue - 20, hue + 20);
    this.brightness = random(50, 80);
    this.alpha = 1;
    // set how fast the particle fades out
    this.decay = random(0.015, 0.03);
  }

  // update particle
  Particle.prototype.update = function (index) {
    // remove last item in coordinates array
    this.coordinates.pop();
    // add current coordinates to the start of the array
    this.coordinates.unshift([this.x, this.y]);
    // slow down the particle
    this.speed *= this.friction;
    // apply velocity
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed + this.gravity;
    // fade out the particle
    this.alpha -= this.decay;

    // remove the particle once the alpha is low enough, based on the passed in index
    if (this.alpha <= this.decay) {
      particles.splice(index, 1);
    }
  };

  // draw particle
  Particle.prototype.draw = function () {
    ctx.beginPath();
    // move to the last tracked coordinates in the set, then draw a line to the current x and y
    ctx.moveTo(
      this.coordinates[this.coordinates.length - 1][0],
      this.coordinates[this.coordinates.length - 1][1]
    );
    ctx.lineTo(this.x, this.y);
    ctx.strokeStyle =
      'hsla(' +
      this.hue +
      ', 100%, ' +
      this.brightness +
      '%, ' +
      this.alpha +
      ')';
    ctx.stroke();
  };

  // create particle group/explosion
  function createParticles(x, y) {
    // increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
    var particleCount = 30;
    while (particleCount--) {
      particles.push(new Particle(x, y));
    }
  }

  // main demo loop
  function loop() {
    // this function will run endlessly with requestAnimationFrame
    requestAnimFrame(loop);

    // increase the hue to get different colored fireworks over time
    hue += 0.5;

    // normally, clearRect() would be used to clear the canvas
    // we want to create a trailing effect though
    // setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
    ctx.globalCompositeOperation = 'destination-out';
    // decrease the alpha property to create more prominent trails
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, cw, ch);
    // change the composite operation back to our main mode
    // lighter creates bright highlight points as the fireworks and particles overlap each other
    ctx.globalCompositeOperation = 'lighter';

    // loop over each firework, draw it, update it
    var i = fireworks.length;
    while (i--) {
      fireworks[i].draw();
      fireworks[i].update(i);
    }

    // loop over each particle, draw it, update it
    var i = particles.length;
    while (i--) {
      particles[i].draw();
      particles[i].update(i);
    }

    // launch fireworks automatically to random coordinates, when the mouse isn't down
    if (timerTick >= timerTotal) {
      if (!mousedown) {
        // start the firework at the bottom middle of the screen, then set the random target coordinates, the random y coordinates will be set within the range of the top half of the screen
        fireworks.push(
          new Firework(cw / 2, ch, random(0, cw), random(0, ch / 2))
        );
        timerTick = 0;
      }
    } else {
      timerTick++;
    }

    // limit the rate at which fireworks get launched when mouse is down
    if (limiterTick >= limiterTotal) {
      if (mousedown) {
        // start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
        fireworks.push(new Firework(cw / 2, ch, mx, my));
        limiterTick = 0;
      }
    } else {
      limiterTick++;
    }
  }

  // mouse event bindings
  // update the mouse coordinates on mousemove
  canvas.addEventListener('mousemove', function (e) {
    mx = e.pageX - canvas.offsetLeft;
    my = e.pageY - canvas.offsetTop;
  });

  // toggle mousedown state and prevent canvas from being selected
  canvas.addEventListener('mousedown', function (e) {
    e.preventDefault();
    mousedown = true;
  });

  canvas.addEventListener('mouseup', function (e) {
    e.preventDefault();
    mousedown = false;
  });

  // once the window loads, we are ready for some fireworks!
  window.onload = loop;

})(jQuery);