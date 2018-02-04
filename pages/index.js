import fetch from 'isomorphic-unfetch'
// import stylesheet from 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

const Index = (props) => {
  // console.log(props.crypto)
  return ( <div>
    <h1>Trade Now</h1>
    <table>
      <thead>
      <tr>
        <td>Label</td>
        <td>Percentage Difference</td>
      </tr>
      </thead>
      <tbody>
      {props.crypto.map(obj => {
        return (
          <tr key={Date.now() + Math.random() + obj.label}>
            <td>{obj.label}</td>
            <td>{obj.percentage_difference_in_ask_price}%</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  </div>)
}

Index.getInitialProps = async function () {
  const res = await fetch('http://172.17.0.4:4100/cryptopia/btc')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    crypto: data
  }
}

export default Index
