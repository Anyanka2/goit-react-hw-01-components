import user from './data/user.json';
import { Profile } from './Components/Profile/Profile';

import data from './data/data.json';
import { Statistics } from './Components/Statistic/Statistic';

import friends from './data/friends.json';
import { FriendList } from './Components/FriendList/FriendList';

import transactions from './data/transactions.json';
import { TransactionHistory } from './Components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      {/*<TransactionHistory items={transactions} /> */}
    </>
  );
};
