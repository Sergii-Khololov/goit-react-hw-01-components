
import '../App/App.css';

// ====== Profile ======
import user from '../Back-End/user.json';
import Profile from '../Components/Profile/Profile';

// ====== Statistic ======
import statisticalData from '../Back-End/statistical-data.json';
import Statistics from '../Components/Statistica/Statistic';

// ====== FriendList ======
import friends from '../Back-End/friends.json';
import FriendList from '../Components/Friends/FriendList';

// ====== Transaction ======
import transactions from '../Back-End/transactions.json';
import TransactionHistory from '../Components/Transaction/TransactionHistory';

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
