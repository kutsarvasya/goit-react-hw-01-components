import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import s from './Statistics.module.css'

function Statistics({ stats, title = '' }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(el => (
          <StatisticItem {...el} key={el.id}/>
        ))}
      </ul>
    </section>
  );
}
export default Statistics;

Statistics.propTypes = {
  el: PropTypes.shape({
  id: PropTypes.string.isRequired,
  }),
  title: PropTypes.string,
};
