var myColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      document.write('\
          <style>\
              body{\
                  background-color: '+myColor+';\
              }\
          </style>\
      ');

      setInterval(
        function () {
          var randomColor = Math.floor(Math.random()*16777215).toString(20);
          document.body.style.backgroundColor = "#"+randomColor;
        },0,1);
