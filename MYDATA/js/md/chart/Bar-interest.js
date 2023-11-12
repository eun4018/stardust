define(function () {
  return exports = function (dataSet) {
    new Vue({
      template:`
      <div 
        :id="_id()"
        class="BarChart" 
        data-chart-type="interest" 
        role="img"
        :class="_case()"
        ref="waypointActive">
        <div class="chartGroup">
          <div class="title-desc blind">
            <!-- // WAI-ARIA -->
            <em>{{title}}</em>
            <p>{{desc}}</p>
          </div>

          <ul class="y-area" aria-label="Y축 범위">
            <li 
              v-for="(item, index) in yArea" 
              :key="item.id"></li>
          </ul>

          <ul 
            v-if="xArea !== 0" 
            class="x-area" aria-label="X축 범위">
            <li 
              v-for="(item, index) in xArea" 
              :key="item.id">
              <span class="bar">
                <em :aria-valuenow="item.value" 
                ref="valueHight">
                    <div class="tooltip"><span>{{item.interest}}%</span></div>
                </em>
              </span>
              <em class="x">{{item.name}}</em>
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
          yArea: 3,
          xArea: dataSet.x,
          percent: dataSet.percent,
          noResult: dataSet.noResult,
          maxValue: 0,
          a11y: [
            {
              "id": "RAN-001-0002-1",
              "title": "대출금리",
              "desc": "시중 은행 기준 대출금리 정보"
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
                // _refs.valueHight[index].style.height = _v + 'px';

                // 해당 차트 height 위치값 % 사용
                _refs.valueHight[index].style.height = data.value + '%';
              });
            }

            // waypoint Active addClass
            document.getElementById(_refs.waypointActive.id).classList.add('waypointActive');

            this.destroy();
          },
          offset: '50%'
        });
      }
    });
  };
});