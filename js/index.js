/*
~function () {
    var myChart = echarts.init(AAA);
    var option = {
        ...
    };
    myChart.setOption(option);
}();
*/
~function () {
    var myChart = echarts.init(ET3);
    var option = {
        title: {
            text: '居民可支配收入',
            subtext: '农村和城镇',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['城镇居民', '农村居民'],
            x: 'left',
            orient: 'vertical'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']}
            }
        },
        xAxis: [
            {
                type: 'category',
                axisLabel: {
                    interval: 0
                },
                data: ['涿州市', '\n清苑区', '定兴县', '\n满城区', '徐水区', '\n定州市', '高阳县', '\n望都县', '安国市', '\n涞水县', '涞源县', '\n博野县', '曲阳县']
            }
        ],
        yAxis: [
            {
                type: 'value',
                position: 'right',
                axisLabel: {
                    formatter: '{value} 万元'
                }
            }
        ],
        series: [
            {
                name: '城镇居民',
                type: 'bar',
                data: [3.0397, 2.7, 2.6593, 2.6433, 2.6412, 2.5391, 2.36, 2.336, 2.23, 2.0973, 2.082, 2.0456, 1.8568],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '农村居民',
                type: 'bar',
                data: [1.5514, 1.4, 1.2934, 1.404, 1.4463, 1.3298, 1.53, 1.1187, 1.53, 0.8439, 0.6101, 1.1151, 0.6378],
                markPoint: {
                    data: [
                        {name: '年最高', value: 3.0397, xAxis: 7, yAxis: 1.5514, symbolSize: 18},
                        {name: '年最低', value: 1.8568, xAxis: 0.6101, yAxis: 3}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    myChart.setOption(option);
}();
~function () {
    var myChart = echarts.init(ET2);
    var option = {
        title: {
            text: '地方生产总值',
            subtext: '保定市'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            data: ['生产总值']
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']},
                saveAsImage: {show: true}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['定州市', '\n涿州市', '徐水区', '\n清苑区', '高碑店市', '\n安国市', '定兴县', '\n满城区',
                    '蠡县', '\n高阳县', '曲阳县', '\n唐县', '涞源县', '\n涞水县', '望都县', '\n博野县',
                    '阜平县']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '生产总值',
                type: 'bar',
                data: [324.9, 277.8, 178.3, 148.1, 145, 120.8, 117.03, 104.4, 96.4, 96.3, 77.8, 68.27,
                    64.9, 62.1, 60.5, 47, 36.59],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    myChart.setOption(option);
}();