import Header from "../../../components/PageHeader";
import CardInfo from "./CardInfo";

import SavesIcon from '../../../imgs/saves-icon.svg'
import StockIcon from '../../../imgs/stock-icon.svg'
import SalesIcon from '../../../imgs/sales-icon.svg'
import JobsIcon from '../../../imgs/jobs-icon.svg'

const DashBoard = () => {

    return (
        <div className="dashboard">
            <Header title="Dashboard" useDataSelect={true} />
            
            <div className="tinyInfos">
                <CardInfo title="Save Product" valor="178+" Icon={SavesIcon} />
                <CardInfo title="Stock Products" valor="20+" Icon={StockIcon} />
                <CardInfo title="Sales Products" valor="190+" Icon={SalesIcon} />
                <CardInfo title="Job Application" valor="12+" Icon={JobsIcon} />
            </div>

        </div>
    )
}

export default DashBoard;