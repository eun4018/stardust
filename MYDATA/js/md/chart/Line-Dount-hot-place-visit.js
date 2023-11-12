define(function () {
  return exports = function (dataSet) {
    new Vue({
      template:`
      <div 
        :id="_id()"
        data-id="HOT-001-0001-0-2"
        class="LineDonutChart" 
        data-chart-type="hot-place-visit" 
        role="img"
        ref="waypointActive">
        <div class="chartGroup">
          <div class="title-desc blind">
            <em>방문추세</em>
            <p>3개월 방문자수 & 증감율 정보</p>
          </div>

          <div 
            class="chart-line-css" 
            :data-dp-total="xLength()"
            data-chart-type="line-case-2">
            <ul class="line-chart">
              <li
                v-for="(item, index) in xArea" 
                :key="item.id">
                <div class="line-segment"></div>
                <div class="data-label"></div>
                <div class="data-point" 
                  :aria-label="item.name" 
                  :data-value="item.value"></div>
              </li>
            </ul>
          </div>

          <ul class="x-area" aria-level="X축 범위">
            <li
              v-for="(item, index) in xArea" 
              :key="item.id">
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
        xLength: function () {
          return this.xArea.length
        },
        _value: function (value) {
          // 상대값 계산 (해당 데이터값 / 가장 높은 데이터값) * 차트 높이 값
          return (parseInt(value) / this.maxValue) * 150;
        },
      },
      computed: {
      },
      mounted: function () {

        // refs 전역 객체 정의 : waypoint 사용
        let _refs = this.$refs;

        $(`#${dataSet.id}`).waypoint({
          handler: function () {

            // waypoint Active addClass
            document.getElementById(_refs.waypointActive.id).classList.add('waypointActive');

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