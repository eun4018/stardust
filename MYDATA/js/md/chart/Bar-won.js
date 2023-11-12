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

          <!-- div v-if="_case() !== 'case-3'" class="label-max"><em>1,000만원</em></div --->
          <!--<div v-if="_case() == 'case-3'" class="label-max"
            ref="percentHight"><em>평균 {{_percent()}}만원</em></div>-->

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
              "id": "REP-001-0002-05-1",
              "title": "첫번째 카드 사용내역",
              "desc": "첫번째 카드 사용 지출정보"
            },
            {
              "id": "REP-001-0002-05-2",
              "title": "두번째 카드 사용내역",
              "desc": "두번째 카드 사용 지출정보"
            },
            {
              "id": "REP-001-0002-05-3",
              "title": "세번째 카드 사용내역",
              "desc": "세번째 카드 사용 지출정보"
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
          return this.case !== 'case-3' ? '만원' : '만원';
        },
        _value: function (value) {
          // 상대값 계산 (해당 데이터값 / 가장 높은 데이터값) * 차트 높이 값
          return (parseInt(value) / this.maxValue) * 100;
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
                let _v = (parseInt(data.value) / _maxValue) * 100; // 상대값 계산

                _refs.valueHight[index].style.height = _v + 'px';

                if (_refs.valueBottomHight1) _refs.valueBottomHight1[index].style.bottom = _v + 'px';
                let em = _refs.valueHight[index];
                let ariaValue = $(em).attr('aria-valuenow')
                if(ariaValue == _maxValue){
                  $(em).parent().addClass('max-color')
                }
              });
            }

           /* if (_percent !== 'undefined') {
              // 지난달 대비 / 평균값
              if (_percent) _refs.percentHight.style.bottom = _percent > 101 ? '120px' : (_percent + 20) + 'px';
              else if (_percent === 0) _refs.percentHight.style.bottom = '20px';
            }*/

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