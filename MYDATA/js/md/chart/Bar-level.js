define(function () {
  return exports = function (dataSet) {
    new Vue({
      template:``,
      el: `#${dataSet.id}`,
      props:[],
      data: function () {
        return {
          id: dataSet.id,
          xArea: dataSet.x,
        }
      },
      created: function () {
      },
      methods: {
        _id: function () {
          return this.id;
        },
      },
      computed: {
      }
    });
  };
});