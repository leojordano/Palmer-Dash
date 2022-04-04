interface IHeader {
    title: string;
    useDataSelect?: boolean;
}

const Header: React.FC<IHeader> = ({ title, useDataSelect = false }) => {

    const Datas: string[] = [
        '01-01-2020',
        '02-01-2020',
        '03-01-2020',
        '04-01-2020',
        '05-01-2020',
        '06-01-2020',
        '07-01-2020',
        '08-01-2020',
        '09-01-2020',
        '10-01-2020',
        '11-01-2020',
        '12-01-2020',
        '13-01-2020',
        '14-01-2020',
        '15-01-2020',
        '16-01-2020',
        '17-01-2020',
        '18-01-2020',
        '19-01-2020',
        '20-01-2020',
        '21-01-2020',
        '22-01-2020',
        '23-01-2020',
        '24-01-2020',
        '25-01-2020',
        '26-01-2020',
        '27-01-2020',
        '28-01-2020',
        '29-01-2020',
        '30-01-2020',
        '31-01-2020',
    ]

    const DataSelect = (
        <>
            <select className="data">
                {
                    Datas.map((data: string, index: number) => (
                        <option key={index}>{data}</option>
                    ))
                }
            </select>

            <select className="data">
                {
                    Datas.map((data: string, index: number) => (
                        <option key={index}>{data}</option>
                    ))
                }
            </select>
        </>
    )

    return (
        <div className="pageHeader">
            <h2 className="header-title">{ title }</h2>

            <div className="container">
                { useDataSelect && DataSelect }
            </div>
        </div>
    )
}

export default Header;