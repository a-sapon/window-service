// import axios from 'axios';
// import { fetchData } from '../redux/actionCreators';

// export const todoPost = todo => async () => {
//   await axios.post('https://wishlist-5ac05.firebaseio.com/todos.json', todo).then(data=>console.log("post",data));
// };

// export const getData = () => async dispatch => {
//   const data = await axios.get(
//     'https://wishlist-5ac05.firebaseio.com/todos.json'
//   );
//   if (data.data === null) {return}
 
//     const transformedData = Object.keys(data.data).map(item => ({
//       ...data.data[item],
//       id: item
//     }));
//     dispatch(fetchData(transformedData));

// };

// export const deleteTodoFromServer = id => async dispatch => {
//   await axios.delete(`https://wishlist-5ac05.firebaseio.com/todos/${id}.json`);
//   const data = await axios.get(
//     'https://wishlist-5ac05.firebaseio.com/todos.json'
//   );

//   if (data.data === null) {return dispatch(fetchData([]))}
//   const transformedData = Object.keys(data.data).map(item => ({
//     ...data.data[item],
//     id: item
//   }));
//   dispatch(fetchData(transformedData));
// };