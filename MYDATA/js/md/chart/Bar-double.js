define(function () {
  return exports = function (dataSet) {
    new Vue({
      template:`
      <div
        :id="_id()"
        class="DoubleBarChart" 
        data-chart-type="Bar-double" 
        role="img"
        ref="waypointActive">
        <div class="chartGroup">
          <div class="title-desc blind">
          <!-- // WAI-ARIA -->
            <em>{{title}}</em>
            <p>{{desc}}</p>
          </div>

          <ul class="x-area" aria-level="X축 범위">
            <li
              v-for="(item, index) in xArea" 
              :key="item.id"
              :class="{ isActive: item.max }">
              <span class="bar" ref="valueHight">
                <em 
                  v-for="(data, index) in item.data" 
                  :key="data.id"
                  :aria-label="data.name" 
                  :aria-valuenow="data.value"></em>
                <b 
                  v-for="(data, index) in item.data" 
                  :key="data.id"><i>{{data.value}}</i>%</b>
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
          xArea: dataSet.x,
          maxValue: 0,
          a11y: [
            {
              "id": "SEM-001-0001-1",
              "title": "방문 손님 분석 거리별",
              "desc": "동종업종, 주변 매출 상위 10%매장, 해당 매장의 방문 손님(근거리/원거리) 분석 정보"
            },
            {
              "id": "SEM-001-0001-2",
              "title": "방문 손님 분석 재방문율",
              "desc": "동종업종, 주변 매출 상위 10%매장, 해당 매장의 방문 손님(재방문율) 분석 정보"
            },
            {
              "id": "SEM-001-0001-4",
              "title": "방문 손님 분석 남성/연령대별",
              "desc": "동종업종, 해당매장의 남성/연령대별 방문 분석 정보"
            },
            {
              "id": "SEM-001-0001-5",
              "title": "방문 손님 분석 여성/연령대별",
              "desc": "동종업종, 해당매장의 여성/연령대별 방문 분석 정보"
            },
          ],
          title : '',
          desc: ''
        }
      },
      created: function () {

        // 중복 배열 높이 값 정의
        let arr = [];
        let maxList = this.xArea.map(function (data) {
          return data.data.map(function (data) {
            return data.value;
          });
        });
        let data0 = maxList.map(function (data) {
          return data[0];
        });
        let data1 = maxList.map(function (data) {
          return data[1];
        });

        // a11y
        let a11y = this.a11y.filter(function (data, index) {
          if (data.id === dataSet.id) return data;
        });
        this.title = a11y[0].title;
        this.desc = a11y[0].desc;
        

        // 가장 높은 값 구하기
        this.maxValue = Math.max.apply(null, arr.concat(data0, data1));
      },
      methods: {
        _id: function () {
          return this.id;
        },
        _value: function (value) {
          // 상대값 계산 (해당 데이터값 / 가장 높은 데이터값) * 차트 높이 값
          return (parseInt(value) / this.maxValue) * 130
        },
      },
      computed: {
      },
      mounted: function () {
        
        // refs 전역 객체 정의 : waypoint 사용
        let _refs = this.$refs;
        let _xData = this.xArea;
        let _maxValue = this.maxValue;
        let _percent = this.percent;

        $(`#${dataSet.id}`).waypoint({
          handler: function () {
            
            if (typeof _xData == 'object') {  
              _xData.map(function (value, index_1) {
                let n1 = index_1;
                value.data.map(function (data, index_2) {
                  let n2 = index_2;
                  let n2_3 = index_2 + 3;
                  let _v = (parseInt(data.value) / _maxValue) * 130; // 상대값 계산
                  
                  _refs.valueHight[n1].childNodes[n2].style.height = _v + 'px';
                  _refs.valueHight[n1].childNodes[n2_3].style.bottom = _v + 'px';
                });
              });
            }

            // waypoint Active addClass
            document.getElementById(_refs.waypointActive.id).classList.add('waypointActive');

            this.destroy();
          },
          offset: '80%'
        });


        if (typeof _xData == 'object') {  
          _xData.map(function (value, index_1) {
            let n1 = index_1;
            value.data.map(function (data, index_2) {
              let n2_3 = index_2 + 3;
              $(_refs.valueHight[n1].childNodes[n2_3].childNodes[0]).counterUp({ delay: 10, time: 400});
            });
          });
        }
      }
    });
  };
});