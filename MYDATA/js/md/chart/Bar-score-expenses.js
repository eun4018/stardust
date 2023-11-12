define(function () {
  return exports = function (dataSet) {
    new Vue({
      template:`
      <div 
        :id="_id()"
        class="BarChart" 
        data-chart-type="score" 
        role="img"
        :class="_case()"
        ref="waypointActive">
        <div class="chartGroup">
          <div class="title-desc blind">
            <!-- // WAI-ARIA -->
            <em>{{title}}</em>
            <p>{{desc}}</p>
          </div>
          <ul 
            v-if="xArea !== 0" 
            class="x-area" aria-label="X축 범위">
            <li 
              v-for="(item, index) in xArea" 
              :key="item.id"
              :class="_case() + '-' + index">
              <span class="bar">
                <em :aria-valuenow="item.value" 
                ref="valueHight"></em>
                <strong ref="valueBottomHight1"><i>{{item.score}}</i>{{unit()}}</strong>
              </span>
              <em class="x">{{item.name}}</em>
            </li>
          </ul>
        </div>
      </div>`,
      el: `#${dataSet.id}`,
      props:[],
      data: function () {
        return {
          id: dataSet.id,
          xArea: dataSet.x,
          case: dataSet.case,
          percent: dataSet.percent,
          maxValue: 0,
          a11y: [
            {
              "id": "REP-001-0001-01-1",
              "title": "나의 소비 지출 비중",
              "desc": "소비/지출, 자산/투자, 대출이자, 보험, 그외(기타) 지출내역"
            },
          ],
          title : '',
          desc: ''
        }
      },
      created: function () {
        // 가장 높은 값 구하기
        this.maxValue = Math.max.apply(null, this.xArea.map(function (data) {
          return data.value;
        }));
        // a11y
        let a11y = this.a11y.filter(function (data, index) {
          if (data.id === dataSet.id) return data;
        });
        this.title = a11y.length === 1 ? a11y[0].title : '';
        this.desc = a11y.length === 1 ? a11y[0].desc : '';
      },
      methods: {
        _id: function () {
          return this.id;
        },
        _case: function () {
          return this.case;
        },
        _percent: function () {
          return this.percent;
        },
        unit: function () {
          return this.case !== 'case-3' ? '점' : '%';
        },
        _value: function (value) {
          // 상대값 계산 (해당 데이터값 / 가장 높은 데이터값) * 차트 높이 값
          return (parseInt(value) / this.maxValue) * 130;
        },
      },
      computed: {
      },
      mounted: function () {        
        // refs 전역 객체 정의 : waypoint 사용
        let _refs = this.$refs;
        let _xData = this.xArea;
        let _maxValue = this.maxValue;
        let _percent = this.percent;
        $(`#${dataSet.id}`).waypoint({
          handler: function () {
            if (typeof _xData == 'object') {
              _xData.map(function (data, index) {
                let _v = (parseInt(data.value) / _maxValue) * 130; // 상대값 계산
                // let _v = parseInt(data.value);
                let _px = _refs.valueHight[index].style.height = _v + 'px';
                if (_refs.valueBottomHight1) _refs.valueBottomHight1[index].style.bottom = _v + 'px'

                let em = _refs.valueHight[index];
                let ariaValue = $(em).attr('aria-valuenow')
                if(ariaValue == _maxValue){
                  $(em).parent().addClass('max-color')
                }
              });
            }
            // waypoint Active addClass
            document.getElementById(_refs.waypointActive.id).classList.add('waypointActive');
                        this.destroy();
          },
          offset: '80%'
        });
        if (typeof _xData == 'object') {
          _xData.map(function (data, index) {
            if (_refs.valueBottomHight1) {
              $(_refs.valueBottomHight1[index].childNodes[0]).counterUp({ delay: 10, time: 400});
            }
          });
        }

      }
    });
  };
});