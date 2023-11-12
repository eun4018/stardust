define(function () {
  return exports = function (dataSet) {

    console.log(dataSet)
    // exports 데이터 가져오기 - 객체형식
    // {id: 'AST-001-0001-1', scope: 'scope-1', y: Array(5), x: Array(6)}

    /*
      template 사용 정의
      
      <div
        :id="_id()" <---- 차트 아이디값 적용, 아이디값 exports 영역에서 정의
        class="BarChart" 
        data-chart-type="asset" <---- 데이터 속성값으로 차트 기능 정의 (asset / plan / cash ...)
        role="img" <---- ARIA role
        :class="_scope()" <---- scope-0 ~ scope-4 클래스 추가
        ref="waypointActive"> <---- DOM 접근 :  waypointActive 클래스 추가
        <div class="chartGroup">
          <div class="title-desc blind"> <---- 차트 접근성 정의
            <!-- // WAI-ARIA -->
            <em>순자산 추이</em>
            <p>최근 6개월간 자산/부채 비율 및 순자산 추이 정보</p>
          </div>

          <div 
            class="chart-line-css" <---- 라인 차트 정의
            :data-dp-total="xLength()" <---- 개수 정의
            data-chart-type="line-case-5" <---- line-case-1 ~ line-case-5 스타일 케이스 정의
            ref="lineActive"> <---- DOM 접근 lineActive
            <ul class="line-chart">
              <li
                v-for="(item, index) in xArea" <---- for문
                :key="item.id" <---- 데이터 변경 감지, 의무적으로 사용
                :class="{dashed: item.dashed}"> <---- 사용안함, 라인 점선 표현
                <div class="line-segment"></div> <---- '선' 표현 (transform rotate)
                <div class="data-point" <---- '점' 표현
                  :aria-label="item.name" <---- name값 적용
                  :data-value="item.asset"></div> <---- 순자산 asset 적용
              </li>
            </ul>
          </div>

          <ul class="y-area" aria-label="Y축 범위">
            <li 
              v-for="(item, index) in yArea" <---- for문
              :key="item.id">  <---- 데이터 변경 감지, 의무적으로 사용
              <span class="y">{{item.name}}<em class="blind">{{item.won}}</em></span> <---- name값 적용, 웹접근성
              <div v-show="yLength(index)" class="unit">{{item.won}}</div> <---- 마지막 index만 노출 (억원)
            </li>
          </ul>

          <ul class="x-area" aria-label="X축 범위" ref="xActive"> <---- DOM 접근 : xActive
            <li
              v-for="(item, index) in xArea" <---- for문
              :key="item.id">  <---- 데이터 변경 감지, 의무적으로 사용
              <span class="bar"> <---- 자산 바 영역
                <em 
                  aria-label="자산" 
                  :aria-valuenow="_value(item.value)" <---- value값
                  ref="valueHight"></em> <---- DOM 접근 : valueHight 
              </span>
              <span class="debtBar">  <---- 부채 바 영역
                <em 
                  aria-label="부채" 
                  :aria-valuenow="_debt(item.debt)" <---- debt값
                  ref="debtHight"></em> <---- DOM 접근 : debtHight 
              </span>
              <em class="x">{{item.name}}</em> <---- name값 적용, x축 범례
            </li>
          </ul>

          <ul class="x-area-event"> <---- 클릭 이벤트 영역
            <li
              v-for="(item, index) in xArea" <---- for문
              :key="item.id"  <---- 데이터 변경 감지, 의무적으로 사용
              :aria-pressed="item.pressed" <---- ARIA pressed
              :class="{selected: item.selected}" <---- 클릭 시 selected 클래스 적용 
              v-on:click="selectedClick(index)"> <---- click 이벤트 
                <div class="tooltip-area"
                  :style="{bottom: item.asset + 'px'}"> <---- 자산 툴팁 bottom 위치값 적용
                  <div class="tooltip"><em>순자산</em><span>{{item.price}}</span></div> <---- price값 적용 (amount로 표기 했어야됨)
                </div>
              </li>
          </ul>
        </div>
      </div>
    */

    new Vue({
      template:`
      <div
        :id="_id()"
        class="BarChart" 
        data-chart-type="asset" 
        role="img"
        :class="_scope()"
        ref="waypointActive">
        <div class="chartGroup">
          <div class="title-desc blind">
            <!-- // WAI-ARIA -->
            <em>순자산 추이</em>
            <p>최근 6개월간 자산/부채 비율 및 순자산 추이 정보</p>
          </div>

          <div 
            class="chart-line-css"
            :data-dp-total="xLength()"
            data-chart-type="line-case-5"
            ref="lineActive">
            <ul class="line-chart">
              <li
                v-for="(item, index) in xArea" 
                :key="item.id"
                :class="{dashed: item.dashed}">
                <div class="line-segment"></div>
                <div class="data-point" 
                  :aria-label="item.name" 
                  :data-value="item.asset"></div>
              </li>
            </ul>
          </div>

          <ul class="y-area" aria-label="Y축 범위">
            <li 
              v-for="(item, index) in yArea" 
              :key="item.id">
              <span class="y">{{item.name}}<em class="blind">{{item.won}}</em></span>
              <div v-show="yLength(index)" class="unit">{{item.won}}</div>
            </li>
          </ul>

          <ul class="x-area" aria-label="X축 범위" ref="xActive">
            <li
              v-for="(item, index) in xArea" 
              :key="item.id">
              <span class="bar">
                <em 
                  aria-label="자산" 
                  :aria-valuenow="_value(item.value)" 
                  ref="valueHight"></em>
                  <!-- / :style="{height: _value(item.value) + 'px'}" -->
              </span>
              <span class="debtBar">
                <em 
                  aria-label="부채" 
                  :aria-valuenow="_debt(item.debt)" 
                  ref="debtHight"></em>
                  <!-- / :style="{height: _debt(item.value) + 'px'}" -->
              </span>
              <em class="x">{{item.name}}</em>
            </li>
          </ul>

          <ul class="x-area-event">
            <li
              v-for="(item, index) in xArea" 
              :key="item.id"
              :aria-pressed="item.pressed"
              :class="{selected: item.selected}"
              v-on:click="selectedClick(index)">
                <div class="tooltip-area"
                  :style="{bottom: item.asset + 'px'}">
                  <div class="tooltip"><em>순자산</em><span>{{item.price}}</span></div>
                </div>
              </li>
          </ul>
        </div>
      </div>`,
      el: `#${dataSet.id}`,
      props:[],
      data: function () {
        return {
          id: dataSet.id, // AST-001-0001-1 아이디값
          yArea: dataSet.y, // y좌표, 데이터 형식 배열
          xArea: dataSet.x, // x좌표, 데이터 형식 배열
          maxValue: 0, // 자산 0 초기화
          maxDebt: 0, // 부채 0 초기화
          scope: dataSet.scope, // 0값 위치 설정
          valueHight: 0, // 자산 높이값 초기화
          debtHight: 0, // 부채 높이값 초기화
        }
      },
      created: function () {

        if (typeof this.xArea == 'object') { // x값 object 판별
          this.xArea.map(function(value, index) {
            Object.assign(value, {selected: false, pressed: false}) // selected, pressed값 false로 초기화
            
            if (index === 5) { // 마지막 달(이번달)에 툴팁 노출 (디폴트)
              Object.assign(value, {selected: true, pressed: true})
            }
          })
        }

        // 가장 높은 값 구하기 (자산)
        this.maxValue = Math.max.apply(null, this.xArea.map(function (data) {
          return data.value;
        }));

        // 가장 높은 값 구하기 (부채)
        this.maxDebt = Math.max.apply(null, this.xArea.map(function (data) {
          return data.debt;
        }));

        // 자산, 부채 범위 설정 (0값 위치 설정)
        switch(this.scope) {
          case ('scope-0'): // 0
            this.valueHight = 188;
            this.debtHight = 0;
          break;
          case ('scope-1'): // 1
            this.valueHight = 141;
            this.debtHight = 47;
          break;
          case ('scope-2'): // 2
            this.valueHight = 94;
            this.debtHight = 94;
          break;
          case ('scope-3'): // 3
            this.valueHight = 47;
            this.debtHight = 141;
          break;
          case ('scope-4'): // 4
            this.valueHight = 0;
            this.debtHight = 188;
          break;
        }
      },
      methods: {
        _id: function () { // 아이디값 정의
          return this.id;
        },
        yLength: function (_index) { // 마지막 index 노출
          return this.yArea.length === _index + 1;
        },
        xLength: function () { // x좌표 개수 정의
          return this.xArea.length;
        },
        _scope: function () { // scope 클래스 정의
          return this.scope;
        },
        _value: function (value) {
          // 자산 상대값 계산 (해당 데이터값 / 가장 높은 데이터값) * 차트 높이 값
          return (parseInt(value) / this.maxValue) * this.valueHight;
        },
        _debt: function (debt) {
          // 부채 상대값 계산 (해당 데이터값 / 가장 높은 데이터값) * 차트 높이 값
          return (parseInt(debt) / this.maxDebt) * this.debtHight;
        },
        selectedClick: function (_index) { // 클릭 이벤트 정의
          // 이벤트 시 해당 _index값 노출 설정
          this.xArea = this.xArea.filter(function (value, index) {
            let obj;
            if ( _index !== index ) {
              obj = Object.assign(value, {selected: false, pressed: false})
            } else {
              obj = Object.assign(value, {selected: true, pressed: true})
            }
            return obj;
          });;
        }
      },
      computed: {
      },
      mounted: function () {
        // Line Chart가 jQuery로 구현되어서 mounted영역에서 컨트롤 해야됨
        
        /*
          this.$refs = {
            debtHight: (6) [em, em, em, em, em, em]
            lineActive: div.chart-line-css
            valueHight: (6) [em, em, em, em, em, em]
            waypointActive: div#AST-001-0001-1.BarChart.scope-1.waypointActive
            xActive: ul.x-area
          }
        */

        // refs 전역 객체 정의 : waypoint 사용
        let _refs = this.$refs; // $refs 가져오기
        let _xData = this.xArea; // xArea 가져오기
        let _maxValue = this.maxValue; // maxValue 가져오기
        let _maxDebt = this.maxDebt; // maxDebt 가져오기
        let _valueHight = this.valueHight; // valueHight 가져오기
        let _debtHight = this.debtHight; // debtHight 가져오기
        
        $(`#${dataSet.id}`).waypoint({ // 해당 차트 화면에서 노출될 때 실행 (waypoint 라이브러리)
          handler: function () {

            _xData.map(function (data, index) {
              // 상대값 계산식 (현재 높이값 / 가장 높은값) X 전체 높이값
              let _v = (parseInt(data.value) / _maxValue) * _valueHight; // 자산 상대값 계산 (사용안함)
              let _d = (parseInt(data.debt) / _maxDebt) * _debtHight; // 부채 상대값 계산 (사용안함)

              // _refs.valueHight[index].style.height = _v + 'px';
              // _refs.debtHight[index].style.height = _d + 'px';

              _refs.valueHight[index].style.height = data.value + '%'; // 자산 절대값 적용
              _refs.debtHight[index].style.height = data.debt + '%'; // 부채 절대값 적용
            });


            // waypoint Active addClass (클래스는 적용했지만 사용안함)
            document.getElementById(_refs.waypointActive.id).classList.add('waypointActive');

            if (_refs.lineActive !== undefined) {
              // 라인차트 양쪽 간격 반영, 바차트 중앙에 라인 반영을 위해 계산
              let _interval = _refs.xActive.childNodes[0].clientWidth / 2; // x좌표 width값 구해서 반으로 나누기
              _refs.lineActive.style.margin = '0 ' + _interval + 'px'; // margin에 양쪽 여백 적용
            }

            myFunc.getChartLineCss(dataSet.id); // jQuery LineCssChart (app.js에서 호출)

            // 화면에서 노출될 때 한번만 실행
            this.destroy();
          },
          offset: '80%'
        });
      }
    });
  };
});