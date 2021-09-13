import '../src/App.css';

// ====== Profile ======
import user from './Profile/user.json';
import Profile from './Profile/Profile';

// ====== Statistic ======
import statisticalData from '../src/Statistica/statistical-data.json';
import Statistics from './Statistica/Statistic';

// ====== FriendList ======
import friends from '../src/Friends/friends.json';
import FriendList from './Friends/FriendList';

// ====== Transaction ======
import transactions from '../src/Transaction/transactions.json';
import TransactionHistory from './Transaction/TransactionHistory';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <div className="container">
          <Statistics title="Upload stats" stats={statisticalData} />
          <Statistics stats={statisticalData} />
        </div>

        <div className="container">
          <FriendList friends={friends} />,
        </div>

        <div className="container">
          <TransactionHistory items={transactions} />
        </div>
      </div>
    </div>
  );
}
export default App;
