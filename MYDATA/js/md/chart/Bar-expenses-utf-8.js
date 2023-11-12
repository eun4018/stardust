
define(function () {
  return exports = function (dataSet) {
    new Vue({
      template:`
      <div
        :id="_id()"
        class="ExpensesBarChart" 
        data-chart-type="Bar-Expenses" 
        role="img"
        :class="_case()"
        ref="waypointActive">
        <div class="chartGroup">
          <div class="title-desc blind">
          <!-- // WAI-ARIA -->
            <em>{{title}}</em>
            <p>{{desc}}</p>
          </div>

          <div 
            v-if="_case() === 'case-3'" 
            class="label-lastMonth">
            <div
              ref="percentHight">
              <span>지난달 대비</span>
              <em :class="_state()">{{_lastMonth()}}원</em>
            </div>
          </div>

          <ul class="y-area" aria-label="Y축 범위">
            <li 
              v-for="(item, index) in yArea" 
              :key="item.id"></li>
          </ul>

          <ul class="x-area" aria-level="X축 범위">
            <li
              v-for="(item, index) in xArea" 
              :key="item.id"
              :class="_case()+'-' + index">
              <span class="bar" ref="valueHight">
                <em 
                  v-for="(data, index) in item.data" 
                  :key="data.id"
                  v-show="data.value !== '0'"
                  :aria-label="data.name" 
                  :aria-valuenow="data.value"></em>
              </span>
              <em class="x">{{item.name}}</em>
            </li>
          </ul>

          <div v-if="result !== false" class="no-result" v-text="noResult"></div>
        </div>
      </div>`,
      el: `#${dataSet.id}`,
      props:[],
      data: function () {
        return {
          id: dataSet.id,
          case: dataSet.case,
          xArea: dataSet.x,
          yArea: 5,
          noResult: dataSet.noResult,
          result: false,
          percent: dataSet.percent,
          lastMonth: dataSet.lastMonth,
          state: dataSet.state,
          maxValue: 0,
          a11y: [
            {
              "id": "CAR-001-0001-1",
              "title": "자동차 유지비",
              "desc": "지난달 대비 자동차 유지비 정보"
            },
            {
              "id": "CAR-001-0001-2",
              "title": "자동차 유지비",
              "desc": "지난달 대비 자동차 유지비 정보"
            },
            {
              "id": "CON-001-0001-1",
              "title": "현금흐름",
              "desc": "지정일 기준 현금흐름 예측 정보"
            },
            {
              "id": "CON-001-0001-2",
              "title": "현금흐름",
              "desc": "지정일 기준 현금흐름 예측 정보"
            },
            {
              "id": "CON-001-0001-3",
              "title": "현금흐름",
              "desc": "지정일 기준 현금흐름 예측 정보"
            },
            {
              "id": "CON-001-0001-4",
              "title": "현금흐름",
              "desc": "지정일 기준 현금흐름 예측 정보"
            },
            {
              "id": "CON-005-0001-1",
              "title": "전체 현금흐름",
              "desc": "지정일 기준 전체 현금흐름 예측 정보"
            },
            {
              "id": "CON-005-0001-1",
              "title": "전체 현금흐름",
              "desc": "지정일 기준 전체 현금흐름 예측 정보"
            },
          ],
          title : '',
          desc: ''
        }
      },
      created: function () {

        // 수입과 지출이 0일 때 '수입과 지출이 없어요.' 메세지 출력
        let resultBol = this.xArea.map(function (value, index) {
          return value.data.every(function (data, index) {
            return data.value == 0 
          })
        })
        this.result = resultBol.every(function (data, index) {
          return data == true
        })

        // 중복 배열 높이 값 정의
        let arr = [];
        let maxList = this.xArea.map(function (data) {
          return data.data.map(function (data) {
            return data.value;
          });
        });
        let data0 = maxList.map(function (data) {
          return data[0];
        });
        let data1 = maxList.map(function (data) {
          return data[1];
        });

        // a11y
        let a11y = this.a11y.filter(function (data, index) {
          if (data.id === dataSet.id) return data;
        });
        this.title = a11y.length === 1 ? a11y[0].title : '';
        this.desc = a11y.length === 1 ? a11y[0].desc : '';

        // 가장 높은 값 구하기
        this.maxValue = Math.max.apply(null, arr.concat(data0, data1[0]));
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
        _state: function () {
          return this.state;
        },
        _lastMonth: function () {
          return this.lastMonth;
        },
        _value: function (value) {
          // 상대값 계산 (해당 데이터값 / 가장 높은 데이터값) * 차트 높이 값
          return (parseInt(value) / this.maxValue) * 130
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
              
              _xData.map(function (value, index_1) {
                let n1 = index_1;
                value.data.map(function (data, index_2) {
                  let n2 = index_2;                  
                  let _v = (parseInt(data.value) / _maxValue) * 130; // 상대값 계산

                  _refs.valueHight[n1].childNodes[n2].style.height = _v + 'px';
                });
              });
            }

            // 지난달 대비 / 평균값
            if (_percent) _refs.percentHight.style.bottom = _percent + '%';

            // waypoint Active addClass
            document.getElementById(_refs.waypointActive.id).classList.add('waypointActive');

            this.destroy();
          },
          offset: '80%'
        });
      }
    });
  };
});
