define(function () {
  return exports = function (dataSet) {
    new Vue({
      template:`
      <div
        :id="_id()"   
        class="LineChart" 
        data-chart-type="guest-time" 
        role="img"
        ref="waypointActive">
        <div class="chartGroup">
          <div class="title-desc blind">
            <!-- // WAI-ARIA -->
            <em>시간별 손님 분석</em>
            <p>동종업종 시간대별 평균 거래건수 및 해당 매장 운영시간 정보</p>
          </div>
          
          <div
            class="open-scope"
            :aria-valuemin="openScope(0)"
            :aria-valuemax="openScope(1)"
            :aria-label="openScopeText()"><span>매장 평균 이용시간</span></div>

          <div 
            class="chart-line-css" 
            :data-dp-total="xLength()"
            data-chart-type="line-case-3">
            <ul class="line-chart">
              <li
                v-for="(item, index) in xArea" 
                :key="item.id">
                <div class="line-segment"></div>
                <div class="data-point" 
                  :aria-label="item.name" 
                  :data-value="item.value"></div>
              </li>
            </ul>
          </div>

          <ul class="x-area" aria-label="X축 범위">
            <li 
              v-for="(item, index) in xArea" 
              :key="item.id"
              :class="{x_right: index > 14}">
              <span class="bar">
                <div v-show="item.maxGuest" class="tooltip tooltip_time"><span>{{item.maxGuest}}</span></div>
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
          open: dataSet.open,
          xArea: dataSet.x,
          maxValue: 0,
        }
      },
      created: function () {

        // 가장 높은 값 구하기
        this.maxValue = Math.max.apply(null, this.xArea.map(function (data) {
          return data.value;
        }));
      },
      methods: {
        _id: function () {
          return this.id;
        },
        openScope: function (_index) {
          return this.open[_index];
          
        },
        openScopeText: function () {
          return `${this.open[0]}시부터 ${this.open[1]}시까지`;
        },
        xLength: function () {
          return this.xArea.length;
        },
        _value: function (value) {
          // 상대값 계산 (해당 데이터값 / 가장 높은 데이터값) * 차트 높이 값
          return (parseInt(value) / this.maxValue) * 100;
        },
      },
      computed: {
      },
      mounted: function () {

        // jQuery LineCssChart 호출
        myFunc.getChartLineCss(dataSet.id);
        // refs 전역 객체 정의 : waypoint 사용
        let _refs = this.$refs;
        $(`#${dataSet.id}`).waypoint({
          handler: function () {
        
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