define(function () {
  return exports = function (dataSet) {
    new Vue({
      template:`
      <div
        :id="_id()"
        class="BarChart" 
        data-chart-type="guest-month" 
        role="img"
        ref="waypointActive">
        <div class="chartGroup">
          <div class="title-desc blind">
            <!-- // WAI-ARIA -->
            <em>요일별 소비분석</em>
            <p>지난분기 동안 지출 요일별 횟수 분석 정보</p>
          </div>

          <ul class="x-area" aria-label="X축 범위">
            <li 
              v-for="(item, index) in xArea" 
              :key="item.id" 
              :class="{ isActive: number(item.number) }">
              <span class="bar">
                <em :aria-valuenow="item.value" 
                ref="valueHight"></em>
                <div v-show="item.number" ref="tooltipHight" class="tooltip"><span>{{item.number}}</span></div>
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
        openScope: function (_index) {
          return this.open[_index];
        },
        xLength: function () {
          return this.xArea.length
        },
        _value: function (value) {
          // 상대값 계산 (해당 데이터값 / 가장 높은 데이터값) * 차트 높이 값
          return (parseInt(value) / this.maxValue) * 80;
        },
        number: function (_number) {
          return this.isActive = _number !== undefined;
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
                let _v = (parseInt(data.value) / _maxValue) * 80; // 상대값 계산

                _refs.valueHight[index].style.height = _v + 'px';
                _refs.tooltipHight[index].style.bottom = (_v + 10) + 'px';
                let em = _refs.valueHight[index];
                let ariaValue = $(em).attr('aria-valuenow')
                if(ariaValue == _maxValue){
                  var add = $(em).parent().addClass('max-color')
                  $(add).children('em').attr('aria-valuenow',0)
                  
                }
                function second(){
                  var arr = $.map($(_xData),function(data,index){
                    return $(_refs.valueHight[index]).attr('aria-valuenow')
                  })
                  maxValue2 = Math.max.apply(null,arr);
                  if($(_refs.valueHight[index]).attr('aria-valuenow') == maxValue2){
                    $(_refs.valueHight[index]).parent().addClass('second-color')
                  }
                }
                return second();
              })
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