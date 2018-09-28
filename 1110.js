option = {
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




