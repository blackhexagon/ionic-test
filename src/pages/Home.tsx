import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol} from '@ionic/react';
import ChartCard from '../components/ChartCard/ChartCard';
import './Home.css';

const Home: React.FC = () => {
    const title = "Chart.js test"
    return (<IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{title}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol sizeLg={"4"}>
                            <ChartCard type={"bar"}/>
                        </IonCol>
                        <IonCol sizeLg={"4"}>
                            <ChartCard type={"line"}/>
                        </IonCol>
                        <IonCol sizeLg={"4"}>
                            <ChartCard type={"pie"}/>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>);
};

export default Home;
