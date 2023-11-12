// https://github.com/d3/d3-selection-multi Version 1.0.1. Copyright 2017 Mike Bostock.
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("d3-selection"),require("d3-transition")):"function"==typeof define&&define.amd?define(["d3-selection","d3-transition"],n):n(t.d3,t.d3)}(this,function(t,n){"use strict";function r(n,r){return n.each(function(){var n=r.apply(this,arguments),e=t.select(this);for(var i in n)e.attr(i,n[i])})}function e(t,n){for(var r in n)t.attr(r,n[r]);return t}function i(n,r,e){return n.each(function(){var n=r.apply(this,arguments),i=t.select(this);for(var o in n)i.style(o,n[o],e)})}function o(t,n,r){for(var e in n)t.style(e,n[e],r);return t}function f(n,r){return n.each(function(){var n=r.apply(this,arguments),e=t.select(this);for(var i in n)e.property(i,n[i])})}function u(t,n){for(var r in n)t.property(r,n[r]);return t}function s(n,r){return n.each(function(){var e=r.apply(this,arguments),i=t.select(this).transition(n);for(var o in e)i.attr(o,e[o])})}function c(t,n){for(var r in n)t.attr(r,n[r]);return t}function a(n,r,e){return n.each(function(){var i=r.apply(this,arguments),o=t.select(this).transition(n);for(var f in i)o.style(f,i[f],e)})}function p(t,n,r){for(var e in n)t.style(e,n[e],r);return t}var l=function(t){return("function"==typeof t?r:e)(this,t)},y=function(t,n){return("function"==typeof t?i:o)(this,t,null==n?"":n)},h=function(t){return("function"==typeof t?f:u)(this,t)},v=function(t){return("function"==typeof t?s:c)(this,t)},d=function(t,n){return("function"==typeof t?a:p)(this,t,null==n?"":n)};t.selection.prototype.attrs=l,t.selection.prototype.styles=y,t.selection.prototype.properties=h,n.transition.prototype.attrs=v,n.transition.prototype.styles=d});

