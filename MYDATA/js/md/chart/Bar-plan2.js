define(function () {
  return exports = function (dataSet) {
    new Vue({
      template:`
      <div 
        :id="_id()"
        class="BarChart" 
        data-chart-type="plan" 
        role="img"
        :class="_case()"
        ref="waypointActive">
        <div class="chartGroup">
          <div class="title-desc blind">
            <!-- // WAI-ARIA -->
            <em>{{title}}</em>
            <p>{{desc}}</p>
          </div>
          <div v-if="_case() == 'case-1'" class="label-max"
          :style="{bottom: _percent() + '%'}"><em>평균</em></div>
          <ul 
            v-if="xArea !== 0" 
            class="x-area" aria-label="X축 범위">
            <li 
              v-for="(item, index) in xArea" 
              :key="item.id">
              <span class="bar">
                <em :aria-valuenow="item.value" 
                ref="valueHight"></em>
              </span>
              <em class="x">{{item.name}}</em>
            </li>
          </ul>
          <ul 
            v-if="xArea !== 0" 
            class="x-area-event">
            <li 
              v-for="(item, index) in xArea" 
              :key="item.id"
              :class="{selected: item.selected}"
              :aria-pressed="item.pressed"
              v-on:click="selectedClick(index)">
              <span v-if="item.price !== '0'" class="bar">
                <div class="tooltip"><em>{{item.name}}</em><span>{{item.price}}원</span></div>
              </span>
            </li>
          </ul>
          <div v-else class="no-result" v-text="noResult"></div>
        </div>
      </div>`,
      el: `#${dataSet.id}`,
      props:[],
      data: function () {
        return {
          id: dataSet.id,
          case: dataSet.case,
          yArea: dataSet.y,
          xArea: dataSet.x,
          percent: dataSet.percent,
          noResult: dataSet.noResult,
          maxValue: 0,
          a11y: [
            {
              "id": "REP-001-0001-01-2-1",
              "title": "최근 3개월 월별 이용금액",
              "desc": "최근 3개월간 이용금액 정보"
            },
            {
              "id": "REP-001-0002-04-1",
              "title": "최근 3개월 소비내역",
              "desc": "최근 3개월간 소비내역 정보"
            },
          ],
          title : '',
          desc: ''
        }
      },
      created: function () {
        if (typeof this.xArea == 'object') {
          this.xArea.map(function(value) {
            Object.assign(value, {selected: false, pressed: false})
          })

          if (this.case == 'case-1') this.yArea = 4;

          // 가장 높은 값 구하기
          this.maxValue = Math.max.apply(null, this.xArea.map(function (data) {
            return data.value;
          }));
        }

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
        yLength: function (_index) {
          return this.yArea.length === _index + 1;
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
        let _maxValue = this.maxValue;
        
        $(`#${dataSet.id}`).waypoint({
          handler: function () {
            if (typeof _xData == 'object') {
              _xData.map(function (data, index) {
                let _v = (parseInt(data.value) / _maxValue) * 130; // 상대값 계산
                _refs.valueHight[index].style.height = _v + 'px';

                // 해당 차트 height 위치값 % 사용
                if (_refs.valueBottomHight1) _refs.valueBottomHight1[index].style.bottom = _v + 'px'
                let em = _refs.valueHight[index];
                let ariaValue = $(em).attr('aria-valuenow')
                if(ariaValue == _maxValue){
                  $(em).parent().addClass('max-color').next().addClass('max-font')
                }
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