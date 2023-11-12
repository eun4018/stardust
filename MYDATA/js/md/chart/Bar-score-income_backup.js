define(function () {
  return exports = function (dataSet) {
    new Vue({
      template:`
      <div
        :id="_id()"
        class="DoubleBarChart" 
        data-chart-type="hot-place-gender" 
        role="img"
        :class="_case()"
        ref="waypointActive">
        <div class="chartGroup">
          <div class="title-desc blind">
          <!-- // WAI-ARIA -->
            <em>3개월 동안의 수입,지출, 저축/투자</em>
            <p>3개월 동안의 수입,지출, 저축/투자 내역</p>
          </div>

          <ul class="x-area" aria-level="X축 범위">
            <li
              v-for="(item, index_1) in xArea" 
              :key="item.id"
              :class="{ isActive: item.max }">
              <span class="bar" ref="valueHight">
                <em 
                  v-for="(expense, index_2) in item.expense" 
                  :key="expense.id"
                  :aria-label="expense.name" 
                  :aria-valuenow="expense.value"
                  :aria-pressed="item.pressed"
                  v-on:click="selectedClick(index_1, index_2)"></em>

                  <div 
                  v-for="(expense, index_2) in item.expense" 
                  class="tooltip"
                  :class="{selected: expense.selected}"
                  :style="{bottom: _value(expense.value) + 'px'}"><span>{{expense.value}}만원</span></div>

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
          case: dataSet.case,
          xArea: dataSet.x,
          isActive: true,
          maxValue: 0,
        }
      },
      created: function () {
        if (typeof this.xArea == 'object') {
          this.xArea.map(function (value, index) {
            // let _max = value.max === true ? index : '';
            value.expense.map(function (data, index) {
              Object.assign(data, {selected: false, pressed: false})

              // 가장 높은 값 노출
              if (data.max === true) {
                data.selected = true;
                data.pressed = true;
              }
            })
          })
        }

        // 중복 배열 높이 값 정의
        let arr = [];
        let maxList = this.xArea.map(function (data) {
          return data.expense.map(function (data) {
            return data.value;
          });
        });

        let data0 = maxList.map(function (data) {
          return data[0];
        });

        let data1 = maxList.map(function (data) {
          return data[1];
        });

        let data2 = maxList.map(function (data) {
          return data[2];
        });

        // 가장 높은 값 구하기
        this.maxValue = Math.max.apply(null, arr.concat(data0, data1, data2));
      },
      methods: {
        _id: function () {
          return this.id;
        },
        _value: function (value) {
          // 상대값 계산 (해당 데이터값 / 가장 높은 데이터값) * 차트 높이 값
          return (parseInt(value) / this.maxValue) * 130;
        },
        _case: function () {
          return this.case;
        },
        _expense: function () {
          return this.case === 'expense' ? 0 : 1;
        },
        selectedClick: function (_index_1, _index_2) {
          let rendering = this.xArea.map(function (value, index_1) {
            value.expense.filter(function (data, index_2) {
              let obj;

              if ( _index_1 !== index_1) {
                obj = Object.assign(data, {selected: false, pressed: false})
              } else {
                if (_index_2 === index_2) {
                  obj = Object.assign(data, {selected: true, pressed: true})
                } else {
                  obj = Object.assign(data, {selected: false, pressed: false})
                }
              }
            })
            return value;
          })
          
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
              _xData.map(function (value, index_1) {
                let n1 = index_1;
                value.expense.map(function (data, index_2) {
                  let n2 = index_2;
                  let n2_3 = index_2 + 3;
                  let _v = (parseInt(data.value) / _maxValue) * 130; // 상대값 계산
                  
                  _refs.valueHight[n1].childNodes[n2].style.height = _v + 'px';
                });
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