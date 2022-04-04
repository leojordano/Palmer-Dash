import Logo from '../../../../imgs/logo.svg'

interface ICardInfo {
    valor: string;
    title: string;
    Icon: string;
} 

const CardInfo: React.FC<ICardInfo> = ({ valor, title, Icon }) => {

    return (
        <div className="cardInfo">
            <img src={Icon} alt="" />
            <div className="infos">
                <span className="valor">{valor}</span>
                <span className="name">{title}</span>
            </div>
        </div>
    )
}

export default CardInfo;