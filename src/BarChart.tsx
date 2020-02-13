import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const chartOptions: Highcharts.Options = {
    title: {
        text: 'Top Book Readers of the Year'
    },
    chart: {
        className: 'bar-chart',
    },
    series: [
        {
            name: 'Students',
            type: 'column',
            data: [
                ['John', 40],
                ['Mike', 24],
                ['Charles', 10],
                ['Susan', 5],
                ['Rebecca', 56],
            ],
            color: 'green',
            animation: false,
        }
    ],
    xAxis: {
        type: 'category',
    },
    yAxis: {
        title: {
            text: 'Books Read'
        }
    },
    // Disable the Highcharts watermark
    credits: {
        enabled: false,
    },
};

const BarChart: React.FC = () => (
    <HighchartsReact
        options={chartOptions}
    />
);

export default BarChart;
