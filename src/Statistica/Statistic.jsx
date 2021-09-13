import stl from '../Statistica/statistik.module.css';

function Statistic({ stats, title }) {
  return (
    <section class={stl.statistics}>
      {title && <h2 class={stl.title}>{title}</h2>}

      <ul class={stl.list}>
        {stats.map(stat => (
          <li key={stat.id} class={stl.item}>
            <span class={stl.label}>{stat.label}</span>
            <span class={stl.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistic;
