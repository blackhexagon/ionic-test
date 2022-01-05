import React, {FC} from 'react';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle} from "@ionic/react";
import {ChartData, ChartOptions, ChartType, registerables} from 'chart.js';
import {ReactChart} from 'chartjs-react';
import { TinyColor, random } from '@ctrl/tinycolor';

ReactChart.register(...registerables);

const chartOptions: ChartOptions = {};

const getChartData = (color: TinyColor): ChartData => ({
    datasets: [{
        label: 'My First dataset',
        backgroundColor: [
            color.toHex(),
            color.darken(1 * 5).toRgbString(),
            color.darken(2 * 5).toRgbString(),
            color.darken(3 * 5).toRgbString(),
            color.darken(4 * 5).toRgbString(),
            color.darken(5 * 5).toRgbString(),
            color.darken(6 * 5).toRgbString(),
        ],
        borderColor: color.toRgbString(),
        data: [0, 10, 5, 2, 20, 30, 45],
    }], labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
    ]
})

interface ChartCardProps {
 type: ChartType
}

const ChartCard: FC<ChartCardProps> = ({type}) => (
    <IonCard>
        <IonCardHeader>
            <IonCardTitle>{[...type].map((i, idx) => idx === 0 ? i.toUpperCase() : i).join('')} chart</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
            <ReactChart
                type={type}
                data={getChartData(random())}
                options={chartOptions}
                height={300}
            />
        </IonCardContent>
    </IonCard>
)

export default ChartCard