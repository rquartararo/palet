import React, { useState, useEffect, Component } from 'react';
import Card from './Card';
import { getMainData } from './apiControl';
import { API } from './config';
// import axios from 'axios';

const Home = () => {
  const [mainData, setMainData] = useState([]);
  const [error, setError] = useState(false);

  const loadData = () => {
    getMainData().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setMainData(data);
      }
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div className='mainContainer'>
        {mainData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mainData: [],
//     };
//   }

//   componentDidMount() {
//     const data = getMainData();
//     console.log(data);
//     // const res = await axios.get(`${API}/main`)
//     // console.log(res)
//     // this.setState({
//     //   mainData: data,
//     // });
//   }

//   render() {
//     // console.log(this.state.mainData);

//     const imageArr = [
//       {
//         postId: 'rachel1',
//         name: 'Rachel',
//         url:
//           'https://i.pinimg.com/originals/a2/47/8f/a2478ff279ba9d34aa93a4ac5f119d22.jpg',
//       },
//       {
//         postId: 'wenfei2',
//         name: 'Wenfei',
//         url:
//           'https://i.pinimg.com/originals/a2/47/8f/a2478ff279ba9d34aa93a4ac5f119d22.jpg',
//       },
//       {
//         postId: 'jimmy3',
//         name: 'Jimmy',
//         url:
//           'https://i.pinimg.com/originals/a2/47/8f/a2478ff279ba9d34aa93a4ac5f119d22.jpg',
//       },
//     ];

//     return (
//       <div>
//         <div className='mainContainer'>
//           {imageArr.map((artifact, i) => (
//             <Card key={i} artifact={artifact} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default Home;
