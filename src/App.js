import Expense from "./components/Expenses/Expense";
const App=()=> {
  const expenseItem = [
    {
      id: "e1",
      title: "Mobile recharge",
      amount: 400.0,
      date: new Date(2021, 4, 25),
    },
    {
      id: "e2",
      title: "Manga",
      amount: 800.0,
      date: new Date(2021, 6, 23),
    },
    {
      id: "e3",
      title: "Game CD",
      amount: 2400.0,
      date: new Date(2021, 10, 5),
    },
    {
      id: "e3",
      title: "OTT subscription",
      amount: 500.0,
      date: new Date(2021, 9, 2),
    },
  ];
  return (
    <div>
      <h1>Let's get started</h1>
      <Expense items={expenseItem} />
    </div>
  );
}

export default App;
