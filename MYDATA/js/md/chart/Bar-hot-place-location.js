define(function () {
  return exports = function (dataSet) {
    new Vue({
      template:`
      <di
        :id="_id()"
        class="BarChart" 
        data-chart-type="hot-place-location" 
        role="img"
        ref="waypointActive">
        <div class="chartGroup">
            <div class="title-desc blind">
              <!-- // WAI-ARIA -->
              <em>차트명</em>
              <p>차트설명</p>
            </div>

            <ul class="x-area" aria-level="X축 범위">
              <li
                v-for="(item, index) in xArea" 
                :key="item.id">
                <span class="bar">
                  <em :aria-valuenow="item.value" ref="valueHight"></em>
                </span>
                <em class="x">{{item.name}}</em>
              </li>
            </ul>
        </div>
      </di>`,
      el: `#${dataSet.id}`,
      props:[],
      data: function () {
        return {
          id: dataSet.id,
          open: dataSet.open,
          xArea: dataSet.x,
          isActive: false,
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
        _value: function (value) {
          // 상대값 계산 (해당 데이터값 / 가장 높은 데이터값) * 차트 높이 값
          return (parseInt(value) / this.maxValue) * 60;
        },
      },
      computed: {
      },
      mounted: function () {

        // refs 전역 객체 정의 : waypoint 사용
        let _refs = this.$refs;
        let _xData = this.xArea;
        let _maxValue = this.maxValue;

        $(`#${dataSet.id}`).waypoint({
          handler: function () {

            if (typeof _xData == 'object') {
              _xData.map(function (data, index) {
                let _v = (parseInt(data.value) / _maxValue) * 60; // 상대값 계산

                _refs.valueHight[index].style.height = _v + 'px';
              });
            }
            
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