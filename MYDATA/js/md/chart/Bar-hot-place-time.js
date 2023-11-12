define(function () {
  return exports = function (dataSet) {
    new Vue({
      template:`
      <div
        :id="_id()" 
        data-id="HOT-001-0001-0-1"
        class="BarChart" 
        data-chart-type="hot-place-time" 
        role="img"
        ref="waypointActive">
        <div class="chartGroup">
          <div class="title-desc blind">
            <em>방문추세</em>
            <p>3개월 방문자수 & 증감율 정보</p>
          </div>

          <!-- div 
            class="chart-line-css" 
            :data-dp-total="xLength()"
            data-chart-type="line-case-1">
            <ul class="line-chart">
              <li
                v-for="(item, index) in xArea" 
                :key="item.id">
                <div class="line-segment"></div>
                <div class="data-label"></div>
                <div class="data-point" 
                  :aria-label="item.name" 
                  :data-value="item.up"></div>
              </li>
            </ul>
          </div -->

          <div 
            class="average-line-area">
            <div class="line" 
              :aria-valuenow="average()"
              ref="percentHight">
              <span>주변 업종<br>월평균</span>
            </div>
          </div>

          <ul class="x-area" aria-level="X축 범위">
            <li
              v-for="(item, index) in xArea" 
              :key="item.id">
              <span class="bar">
                <em 
                  :aria-valuenow="item.value" 
                  ref="valueHight"></em>
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
          yAverage: dataSet.average,
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
        average: function () {
          return this.yAverage;
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
        let _yAverage = this.yAverage;

        $(`#${dataSet.id}`).waypoint({
          handler: function () {

            if (typeof _xData == 'object') {
              _xData.map(function (data, index) {
                let _v = (parseInt(data.value) / _maxValue) * 130; // 상대값 계산
                
                _refs.valueHight[index].style.height = _v + 'px';
              });
            }

            // 지난달 대비 / 평균값
            if (_yAverage) _refs.percentHight.style.bottom = _yAverage + '%';

            // waypoint Active addClass
            document.getElementById(_refs.waypointActive.id).classList.add('waypointActive');

            // jQuery LineCssChart 호출
            // myFunc.getChartLineCss(dataSet.id);
            
            this.destroy();
          },
          offset: '80%'
        });
      }
    });
  };
});