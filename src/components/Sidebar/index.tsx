import Logo from '../../imgs/logo.svg';
import HomeIcon from './../../imgs/home-icon';
import Activity from './../../imgs/Activity';
import Calendar from './../../imgs/Calendar';
import Chart from './../../imgs/Chart';
import Document from './../../imgs/Document';
import Notification from '../../imgs/Notification';
import Setting from '../../imgs/Setting';
import Ticket from '../../imgs/Ticket';

interface IMenuitem {
    Image: string | React.FC;
    Label: string;
}

const Sidebar: React.FC = (): JSX.Element => {

    const MenuItems: IMenuitem[] = [
        {
            Image: HomeIcon,
            Label: 'Home'
        },
        {
            Image: Activity,
            Label: 'Analytics'
        },
        {
            Image: Ticket,
            Label: 'Invoice'
        },
        {
            Image: Document,
            Label: 'Schedule'
        },
        {
            Image: Calendar,
            Label: 'Calendar'
        },
        {
            Image: Chart,
            Label: 'Messages'
        },
        {
            Image: Notification,
            Label: 'Notification'
        },
        {
            Image: Setting,
            Label: 'Settings'
        },
    ]

    return (
        <div className="Sidebar">
            <div className="container">
                <img className="logo" src={Logo} alt="" />

                <ul className="menuItems">
                    {
                        MenuItems.map((menu: IMenuitem, index) => (
                            <li className="menuItem" key={index}>
                                <span className="Label">{menu.Label}</span>
                                <menu.Image />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;