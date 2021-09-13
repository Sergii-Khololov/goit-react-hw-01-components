import t from '../Transaction/TransHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table class={t.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody class={t.type}>
        {items.map(item => (
          <tr key={item.id}>
            <td class={t.type}>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
