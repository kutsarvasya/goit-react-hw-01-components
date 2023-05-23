import PropTypes from 'prop-types';
import s from './Statistics.module.css'
import getRandomHexColor from './getRandomHexColor';

function StatisticItem({ label, percentage }) {
    return (<li className={s.item} style={{backgroundColor:`${getRandomHexColor()}`}} >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}</span>
          </li>)
    
}

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticItem
