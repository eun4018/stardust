define(function () {
  return exports = function (dataSet) {
    new Vue({
      template:`
      <div 
        :id="_id()"
        class="LinePriceChart" 
        data-chart-type="" 
        role="img"
        :class="_case()"
        ref="waypointActive">
        <div class="chartGroup">
          <div class="title-desc blind">
            <em>{{title}}</em>
            <p>{{desc}}</p>
          </div>

          <ul class="y-area" aria-label="Y축 범위">
            <li 
              v-for="(item, index) in yArea" 
              :key="item.id"></li>
          </ul>

          <div 
            v-if="result == false"
            class="chart-line-css" 
            :data-dp-total="xLength()"
            data-chart-type="line-case-6"
            ref="lineActive">
            <ul class="line-chart">
              <li
                v-for="(item, index) in xArea" 
                :key="item.id"
                :class="{selected: item.selected}">
                <div class="line-segment"></div>
                <div class="data-point" 
                  :aria-label="item.name" 
                  :data-value="item.value"></div>
              </li>
            </ul>
          </div>

          <ul class="x-area" aria-level="X축 범위" ref="xActive">
            <li
              v-for="(item, index) in xArea" 
              :key="item.id">
              <em class="x">{{item.name}}</em>
            </li>
          </ul>

          <ul v-if="result == false" class="x-area-event">
            <li
              v-for="(item, index) in xArea" 
              :key="item.id"
              :aria-pressed="item.pressed"
              :class="{selected: item.selected}"
              v-on:click="selectedClick(index)">
                <div class="tooltip-area"
                  :style="{bottom: _value(item.value) + 'px'}">
                  <div class="tooltip"><span>{{item.price}}</span></div>
                </div>
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
          yArea: 4,
          noResult: dataSet.noResult,
          result: false,
          maxValue: 0,
          a11y: [
            {
              "id": "CAR-002-0001-1",
              "title": "내 차 시세 변동",
              "desc": "내 차 시세 변동 내역 및 예측 정보"
            },
            {
              "id": "CAR-003-0001-1",
              "title": "자동차 유지비",
              "desc": "최근 12개월간 자동차 유지비 정보"
            },
            {
              "id": "CAR-003-0001-2",
              "title": "자동차 유지비",
              "desc": "최근 12개월간 자동차 유지비 정보"
            },
          ],
          title : '',
          desc: ''
        }
      },
      created: function () {
        if (typeof this.xArea == 'object') {
          this.xArea.map(function(value, index) {
            Object.assign(value, {selected: false, pressed: false})
            
            if (dataSet.case === 'case-1' && index === 1) {
              Object.assign(value, {selected: true, pressed: true})
            }
          })
        }

        // 수입과 지출이 0일 때 '수입과 지출이 없어요.' 메세지 출력
        this.result = this.xArea.every(function (data, index) {
          return data.value === '0'
        })

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
        xLength: function () {
          return this.xArea.length
        },
        _value: function (value) {
          // 상대값 계산 (해당 데이터값 / 가장 높은 데이터값) * 차트 높이 값
          return (parseInt(value) / this.maxValue) * 130;
        },
        selectedClick: function (_index) {
          let rendering = this.xArea.filter(function (value, index) {
            let obj;
            if ( _index !== index ) {
              obj = Object.assign(value, {selected: false, pressed: false})
            } else {
              obj = Object.assign(value, {selected: true, pressed: true})
            }

            return obj;
          });
          this.xArea = rendering;
        }
      },
      computed: {
      },
      mounted: function () {

        // refs 전역 객체 정의 : waypoint 사용
        let _refs = this.$refs;
        let _xData = this.xArea;

        // waypoint Active addClass
        document.getElementById(_refs.waypointActive.id).classList.add('waypointActive');
  
        if (_refs.lineActive !== undefined) {
          // 라인차트 양쪽 여백 반영
          let _interval = _refs.xActive.childNodes[0].clientWidth / 2;
          _refs.lineActive.style.margin = '0 ' + _interval+'px';
        }

        // jQuery LineCssChart 호출
        myFunc.getChartLineCss(dataSet.id);
        
      }
    });
  };
});