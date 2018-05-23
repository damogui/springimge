///画echat图
//var backShow = false;
var monthStrAddCourse = ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"];//报课月份
var monthValAddCourse = [0.26, 0.59, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3];//报课人次
var monthStrExamNum = [];//测评月份
var monthValExamNum = [0.39, 0.59, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7];//测评人次
var addCourseShow = true;//报课
var examShow = true;//测评
var addCourseShowZ = false;//报课(柱子图默认隐藏)
var examShowZ = false;//测评
//var tiyanShow = true;
function drawChart() {

    //  var sd = sdata;
    //sd.push({ name: p, value: d[p] });
    var colors = ['#F73E26', '#00A200', '#FBB500', '#333333'];
    var myChart = echarts.init(document.getElementById('drawchart'));

    var option = {
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            //data: ['2015 降水量', '2016 降水量']//横title


            selected: {
                '报课人次': addCourseShow,
                '测评人次': examShow,//控制是否显示
                '报课人次柱子': addCourseShowZ,
                '测评人次柱子': examShowZ


            }

        },
        grid: {
            top: 70,
            bottom: 50
        },
        xAxis: [
            {
                type: 'category',
                name: '月份',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[3]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '退课率' + params.value + '：' + params.seriesData[0].data;
                        }
                    }
                },
                data: monthStrAddCourse //["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]//横坐标
            },
            {
                //横坐标上
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[2]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '退课率  ' + params.value + '：' + params.seriesData[0].data;
                        }
                    }
                },
                data: [], //["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
                show: false

            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '人次',
                axisLabel: {
                    show: true,
                    interval: 'auto',
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                show: false,//addCourseShow
                name: '',
                type: 'line',
                xAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: '#F7F9FC',//绿色
                        lineStyle: {
                            color: '#F7F9FC'
                        }
                    }
                },

                smooth: true,
                tooltip: {

                    formatter: "{b}<br/>{a} : {c}"
                },

                data: monthValAddCourse //[0.26, 0.59, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]

            },
            {
                show: false,//addCourseShow
                name: '报课人次',
                type: 'line',

                itemStyle: {
                    normal: {
                        color: '#00A200',//绿色
                        lineStyle: {
                            color: '#00A200'
                        }
                    }
                },

                smooth: true,
                tooltip: {

                    formatter: "{b}<br/>{a} : {c}"
                },

                data: monthValAddCourse //[0.26, 0.59, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]

            },
            {
                show: examShow,
                name: '测评人次',
                type: 'line',
                tooltip: {

                    formatter: "{b}<br/>{a} : {c}"
                },

                smooth: true,
                itemStyle: {
                    normal: {
                        color: '#FBB500',//黄色
                        lineStyle: {
                            color: '#FBB500'
                        }
                    }
                },

                data: monthValExamNum//[0.39, 0.59, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
            }, {
                show: addCourseShowZ,
                name: '报课人次柱子',
                type: 'bar',
                //xAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: '#00A200',//绿色
                        lineStyle: {
                            color: '#00A200'
                        }
                    }
                },

                smooth: true,
                tooltip: {

                    formatter: "{b}<br/>报课人次 : {c}"
                },

                data: monthValAddCourse //[0.26, 0.59, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]

            },
            {
                show: examShowZ,
                name: '测评人次柱子',
                type: 'bar',
                tooltip: {

                    formatter: "{b}<br/>测评人次 : {c}"
                },

                smooth: true,
                itemStyle: {
                    normal: {
                        color: '#FBB500',//黄色
                        lineStyle: {
                            color: '#FBB500'
                        }
                    }
                },

                data: monthValExamNum//[0.39, 0.59, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
            }

        ]
    };

    myChart.setOption(option);
}
