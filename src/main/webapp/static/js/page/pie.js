
//设置eacht图
function SetEChart(index) {
    $(".tabs_nav a").removeClass("active");
    //$(this).addClass("active");
    var data1;
    var data2;

    switch (index) {
        case 1:
            $("#student").addClass("active");


            data2 = [{ value: 10, name: '小学生' }, { value: 20, name: '初中生' }, { value: 30, name: '高中生' }];

            break;
        case 2:
            $("#classtype").addClass("active");

            data2 = [{ value: 2, name: '晚班' }, { value: 6, name: '周末班' }, { value: 9, name: '寒假班' }, { value:4, name: '暑假班' }, { value: 10, name: '国庆班' }, { value: 3, name: '其它班' }];

            break;
        case 3:
            $("#coursetype").addClass("active");


            data2 = [{ value: 6, name: '零基础入门类' }, { value: 10, name: '同步培优类' }, { value:16, name: '大考冲刺类' }, { value: 4, name: '补差提高类' }];


            break;

    }


    var option = {
        tooltip: {
            trigger: 'item',
            textStyle:{
                fontSize:18,
            },
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        series: [
            {
                name: '数据来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                color:['#00b5e5','#1a82ff','#0053d8','#00edff'],
                label: {
                    normal: {
                        textStyle:{
                            fontSize:18,
                        },
                        show: true,
                        formatter: "{b}({d}%)"
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: data2,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
   var myChart =echarts.init(document.getElementById('drawchart'));
    myChart.setOption(option);
}