!function($) {
	'use strict';

  let a11y = [];

  /** 
    -----------------  
    easing ~~~~~~~~~~
    -----------------
    "easeElastic",
    "easeBounce",
    "easeLinear",
    "easeSin",
    "easeQuad",
    "easeCubic",
    "easePoly",
    "easeCircle",
    "easeExp",
    "easeBack"
   */

  window.myChart = function () {

    let svgWidth = window.innerWidth;
    let svgHeight = 170;
    let margin = { top: 30, right: 20, bottom: 20, left: 20 };

    let width = svgWidth - margin.left - margin.right;
    let height = '170';

    // 컬러 정의
    let color_map = {
      "c1": "#01a6a0",
      "c2": "#2893b7",
      "c3": "#5e78d7",
      "c4": "#8665ef",
      "c5": "#67cac6",
      "c6": "#2b9f99",
      "c7": "#7d66c3",
    }
    
    function CHART (fun, id) {

      // SVG 1.1 접근성 : 차트 타이틀, 설명 정의
      d3
      .json("/js/md/a11y.json")
      .then(function (a11y) {
        fun(a11y);
      })
    }

    // CON_003_0001.html
    let Donut = function (set) {
      CHART(function (a11y) {

        let radius = Math.min(width, height) / 3;

        let svg = d3
          .select(`#${set.id}`)
          .select("svg")

        a11y.filter(function (value, index) {
          if (value.id === set.id) {
            svg.append("title").text(value.title);
            svg.append("desc").text(value.desc);
          }
        })
        
        let group = svg
          .attrs({ "width": width, "height": height })
          .append("g")
          .attrs({
            "tabindex": "0",
            "transform": `translate(${ width / 2}, ${height / 2})`
          });
        
        // foreGround arc1
        let arc1 = d3.arc()
          .innerRadius(radius * 1.5)
          .outerRadius(radius * 1.1)
          .cornerRadius(50);
        
        // backGround arc2
        let arc2 = d3.arc()
          .innerRadius(radius * 1.4)
          .outerRadius(radius * 1.4);
        
        // backGround arc3
        let arc3 = d3.arc()
          .innerRadius(radius * 1.2)
          .outerRadius(radius * 1.4);
      
        let pieGenerator = d3.pie().sort(null);
        
        let backGround = group.append("path")
          .data(pieGenerator([100])) 
          .attrs({ "class": "background", "d": arc2})
          .transition().duration(700).ease(d3.easeExp)
          .attr("d", arc2)
          .transition().duration(700).ease(d3.easeExp)
          .attr("d", arc3)

        let foreGround = group.append("path")
          .data(pieGenerator([0, 100])) 
          .attrs({"class": "foreground", "d": arc1})
          .transition().duration(500).ease(d3.easeCircle)
          .attrTween("d", arcTween(pieGenerator([set.data[0], 100 - set.data[0]])))
          .delay(1000);
        
        let Image = group.append("image")
          .style("opacity", 0)
          .transition().duration(500).ease(d3.easeElastic)
          .attrs({
            "class": "ex-image",
            "x": "-15",
            "y": "0",
            "xlink:href": set.data[3] + set.data[4] + '.png',
            "width": "30px",
            "height": "30px"
          })
          .style("opacity", 1)
          .attrs({ "y": "-30"})
          .delay(1000);
        
        let Text = group.append("text")
          .attrs({
            "dy": "26px",
            "class": "ex-text"
        });
        
        // CON-003-0001-1 : 해당 id값 차트 소수점 반영
        let _f = (set.id === 'CON-003-0001-1') ? '.1f' : 'd';
        let format = d3.format(_f);

        function arcTween (pie) {
          return function (d) {
            let interpolate = d3.interpolate(-0.3, -pie[0].endAngle);
            let interpolateText = d3.interpolate(0, set.data[1]);
            return function (t) {
              d.endAngle = interpolate(t);
              Text.text(format(interpolateText(t)) + set.data[2]);
              return arc1(d);
            }
          }
        }
      }, set.id);
    };

    // CON_003_0001.html
    let DonutUpdate = function (set) {
      CHART(function (a11y) {

        let radius = Math.min(width, height) / 3;

        let svg = d3
          .select(`#${set.id}`)
          .select("svg")

        let arc1 = d3.arc()
          .innerRadius(radius * 1.5)
          .outerRadius(radius * 1.1)
          .cornerRadius(50);
      
        let pieGenerator = d3.pie().sort(null);
        
        d3.select('.foreground')
          .data(pieGenerator([0, 100])) 
          .attrs({"class": "foreground", "d": arc1})
          .transition().duration(500).ease(d3.easeCircle)
          .attrTween("d", arcTween(pieGenerator([set.data[0], 100 - set.data[0]])));

        d3.select('.ex-image')
          .attrs({
            "x": "-15",
            "y": "0",
            "xlink:href": set.data[3] + set.data[4] + '.png',
            "width": "30px",
            "height": "30px"
          })
          .transition().duration(500).ease(d3.easeElastic)
          .attrs({ "y": "-35"});
        
        let Text = d3.select('.ex-text').attrs({"dy": "20px"});
        
        // CON-003-0001-1 : 해당 id값 차트 소수점 반영
        let _f = (set.id === 'CON-003-0001-1') ? '.1f' : 'd';
        let format = d3.format(_f);

        function arcTween (pie) {
          return function (d) {
            let interpolate = d3.interpolate(-0.3, -pie[0].endAngle);
            let interpolateText = d3.interpolate(0, set.data[1]);
            return function (t) {
              d.endAngle = interpolate(t);
              Text.text(format(interpolateText(t)) + set.data[2]);
              return arc1(d);
            }
          }
        }
      }, set.id);
    };

    // CON_004_0001.html
    // HOT_001_0001.html
    let SubDonut = function (set) {
      CHART(function (a11y) {

        let radius;

        if (set.case == 'case-3') {
          width = (svgWidth / 2) - margin.left;
          radius = Math.min(width, height) / 3.5;
          height = '150';
        } else {
          width = svgWidth - margin.left - margin.right;
          radius = Math.min(width, height) / 3;
          height = '170';
        }
      
        let svg = d3
          .select(`#${set.id}`)
          .select("svg")

        a11y.filter(function (value, index) {
          if (value.id === set.id) {
            svg.append("title").text(value.title);
            svg.append("desc").text(value.desc);
          }
        })
        
        let group = svg
          .attrs({ "width": width, "height": height })
          .append("g")
          .attrs({
            "tabindex": "0",
            "transform": `translate(${ width / 2}, ${height / 2})`
          });
        
        // foreGround arc1
        let arc1 = d3.arc()
          .innerRadius(radius * 1.47)
          .outerRadius(radius * (set.case == 'case-3' ? 1.14 : 1.04))
        
        // backGround arc2
        let arc2 = d3.arc()
          .innerRadius(radius * 1.45)
          .outerRadius(radius * 1.45);
          
        // backGround arc3
        let arc3 = d3.arc()
          .innerRadius(radius * (set.case == 'case-3' ? 1.17 : 1.07))
          .outerRadius(radius * 1.45);
      
        let pieGenerator = d3.pie().sort(null);
        
        let backGround = group.append("path")
          .data(pieGenerator([100])) 
          .attrs({ "class": "background-" + set.case, "d": arc2})
          .transition().duration(400).ease(d3.easeExp)
          .attr("d", arc2)
          .transition().duration(400).ease(d3.easeExp)
          .attr("d", arc3)

        let foreGround = group.append("path")
          .data(pieGenerator([0, 100]))
          .styles({ "stroke-width": 3 })
          .attrs({"class": "foreground-" + set.case, "d": arc1})
          .transition().duration(500).ease(d3.easeExp)
          .attrTween("d", arcTween(pieGenerator([set.data[0], 100 - set.data[0]])))
          .delay(600);
        
        group.append("text")
          .style("opacity", 0)
          .attrs({
            "dy": "10px",
            "class": "sub-text-0"
          })
          .transition().duration(800).ease(d3.easeExp)
          .style("opacity", 1)
          .attrs({
            "dy": "-10px",
          })
          .text(set.title)
          .delay(600);

        let Text = group.append("text")
          .attrs({
            "dy": set.case !== "case-1" ? "10px" : "20px",
            // "class": "sub-text-1"
            "class": (set.case == "case-2" && set.data[0] < 50) ? "sub-text-2" : "sub-text-1"
          });
        
        // CON-004-0001-1 : 해당 id값 차트 소수점 반영
        let _f = (set.id === 'CON-004-0001-1') ? '.1f' : 'd';
        let format = d3.format(_f);

        function arcTween (pie) {
          return function (d) {
            let interpolate = d3.interpolate(-0, -pie[0].endAngle);
            // let interpolateText = d3.interpolate(0, set.data[0]);
            let interpolateTextData = (set.case == "case-2" && set.data[0] < 50) ? (100 - set.data[0]) : set.data[0] 
            let interpolateText = d3.interpolate(0, interpolateTextData);
            return function (t) {
              d.endAngle = interpolate(t);
              Text.text(format(interpolateText(t)) + '%');
              return arc1(d);
            }
          }
        }

      }, set.id);
    };

    // CON_004_0001.html
    let ExDonut = function (setObj) {
      CHART(function (a11y) {

        // let width = svgWidth - margin.left - margin.right;

        // let radius = Math.min(width, height) / 3.5;
        let radius = Math.min(width, height) / 3;
        // ------------------------------------------------------------

        var set = setObj.set;
        
        var pie = d3.pie()
          .value(function(d) {
            return d.value; 
          })

        // backGround arc2
        let arc2 = d3.arc()
          .innerRadius(0)
          .outerRadius(84);
        
        // backGround arc3
        let arc3 = d3.arc()
          .innerRadius(0)
          // .outerRadius(radius);
          .outerRadius(60);
      
        let pieGenerator = d3.pie().sort(null);

        let svg = d3
          .select(`#${setObj.id}`)
          .select("svg")

        a11y.filter(function (value, index) {
          if (value.id === setObj.id) {
            svg.append("title").text(value.title);
            svg.append("desc").text(value.desc);
          }
        })
        
        let group = svg
          .attrs({ "width": width, "height": height })
          .append("g")
          .attrs({
            "tabindex": "0",
            "transform": `translate(${ width / 2}, ${height / 2})`
          });

        // ------------------------------------------------------------

        set.forEach(function (set, i) {
          
          var data_ready = pie(d3.entries(set.data))

          group
            .selectAll('whatever')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc()
              .innerRadius(84)
              .outerRadius(0)
            )
            .attr("stroke", "#fff")
            .style("stroke-width", "2px")
            .attr("class", function (d, i) {
              return "pie-" + set.case + '-' + i
            })
            .attrs({
              // "transform": `translate(${ i === 0 ? -80 : 80}, 0)`
              "transform": `translate(0, 0)`
            })

          group
            .selectAll('whatever')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc()
            .innerRadius(84)
            .outerRadius(0)
            )
            .attr("stroke", "#fff")
            .style("stroke-width", "2px")
            .attr("class", function (d, i) {
              return "pattern-pie-" + set.case + '-' + i
            })
            .attrs({
              // "transform": `translate(${ i === 0 ? -80 : 80}, 0)`
              "transform": `translate(0, 0)`
            })
          
          // ------------------------------------------------------------
          
          if (set.data !== 0) {
            group.append("path")
              .data(pieGenerator([100])) 
              .attrs({
                "fill": "#fff", 
                "d": arc2,
                // "transform": `translate(${ i === 0 ? -80 : 80}, 0)`
                "transform": `translate(0, 0)`
              })
              .transition().duration(300).ease(d3.easeBack)
              .attr("d", arc2)
              .transition().duration(300).ease(d3.easeBack)
              .attr("d", arc3)

            group.append("text")
              .style("opacity", 0)
              .attrs({
                "dy": "20",
                "class": "sub-text-" + set.case,
                // "transform": `translate(${ i === 0 ? -80 : 80}, 0)`
                "transform": `translate(0, 0)`
              })
              .transition().duration(800).ease(d3.easeExp)
              .style("opacity", 1)
              .attrs({
                "dy": "8",
              })
              .text(set.title)
          } else {
            group.append("path")
              .data(pieGenerator([100])) 
              .attrs({
                "fill": "#ececec", 
                "d": d3.arc()
                  .innerRadius(0)
                  .outerRadius(84),
                // "transform": `translate(${ i === 0 ? -80 : 80}, 0)`
                "transform": `translate(0, 0)`
              })
              .transition().duration(300).ease(d3.easeBack)
              .attr("d", d3.arc()
                .innerRadius(0)
                .outerRadius(radius))
              .transition().duration(300).ease(d3.easeBack)
              .attr("d", d3.arc()
                .innerRadius(radius)
                .outerRadius(84))

            group.append("text")
              .style("opacity", 0)
              .attrs({
                "dy": "20",
                "class": "sub-text-case-0",
                // "transform": `translate(${ i === 0 ? -80 : 80}, 0)`
                "transform": `translate(0, 0)`
              })
              .transition().duration(800).ease(d3.easeExp)
              .style("opacity", 1)
              .attrs({
                "dy": "-10",
              })
              .text(set.title)

            group.append("text")
              .style("opacity", 0)
              .attrs({
                "dy": "20",
                "class": "sub-text-case-n",
                // "transform": `translate(${ i === 0 ? -80 : 80}, 0)`
                "transform": `translate(0, 0)`
              })
              .transition().duration(800).ease(d3.easeExp)
              .style("opacity", 1)
              .attrs({
                "dy": "8",
              })
              .text("고정지출이")
            
            group.append("text")
              .style("opacity", 0)
              .attrs({
                "dy": "30",
                "class": "sub-text-case-n",
                // "transform": `translate(${ i === 0 ? -80 : 80}, 0)`
                "transform": `translate(0, 0)`
              })
              .transition().duration(800).ease(d3.easeExp)
              .style("opacity", 1)
              .attrs({
                "dy": "23",
              })
              .text("없어요")
          }

        })

      }, setObj.id);
    };
    
    let Bar = function (set) {
      CHART(function (a11y) {
        
        // 전체 height 정의
        height = svgHeight - margin.top - margin.bottom;

        // case 변수 정의
        let score_top = 0;
        let rightVaule = set.percent || set.percent == 0 ? set.percent : '1,000';
        let endText = '점';
        let percentText = '';
        let percent = set.percent ? ((105 - set.percent) * height) / 100 : 0;

        // case --------------------------------------------

        if (set.case === 'case-1') {
          score_top = 20;
        } else if (set.case === 'case-2') {
          width = svgWidth - (margin.left * 2) - (margin.right * 2);
          score_top =  10;
        } else if (set.case === 'case-3') {
          score_top =  10;
          percentText = '평균 ';
          endText = '%';
        }

        // svg --------------------------------------------

        let svg = d3
          .select(`#${set.id}`)
          .select('svg');

        a11y.filter(function (value, index) {
          if (value.id === set.id) {
            svg.append("title").text(value.title);
            svg.append("desc").text(value.desc);
          }
        })

        let group = svg
          .attrs({ "width": width, "height": svgHeight })
          .append('g')
          .attrs({
            "tabindex": "0",
            "transform": `translate(${0}, ${margin.top})`
          });

        // 점선 --------------------------------------------
        
        let Line = group.append("g")
          // .attrs({ 'transform': `translate(0, ${percent})` });
        
        Line.append('line')
          .style("opacity", 0)
          .styles({
            "stroke": "#858b8e",
            "stroke-dasharray": "2, 2",
            "stroke-width": 1
          })
          .attrs({ "x1": 0, "y1": 0, "x2": width, "y2": 0,})
          .transition().duration(500).ease(d3.easeBack)
          .attrs({ "x1": 0, "y1": percent, "x2": width, "y2": percent})
          .style("opacity", 1)

        Line.append("text")
          .style("opacity", 0)
          .attrs({
            "class": "label-max",
            'transform': `translate(${width - (percentText ? 52 : 42)}, ${0})`
          })
          .transition().duration(500).ease(d3.easeBack)
          .style("opacity", 1)
          .attrs({
            "class": "label-max",
            'transform': `translate(${width - (percentText ? 52 : 42)}, ${percent - 10})`
          })
          .text(percentText + rightVaule + endText);

        // xAxis --------------------------------------------

        let x = d3.scaleBand()
          .rangeRound([-1, width]) // |-| 
          .domain(set.data.map(function (d) {
            return d.name
          }))
          .padding(.76);

        let xAxis = d3.axisBottom(x);
        
        // xAxis
        group.append('g')
          .attr('class', 'axis')
          .attr('transform', `translate(0, ${height + 20})`)
          .transition().duration(700).ease(d3.easeExp)
          .attr('transform', `translate(0, ${height})`)
          .call(xAxis);

        // bar --------------------------------------------
        
        let y = d3.scaleLinear()
          .range([height, 0])
          .domain([0, height])
          .nice();
        // let yAxis = d3.axisLeft(y).ticks(5);

        let rx = 5;
        let ry = 5;

        let bars = group.selectAll("bar")
          .data(set.data)
          .enter()
          .append("g");
        
        let bar = bars.append("path")
          .style("fill", function (d) {
            return color_map[d.status];
          })
          .style("opacity", 0)
          .attr("d", function (item) {
            return `
              M${x(item.name)}, ${y(0)}
              a5, 5 0 0 1 5, -5
              h10
              a5, 5 0 0 1 5, 5
              v${0}
              h-20Z
            `
          })
          .transition().duration(500).ease(d3.easeBack)
          .style("opacity", 1)
          .attr("d", function (item) {
            // M${x(item.name)}, ${y((item.value * height) / 100)}
            // a5, 5 0 0 1 5, -5
            // h10
            // h${x.bandwidth() - 2 * rx}
            // a5, 5 0 0 1 5, 5
            // v${height - y((item.value * height) / 100)}
            // h-20Z

            return `
              M${x(item.name)}, ${y((item.value * height) / 100)}
              a${rx}, ${ry} 0 0 1 ${rx}, ${-ry}
              h10
              a${rx}, ${ry} 0 0 1 ${rx}, ${ry}
              v${height - y((item.value * height) / 100)}
              h-20Z
            `
          });

        // 신용 등급 --------------------------------------------

        if (set.case === 'case-1') {        
          let LEVEL = bars.append("text")
            .style("fill", function (d) {
              return color_map[d.status];
            })
            .style("opacity", 0)
            .attrs({
              "class": "label-level",
              "dx": 10,
              "x": function (d) {
                return x(d.name);
              },
              "y": function (d) {
                return y(((d.value * height) / 100 - 10));
              }
            })
            .transition().duration(600).ease(d3.easeExp)
            .style("opacity", 1)
            .attrs({
              "y": function (d) {
                return y(((d.value * height) / 100) + 8);
              }
            })
            .text(function (d) {
              return d.level + '등급';
            })
        }

        // 신용 점수 --------------------------------------------

        let format = d3.format("d");

        let SCORE = bars.append("text")
          .style("fill", function (d) {
            return color_map[d.status];
          })
          .style("opacity", 0)
          .attrs({
            "class": "label-score",
            "dx": 10,
            "x": function (d) {
              return x(d.name);
            },
            "y": function (d) {
              return y(((d.value * height) / 100 - 10));
            }
          })
          .transition().duration(600).ease(d3.easeExp)
          .style("opacity", 1)
          .attrs({
            "y": function (d) {
              return y(((d.value * height) / 100) + score_top);  // case
            }
          })
          .tween("text", function(d) {
            var _score = d3.interpolate(0, d.score);
            return function (t) {
              d3.select(this).text(format(_score(t)) + endText);
            };
          });

      }, set.id);
    };

    let DoubleBar = function (set) {
      CHART(function (a11y) {
        
        // 전체 height 정의
        height = svgHeight - margin.top - margin.bottom;
        
        if (set.case === 'case-2') {
          width = svgWidth - 80;
        }

        // svg --------------------------------------------

        let svg = d3
          .select(`#${set.id}`)
          .select('svg');

        a11y.filter(function (value, index) {
          if (value.id === set.id) {
            svg.append("title").text(value.title);
            svg.append("desc").text(value.desc);
          }
        })

        // name 값으로 x값 범위 때문에 data 배열에 중복 추가
        set.scope.map(function (value, i) {
          let _name = {name : value.name}
          return value.data.forEach(function (value, i) {
            Object.assign(value, _name);
          })
        })

        let group = svg
          .attrs({ "width": width, "height": svgHeight })
          .append('g')
          .attrs({
            "tabindex": "0",
            "transform": `translate(${0}, ${margin.top})`
          });

        let x = d3.scaleBand()
          .rangeRound([-1, width]) // |-| 
          .domain(set.scope.map(function (d) {
            return d.name
          }))
          .padding(0.6);
        
        // bar --------------------------------------------
        
        let y = d3.scaleLinear()
          .range([height, 0])
          .domain([0, height])
          .nice();

        // let yAxis = d3.axisLeft(y).ticks(5);

        let rx = 5;
        let ry = 5;

        let bars = group.selectAll("bar")
          .data(set.scope)
          .enter()
          .append("g")

        bars.selectAll("path")
          .data(function (d) {
            return d.data
          })
          .join("path")
          .style("fill", function (d, i) {
            return i === 0 ? color_map[d.status] : '';
          })
          .style("opacity", 0)
          .attr('class', function (d, i) {
            return 'bar-pattern-' + i
          })
          .attr("d", function (d, i) {
            return `
              M${i === 0 ? x(d.name) : x(d.name) + 25}, ${y(0)}
              a5, 5 0 0 1 5, -5
              h10
              a5, 5 0 0 1 5, 5
              v${0}
              h-20Z
            `
          })
          .transition().duration(500).ease(d3.easeBack)
          .style("opacity", 1)
          .attr("d", function (d, i) {
            return `
              M${i === 0 ? x(d.name) : x(d.name) + 25}, ${y((d.value * height) / 100)}
              a${rx}, ${ry} 0 0 1 ${rx}, ${-ry}
              h10
              a${rx}, ${ry} 0 0 1 ${rx}, ${ry}
              v${height - y((d.value * height) / 100)}
              h-20Z
            `
          });

          let format = d3.format("d");

          bars
            .selectAll("text")
            .data(function (d) {
              return d.data
            })
            .join("text")
            .style("fill", function (d) {
              return color_map[d.status];
            })
            .style("opacity", 0)
            .attrs({
              "class": "label-score",
              "dx": 10,
              "x": function (d, i) {
                return i === 0 ? x(d.name) : x(d.name) + 25;
              },
              "y": function (d) {
                return y(((d.value * height) / 100 - 10));
              }
            })
            .transition().duration(600).ease(d3.easeExp)
            .style("opacity", 1)
            .attrs({
              "y": function (d) {
                return y(((d.value * height) / 100) + 10);  // case
              }
            })
            .tween("text", function(d) {
              var _value = d3.interpolate(0, d.value);
              return function (t) {
                d3.select(this).text(format(_value(t)) + '%');
              };
            });

        // xAxis --------------------------------------------

        let xAxis = d3.axisBottom(x);
        
        // xAxis
        group.append('g')
          .attr('class', 'axis')
          .attr('transform', `translate(0, ${height + 20})`)
          .transition().duration(700).ease(d3.easeExp)
          .attr('transform', `translate(0, ${height})`)
          .call(xAxis);
          

      }, set.id);
    };

    let MonthBar = function (set) {
      CHART(function (a11y) {
        
        // 전체 height 정의
        height = svgHeight - margin.top - margin.bottom;

        // 변수 정의
        let score_top = 0;
        let rightVaule = set.compare.value;
        let endText = '원';
        let at = set.compare.at === 'plus' ? '+' : '-';
        let percent = set.compare.percent ? ((105 - set.compare.percent) * height) / 100 : 0;
        let prevMonthValue = set.data[0].value;
        let nextMonthValue = set.data[1].value;

        // svg --------------------------------------------

        let svg = d3
          .select(`#${set.id}`)
          .select('svg');

        a11y.filter(function (value, index) {
          if (value.id === set.id) {
            svg.append("title").text(value.title);
            svg.append("desc").text(value.desc);
          }
        })

        let group = svg
          .attrs({ "width": width, "height": svgHeight })
          .append('g')
          .attrs({
            "tabindex": "0",
            "transform": `translate(${0}, ${margin.top})`
          });

        // grid line --------------------------------------------
        
        let gridLine = [ {y : 1}, {y : 5}];

        let yScale = d3
          .scaleLinear()
          .domain(d3.extent(gridLine, function (d) { 
            return d.y
          }))
          .rangeRound([height, 0]);

        group.append('g')
          .attr('class', 'grid-area')
          .call(
            d3.axisLeft(yScale)
              .ticks(4)
              .tickSize(-width)
          );
        
        // 점선 --------------------------------------------
        
        let Line = group.append("g")
          // .attrs({ 'transform': `translate(0, ${percent})` });
        
        Line.append('line')
          .style("opacity", 0)
          .styles({
            "stroke": "#858b8e",
            "stroke-dasharray": "2, 2",
            "stroke-width": 1
          })
          .attrs({ "x1": 0, "y1": height, "x2": width, "y2": height,})
          .transition().duration(800).ease(d3.easeBack)
          .attrs({ "x1": 0, "y1": percent - 10, "x2": width, "y2": percent - 10})
          .style("opacity", 1);
        
        // 지난달 대비
        Line.append("text")
          .style("opacity", 0)
          .attrs({
            "class": "label-max",
            'transform': `translate(${width - 52}, ${height})`
          })
          .transition().duration(1000).ease(d3.easeExp)
          .style("opacity", 1)
          .attrs({
            "class": "label-at-text",
            'transform': `translate(${width - 52}, ${percent - 38})`
          })
          .text("지난달 대비");

        // 지난달 대비 금액
        Line.append("text")
          .style("opacity", 0)
          .attrs({
            "class": "label-max",
            'transform': `translate(${width - 67}, ${height})`
          })
          .transition().duration(1000).ease(d3.easeExp)
          .style("opacity", 1)
          .attrs({
            "class": "label-at-" + set.compare.at,
            'transform': `translate(${width - 67}, ${percent - 20})`
          })
          .text(at + rightVaule + endText);
          

        // xAxis --------------------------------------------

        let x = d3.scaleBand()
          .rangeRound([-1, width]) // |-| 
          .domain(set.data.map(function (d) {
            return d.name
          }))

        let xAxis = d3.axisBottom(x).ticks(4);
        
        // xAxis
        group.append('g')
          .attr('class', 'axis')
          .attr('transform', `translate(0, ${height + 20})`)
          // .transition().duration(700).ease(d3.easeExp)
          .attr('transform', `translate(0, ${height})`)
          .call(xAxis)
          .selectAll(".tick")
          .attr("transform", function (d, i) {
            return `translate(${i === 0 ? 65 : 145 }, 0)`
          })
          // .selectAll("text")
          // .attr("x", "0")
          // .style("text-anchor", "end");


        // bar --------------------------------------------
        
        let y = d3.scaleLinear()
          .range([height, 0])
          .domain([0, height])
          .nice();
        // let yAxis = d3.axisLeft(y).ticks(5);

        let rx = 5;
        let ry = 5;

        let bars = group.selectAll("bar")
          .data(set.data)
          .enter()
          .append("g");
        
        // 컬러 bar 영역
        bars.append("path")
          .style("opacity", 0)
          .attr('class', function (d, i) {
            return 'bar-pattern-at-' + i
          })
          .attr("d", function (data, i) {
            return `
              M${i == 0 ? 40 : 40 * 3}, ${y(0)}
              a5, 5 0 0 1 5, -5
              h40
              a5, 5 0 0 1 5, 5
              v${0}
              h-50Z
            `
          })
          .transition().duration(800).ease(d3.easeBack)
          .style("opacity", 1)
          .attr("d", function (data, i) {
            
            // 0 일 때 화면 미 노출
            if (data.value === 0) return;

            return `
              M${i == 0 ? 40 : 40 * 3}, ${y((data.value * height) / 100)}
              a${rx}, ${ry} 0 0 1 ${rx}, ${-ry}
              h40
              a${rx}, ${ry} 0 0 1 ${rx}, ${ry}
              v${height - y((data.value * height) / 100)}
              h-50Z
            `
          });

          // 회색 bar 영역
          bars.append("path")
            .style("fill", "#ccc")
            .attr("d", function (data, i) {
              return `
                M${i == 0 ? 40 : 40 * 3}, ${y(0)}
                a5, 5 0 0 1 5, -5
                h40
                a5, 5 0 0 1 5, 5
                v${0}
                h-50Z
              `
            })
            .transition().duration(1000).ease(d3.easeBack)
            .style("opacity", 1)
            .attr("d", function (data, i) {
              // 0 일 때 화면 미 노출
              if (nextMonthValue === 0 || data.value === 0) return;

              return `
                M${i == 0 ? 40 : 40 * 3}, ${y((prevMonthValue * height) / 100)}
                a${rx}, ${ry} 0 0 1 ${rx}, ${-ry}
                h40
                a${rx}, ${ry} 0 0 1 ${rx}, ${ry}
                v${height - y((prevMonthValue * height) / 100)}
                h-50Z
              `
            });

      }, set.id);
    };

    let CashBar = function (set) {
      CHART(function (a11y) {
        
        // 전체 height 정의
        height = svgHeight - margin.top - margin.bottom;
        width = svgWidth - (margin.left * 2) - (margin.right * 2);

        if (set.case === 'case-2') {
          width = svgWidth - (margin.left) - (margin.right);
        }

        // 변수 정의
        let percent = set.compare.percent;
        let prevCashValue = set.data[0].value;
        let nextCashValue = set.data[1].value;

        // svg --------------------------------------------

        let svg = d3
          .select(`#${set.id}`)
          .select('svg');

        a11y.filter(function (value, index) {
          if (value.id === set.id) {
            svg.append("title").text(value.title);
            svg.append("desc").text(value.desc);
          }
        })

        let group = svg
          .attrs({ "width": width, "height": svgHeight })
          .append('g')
          .attrs({
            "tabindex": "0",
            "transform": `translate(${0}, ${margin.top})`
          });

        // grid line --------------------------------------------
        
        let gridLine = [ {y : 1}, {y : 5}];

        var yScale = d3
        .scaleLinear()
        .domain(d3.extent(gridLine, function (d) { 
          return d.y
        }))
        .rangeRound([height, 0]);

        group.append('g')
          .attr('class', 'grid-area')
          .call(
            d3.axisLeft(yScale)
              .ticks(4)
              .tickSize(-width)
          );          

        // xAxis --------------------------------------------

        let x = d3.scaleBand()
          .rangeRound([-1, width]) // |-| 
          .domain(set.data.map(function (d) {
            return d.name
          }))
          .padding(.76);

        let xAxis = d3.axisBottom(x);
        
        // xAxis
        group.append('g')
          .attr('class', 'axis-cs')
          .attr('transform', `translate(0, ${height + 20})`)
          .transition().duration(700).ease(d3.easeExp)
          .attr('transform', `translate(0, ${height})`)
          .call(xAxis);

        // bar --------------------------------------------
        
        let y = d3.scaleLinear()
          .range([height, 0])
          .domain([0, height])
          .nice();
        // let yAxis = d3.axisLeft(y).ticks(5);

        let rx = 5;
        let ry = 5;

        let bars = group.selectAll("bar")
          .data(set.data)
          .enter()
          .append("g");

        // 에상수입 / 수입 / 지출 0일 떄
        if (prevCashValue === 0 && nextCashValue === 0 && percent === 0) {
          group.append("text")
          .attrs({
            "class": "label-noData",
            'transform': `translate(${(width - 110) / 2}, ${(height + 12) / 2})`
          })
          .text("");
        }
        
        // 예상수입 영역
        bars.append("path")
          .style("opacity", 0)
          .attr('class', function (d, i) {
            return 'bar-cs-' + i
          })
          .styles({
            "stroke-dasharray": "2, 2",
            "stroke-width": 1,
          })
          .attr("d", function (data, i) {
            return `
              M${x(data.name) - 9}, ${y(0)}
              a5, 5 0 0 1 5, -5
              h40
              a5, 5 0 0 1 5, 5
              v${0}
              h-50Z
            `
          })
          .transition().duration(set.case === 'case-2' ? 1000 : 900).ease(d3.easeBack)
          .style("opacity", 1)
          .attr("d", function (data, i) {
            
            if (percent === 0) return;

            return `
              M${x(data.name) - 9}, ${y(((i === 0 ? percent : data.value) * height) / 100)}
              a${rx}, ${ry} 0 0 1 ${rx}, ${-ry}
              h40
              a${rx}, ${ry} 0 0 1 ${rx}, ${ry}
              v${height - y(((i === 0 ? percent : data.value) * height) / 100)}
              h-50Z
            `
          });

          // --------------------------------------------

          // 수입/지출 영역
          bars.append("path")
            .attr('class', function (d, i) {
              return 'bar-pattern-cs-' + i
            })
            .attr("d", function (data, i) {
              return `
                M${x(data.name) - 9}, ${y(0)}
                a5, 5 0 0 1 5, -5
                h40
                a5, 5 0 0 1 5, 5
                v${0}
                h-50Z
              `
            })
            .transition().duration(1000).ease(d3.easeBack)
            .style("opacity", 1)
            .attr("d", function (data, i) {

              // 0 일 때 화면 미 노출
              if (nextCashValue === 0 || data.value === 0) return;

              return `
                M${x(data.name) - 9}, ${y((data.value * height) / 100)}
                a${rx}, ${ry} 0 0 1 ${rx}, ${-ry}
                h40
                a${rx}, ${ry} 0 0 1 ${rx}, ${ry}
                v${height - y((data.value * height) / 100)}
                h-50Z
              `
            });

      }, set.id);
    };

    let DayBar = function (set) {
      CHART(function (a11y) {
        
        margin.top = 50;

        // 전체 height 정의
        height = svgHeight - margin.top - margin.bottom;

        // svg --------------------------------------------

        let svg = d3
          .select(`#${set.id}`)
          .select('svg');

        a11y.filter(function (value, index) {
          if (value.id === set.id) {
            svg.append("title").text(value.title);
            svg.append("desc").text(value.desc);
          }
        })

        let group = svg
          .attrs({ "width": width, "height": svgHeight })
          .append('g')
          .attrs({
            "tabindex": "0",
            "transform": `translate(${0}, ${margin.top})`
          });

        // xAxis --------------------------------------------

        let x = d3.scaleBand()
          .rangeRound([-1, width]) // |-| 
          .domain(set.data.map(function (d) {
            return d.name
          }))
          .padding(.74);

        let xAxis = d3.axisBottom(x);
        
        // xAxis
        group.append('g')
          .attr('class', 'axis')
          .attr('transform', `translate(0, ${height + 20})`)
          .transition().duration(700).ease(d3.easeExp)
          .attr('transform', `translate(0, ${height})`)
          .call(xAxis);

        // 매장을 여는 요일 -----------------------------------
        
        group
          .append('g')
          .attrs({
            "width": 230,
            "height": height,
            "transform": `translate(0, -50)`,
          })
          .append("rect")
          .attrs({
            "class": "tooltip-label",
            "width": 300,
            "height": height + 50,
            "fill": "#f8f8f8",
          });

        // bar --------------------------------------------
        
        let y = d3.scaleLinear()
          .range([height, 0])
          .domain([0, height])
          .nice();

        let rx = 5;
        let ry = 5;

        let bars = group.selectAll("bar")
          .data(set.data)
          .enter()
          .append("g");
        
        let bar = bars.append("path")
          .style("fill", function (d) {
            return color_map[d.status];
          })
          .style("opacity", 0)
          .attr("d", function (item) {
            return `
              M${x(item.name)}, ${y(0)}
              a5, 5 0 0 1 5, -5
              h10
              a5, 5 0 0 1 5, 5
              v${0}
              h-20Z
            `
          })
          .transition().duration(500).ease(d3.easeBack)
          .style("opacity", 1)
          .attr("d", function (item) {
            return `
              M${x(item.name) - 4}, ${y((item.value * height) / 100)}
              a${rx}, ${ry} 0 0 1 ${rx}, ${-ry}
              h10
              a${rx}, ${ry} 0 0 1 ${rx}, ${ry}
              v${height - y((item.value * height) / 100)}
              h-20Z
            `
          });

        // 메세지 (손님이 가장 많아요) -----------------------------------

        bars.append("rect")
          .attrs({
            "class": "tooltip-label",
            "width": 115,
            "height": 26,
            "rx": 10,
            "ry": 10,
            "fill": "#fff",
            "stroke": "#4b5a61",
            "stroke-width": "1"
          })
          .style("opacity", 0)
          .attr("x", function(d) {
            return x(d.name) - 50;
          })
          .attr("y", function(d, i) {
            return y(((d.value * height) / 100 - 10));
          })
          .transition().duration(600).ease(d3.easeExp)
          .style("opacity", function (d) {
            return d.message!== undefined ? 1 : 0;
          })
          .attr("y", function(d, i) {
            return y(((d.value * height) / 100 + 45));
          });

        bars.append("text")
          .style("fill", "#111")
          .style("opacity", 0)
          .attrs({
            "class": "label-score",
            "dx": 10,
            "x": function (d) {
              return x(d.name);
            },
            "y": function (d) {
              return y(((d.value * height) / 100 - 10));
            }
          })
          .transition().duration(600).ease(d3.easeExp)
          .style("opacity", 1)
          .attrs({
            "y": function (d) {
              return y(((d.value * height) / 100) + 28);
            }
          })
          .tween("text", function(d) {
            return function (t) {
              d3.select(this).text(d.message);
            };
          });

      }, set.id);
    };

    let Line = function (set) {
      CHART(function (a11y) {
        
        // 전체 height 정의
        height = svgHeight - margin.top - margin.bottom;

        // 변수 정의
        margin = { top: 30, right: 0, bottom: 20, left: 0 };

        // svg --------------------------------------------

        let svg = d3
          .select(`#${set.id}`)
          .select('svg');

        a11y.filter(function (value, index) {
          if (value.id === set.id) {
            svg.append("title").text(value.title);
            svg.append("desc").text(value.desc);
          }
        })

        let group = svg
          .attrs({ "width": width, "height": svgHeight })
          .append('g')
          .attrs({
            "tabindex": "0",
            "transform": `translate(${0}, ${margin.top})`
          });
        
        let data = set.data;

        // tooltip ----------------------------------------------
        let tooltip = d3.select('.my-data-chart-line')
          .append('div')
          .attr('class', 'tooltip')
          .style('opacity', 0);

        let click = function (d) {
          tooltip.style('opacity', 1);
          d3.select(this.previousSibling).classed("active", true)

          var _x = d3.event.offsetX < 40 ? 30 : 65;

          tooltip
            .html(`<span class="won"><em>${d[3]}</em>원</span>`)        
            .styles({
              'left': (d3.event.offsetX - _x) + 'px',
              'top': (d3.event.offsetY - 50) + 'px',
            }); 
        }

        let mouseleave = function () {
          tooltip.style('opacity', 0);
          d3.select(this.previousSibling).classed("active", false);
        }

        // let g = svg
        //   .append('g')
        //   .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        
        // grid line --------------------------------------------
        
        let yScaleLine = d3
          .scaleLinear()
          .domain(d3.extent([ {y : 0}, {y : 6}], function (d) { 
            return d.y
          }))
          .rangeRound([height, 0]);

        group.append('g')
          .attr('class', set.case === 'case-1' ? 'grid-area' : 'grid-area-e')
          .call(
            d3.axisLeft(yScaleLine)
              .ticks(2)
              .tickSize(-width)
          );

        // xAxis ----------------------------------------------
        
        let xScale = d3.scaleBand()
          .rangeRound([-1, width]) // |-| 
          .padding(0.1)
          .domain(data.map(function (d) {
            return d[0];
          }))

        group.append('g')
          .attr('class', set.case === 'case-1' ? 'axis axis--x' : 'axis axis--x-odd')
          .attr('transform', `translate(0, ${height})`)
          .call(d3.axisBottom(xScale));


        // yAxis ----------------------------------------------
        
        let yScale = d3.scaleLinear()
          .rangeRound([height, 0])
          .domain([
            0, 
            d3.max(data, (function (d) {
              return d[2];
            })
          )
          ]);

        // axis-y
        // g.append('g')
        //   .attr('class', 'axis axis--y')
        //   .call(d3.axisLeft(yScale));

        // bar --------------------------------------------

        let bar = group.selectAll('rect')
          .data(data)
          .enter().append('g');

        // rect ----------------------------------------------

        // bar.append('rect')
        //   .attr('x', function (d) {
        //   return xScale(d[0]);
        //   })
        //   .attr('y', function (d) {
        //   return yScale(d[2]);
        //   })
        //   .attr('width', xScale.bandwidth())
        //   .attr('height', function (d) {
        //   return height - yScale(d[2]);
        //   })
        //   .attr('class', 'myRect')  
        //   .on('mouseover', mouseover)
        //   .on('mousemove', mousemove)
        //   .on('mouseleave', mouseleave);


        // 유지비 없어요! 판별 
        let onlyZero = data.every(function (v) { return v[1] === 0});
        if (onlyZero !== true) {

          // line -----------------------------------------------
          let line = d3.line()
            .x(function (d, i) {
              return xScale(d[0]) + xScale.bandwidth() / 2;
            })
            .y(function (d) {
              return yScale(d[1]);
            })
            // .curve(d3.curveMonotoneX);
          

          group.append('g').append('path')
            // .style("opacity", 0)
            .attr('class', 'line')
            .attr('d', line(data))
            .attr('stroke-width', '0')
            .transition().duration(500).ease(d3.easeExp)
            // .style("opacity", 1)
            .attr('stroke-width', '1')
            .delay(500)

          // dot ----------------------------------------------

          let dotGroup = group.selectAll('rect')
            .data(data)
            .enter()
            .append('g');

          dotGroup.append('circle')
            .attr('class', 'dot-bg')
            .attr('r', 0.1)
            .attr('cx', function (d, i) {
              return xScale(d[0]) + xScale.bandwidth() / 2;
            })
            .attr('cy', function (d) {
              return yScale(d[1]);
            })
            .transition().duration(700).ease(d3.easeExp)
            .attr('r', 8)
            .transition().duration(600).ease(d3.easeElastic)
            .attr('r', 6)

          dotGroup.append('circle')
            .attr('class', 'dot')
            .attr('cx', function (d, i) {
              return xScale(d[0]) + xScale.bandwidth() / 2;
            })
            .attr('cy', function (d) {
              return yScale(d[1]);
            })
            .attr('r', 6)
            .on('click', click)
            // .on('mousemove', mousemove1)
            .on('mouseleave', mouseleave);

        } else {
          group.append("text")
            .attrs({
              "class": "label-noData",
              'transform': `translate(${(width - 110) / 2}, ${(height + 12) / 2})`
            })
            .text("유지비가 없어요!");
        }

      }, set.id);
    };

    let TimeLine = function (set) {
      CHART(function (a11y) {
        
        // 전체 height 정의
        height = svgHeight - margin.top - margin.bottom;

        // 변수 정의
        margin = { top: 30, right: 0, bottom: 20, left: 0 };

        // svg --------------------------------------------

        let svg = d3
          .select(`#${set.id}`)
          .select('svg');

        a11y.filter(function (value, index) {
          if (value.id === set.id) {
            svg.append("title").text(value.title);
            svg.append("desc").text(value.desc);
          }
        })

        let group = svg
          .attrs({ "width": width, "height": svgHeight })
          .append('g')
          .attrs({
            "tabindex": "0",
            "transform": `translate(${0}, ${margin.top})`
          });
        
        let data = set.data;

        // grid line --------------------------------------------
        
        let yScaleLine = d3
          .scaleLinear()
          .domain(d3.extent([ {y : 0}, {y : 6}], function (d) { 
            return d.y
          }))
          .rangeRound([height, 0]);

        group.append('g')
          .attr('class', set.case === 'case-1' ? 'grid-area' : 'grid-area-e')
          .call(
            d3.axisLeft(yScaleLine)
              .ticks(2)
              .tickSize(-width)
          );

        // 메세지 (손님이 가장 많아요) -----------------------------------

        group
          .append('g')
          .attrs({
            "width": 240,
            "height": height,
            "transform": `translate(150, -50)`,
          })
          .append("rect")
          .attrs({
            "width": 240,
            "height": height + 50,
            "fill": "#f8f8f8",
          });

        // group.append('g').append("text")
        //   .style("fill", "#111")
        //   .style("opacity", 0)
        //   .attrs({
        //     "class": "label-score",
        //     "dx": 10,
        //     "x": function (d) {
        //       return x(d.name);
        //     },
        //     "y": function (d) {
        //       return y(((d.value * height) / 100 - 10));
        //     }
        //   })
        //   .transition().duration(600).ease(d3.easeExp)
        //   .style("opacity", 1)
        //   .attrs({
        //     "y": function (d) {
        //       return y(((d.value * height) / 100) + 28);
        //     }
        //   })
        //   .tween("text", function(d) {
        //     return function (t) {
        //       d3.select(this).text(d.message);
        //     };
        //   });

        // xAxis ----------------------------------------------
        
        let xScale = d3.scaleBand()
          .rangeRound([-1, width]) // |-| 
          .padding(0.1)
          .domain(data.map(function (d) {
            return d[0];
          }))

        group.append('g')
          .attr('class', set.case === 'case-1' ? 'axis axis--x' : 'axis axis--x-even')
          .attr('transform', `translate(0, ${height})`)
          .call(d3.axisBottom(xScale));


        // yAxis ----------------------------------------------
        
        let yScale = d3.scaleLinear()
          .rangeRound([height, 0])
          .domain([
            0, 
            d3.max(data, (function (d) {
              return d[1];
            })
          )
          ]);


        // data 판별 
        let onlyZero = data.every(function (v) { return v[1] === 0});
        if (onlyZero !== true) {

          // line -----------------------------------------------
          let line = d3.line()
            .x(function (d, i) {
              return xScale(d[0]) + xScale.bandwidth() / 2;
            })
            .y(function (d) {
              return yScale(d[1]);
            })
          
          group.append('g').append('path')
            .attr('fill', 'none')
            .attr('stroke', '#009688')
            .attr('d', line(data))
            // .attr('stroke-width', '0')
            // .transition().duration(500).ease(d3.easeExp)
            .attr('stroke-width', '2')
            // .delay(500)

        } else {
          // group.append("text")
          //   .attrs({
          //     "class": "label-noData",
          //     'transform': `translate(${(width - 110) / 2}, ${(height + 12) / 2})`
          //   })
          //   .text("유지비가 없어요!");
        }

      }, set.id);
    };

    let BarLine = function (set) {
      CHART(function (a11y) {
        
        margin.top = 20;

        // 전체 height 정의
        height = svgHeight - margin.top - margin.bottom;

        // svg --------------------------------------------

        let svg = d3
          .select(`#${set.id}`)
          .select('svg');

        a11y.filter(function (value, index) {
          if (value.id === set.id) {
            svg.append("title").text(value.title);
            svg.append("desc").text(value.desc);
          }
        })

        let group = svg
          .attrs({ "width": width, "height": svgHeight })
          .append('g')
          .attrs({
            "tabindex": "0",
            "transform": `translate(${0}, ${margin.top})`
          });

        // grid line --------------------------------------------
        
        let yScaleLine = d3
          .scaleLinear()
          .domain(d3.extent([ {y : 1}, {y : 5}], function (d) { 
            return d.y
          }))
          .rangeRound([height, 0]);

        group.append('g')
          .attr('class', 'grid-area-b')
          .call(
            d3.axisLeft(yScaleLine)
              .ticks(4)
              .tickSize(-width)
          );

        // xAxis --------------------------------------------

        let x = d3.scaleBand()
          .rangeRound([-1, width]) // |-| 
          .domain(set.data.map(function (d) {
            return d.name
          }))
          .padding(.74);

        let xAxis = d3.axisBottom(x);
        
        // xAxis
        group.append('g')
          .attr('class', 'axis-bl')
          .attr('transform', `translate(0, ${height})`)
          .call(xAxis);

        // bar --------------------------------------------
        
        let y = d3.scaleLinear()
          .range([height, 0])
          .domain([0, height])
          .nice();

        let rx = 5;
        let ry = 5;

        let bars = group.selectAll("bar")
          .data(set.data)
          .enter()
          .append("g");
        
        let bar = bars.append("path")
          .style("fill", "rgba(132, 215, 211, 0.50)")
          .style("opacity", 0)
          .attr("d", function (item) {
            return `
              M${x(item.name)}, ${y(0)}
              a5, 5 0 0 1 5, -5
              h10
              a5, 5 0 0 1 5, 5
              v${0}
              h-20Z
            `
          })
          .transition().duration(500).ease(d3.easeBack)
          .style("opacity", 1)
          .attr("d", function (item) {
            return `
              M${x(item.name) - 4}, ${y((item.value * height) / 100)}
              a${rx}, ${ry} 0 0 1 ${rx}, ${-ry}
              h10
              a${rx}, ${ry} 0 0 1 ${rx}, ${ry}
              v${height - y((item.value * height) / 100)}
              h-20Z
            `
          });

      }, set.id);
    };

    let Pie = function (set) {

    };

    return {
      Donut: Donut,
      DonutUpdate: DonutUpdate,
      SubDonut: SubDonut,
      ExDonut: ExDonut,
      Bar: Bar,
      DoubleBar: DoubleBar,
      MonthBar: MonthBar,
      CashBar: CashBar,
      DayBar: DayBar,
      Line: Line,
      TimeLine: TimeLine,
      BarLine: BarLine,
      Pie: Pie
    }
  }();

}(jQuery);