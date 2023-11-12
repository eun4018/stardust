define(function () {
  return exports = function (dataSet) {
    new Vue({
      template:`
      <div
        :id="_id()"
        class="BarChart" 
        data-chart-type="cash" 
        role="img"
        ref="waypointActive">
        <div class="chartGroup" ref="chartGroupWidth">
          <div class="title-desc blind">
            <!-- // WAI-ARIA -->
            <em>계좌별 현금흐름</em>
            <p>지정일 기준 계좌별 현금흐름 예측 정보</p>
          </div>

          <div 
            class="chart-line-css" 
            :data-dp-total="xLength()"
            data-chart-type="line-case-4"
            ref="lineActive">
            <!-- :style="{width: (xLength() * 32) + 'px'}" -->
            <ul class="line-chart">
              <li
                v-for="(item, index) in xArea" 
                :key="item.id"
                :class="{selected: item.selected}">
                <div class="line-segment"></div>
                <div class="data-point" 
                  :aria-label="item.name" 
                  :data-value="item.bal"></div>
              </li>
            </ul>
          </div>

          <ul class="x-area" aria-level="X축 범위" ref="xActive">
            <li
              v-for="(item, index) in xArea" 
              :key="item.id"
              :class="{isActiveLack: item.lack, selected: item.selected}"
              :aria-pressed="item.pressed"
              v-on:click="selectedClick(index)">
              <span class="bar" aria-pressed="false" ref="valueWidth"><em :aria-valuenow="item.value" ref="valueHight"></em></span>
              <em class="x">{{item.name}}</em>
            </li>
          </ul>

          <ul class="x-area-event" ref="valueWidth3">
            <li
              v-for="(item, index) in xArea" 
              :key="item.id"
              :aria-pressed="item.pressed"
              v-on:click="selectedClick(index)"
              ref="valueWidth2"></li>
          </ul>
        </div>
      </div>`,
      el: `#${dataSet.id}`,
      props:[],
      data: function () {
        return {
          id: dataSet.id,
          yArea: dataSet.y,
          xArea: dataSet.x,
          maxValue: 0,
        }
      },
      created: function () {
        if (typeof this.xArea == 'object') {
          this.xArea.map(function(value) {
            Object.assign(value, {selected: false, pressed: false})
          })
        }

        // 가장 높은 값 구하기
        this.maxValue = Math.max.apply(null, this.xArea.map(function (data) {
          return data.value;
        }));
      },
      methods: {
        _id: function () {
          return this.id;
        },
        yLength: function (_index) {
          return this.yArea.length === _index + 1;
        },
        xLength: function () {
          return this.xArea.length
        },
        _value: function (value) {
          // 상대값 계산 (해당 데이터값 / 가장 높은 데이터값) * 차트 높이 값
          return (parseInt(value) / this.maxValue) * 130
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

          // 외부 함수 호출
          dayEvent(_index);
        }
      },
      computed: {
      },
      mounted: function () {

        // today default
        this.selectedClick(0);

        // refs 전역 객체 정의 : waypoint 사용
        let _refs = this.$refs;
        let _xData = this.xArea;
        let _maxValue = this.maxValue;
        
        $(`#${dataSet.id}`).waypoint({
          handler: function () {
            
            let _w = (_refs.chartGroupWidth.clientWidth - 40) / _xData.length;

            if (typeof _xData == 'object') {
              _xData.map(function (data, index) {
                // let _v = (parseInt(data.value) / _maxValue) * 130;
                _refs.valueHight[index].style.height = parseInt(data.value) + 'px';

                // x값 개수가 10개 이하 일 때 width값 화면 전체 사용
                if (_xData.length < 11) {
                  _refs.valueWidth[index].style.width = _w + 'px';
                  _refs.valueWidth2[index].style.width = _w + 'px';
                  _refs.valueWidth3.style.width = (_w * _xData.length) + 'px';
                } else {
                  _refs.valueWidth[index].style.width = '32px';
                  _refs.valueWidth2[index].style.width = '32px';
                  _refs.valueWidth3.style.width = (32 * _xData.length) + 'px';
                }              
              });
              
            }

            // waypoint Active addClass
            document.getElementById(_refs.waypointActive.id).classList.add('waypointActive');

            if (_refs.lineActive !== undefined) {
              // 라인차트 양쪽 간격 반영
              let _interval = (_refs.xActive.childNodes[0].clientWidth) / 2;
              _refs.lineActive.style.margin = '0 0 0 ' + _interval+'px';
              _refs.lineActive.style.padding = '0 ' + _interval+'px';

              // x값 개수가 10개 이하 일 때 width값 화면 전체 사용
              if (_xData.length < 11) {
                _refs.lineActive.style.width = (_w * _xData.length) +'px';
              } else {
                _refs.lineActive.style.width = (32 * _xData.length) +'px';
              }
            }

            // jQuery LineCssChart 호출
            myFunc.getChartLineCss(dataSet.id);

            this.destroy();
          },
          offset: '80%'
        });
      }
    });
  };
});