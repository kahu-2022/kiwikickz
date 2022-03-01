import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import { useSelector } from "react-redux";
import { Chart } from 'react-chartjs-2'

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

function Graph() {

    const allTransactions = useSelector(globalState => globalState.allTransactions)

    console.log(allTransactions)

    const testMeet = {
        labels: meetingName,
        datasets: [
            {
                type: 'line',
                fill: false,
                label: 'Total Cost Line',
                data: meetingCost,
                backgroundColor: [
                    'rgba(64, 224, 208, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 206, 209)'
                ],
                borderWidth: 2
            },
            {
                type: 'bar',
                label: 'Total Cost Bar',
                data: meetingCost,
                backgroundColor: [
                    'rgba(64, 224, 208, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 206, 209)'
                ],
                borderWidth: 2
            }
           ]
    }

    return (
        <div>
            <Chart
                type='bar'
                data={testMeet}
                height={120}
                width={300}
            />
        </div>
    )
}
export default Graph;