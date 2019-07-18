import React from 'react';
import axios from 'axios';

const handleSubmit = event => {
  event.preventDefault();
};

const DatesForms = () => {
  return (
    <div className="form-container">
      <form action="/submit-form" method="POST">
        <label htmlFor="start-date">
          Enter Starting Date:
          <input name="startDate" type="date" />
        </label>
        <label htmlFor="start-date">
          Enter Ending Date:
          <input name="endDate" type="date" />
        </label>

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

// class DatesForms extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       startValue: '',
//       endValue: ''
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   getDates(startDate, endDate) {
//     axios
//       .get(`/api/bitcoin/${[startDate, endDate]}`)
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   handleChange(event) {
//     const value = event.target.value;
//     const name = event.target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   handleSubmit(event, startDate, endDate) {
//     event.preventDefault();
//     this.getDates(startDate, endDate);
//   }

//   render() {
//     const { startValue, endValue } = this.state;
//     return (
//       <div className="form-container">
//         <form
//           action=""
//           onSubmit={event => {
//             this.handleSubmit(event, startValue, endValue);
//           }}
//         >
//           <label htmlFor="start-date">
//             Enter Starting Date:
//             <input
//               value={startValue}
//               type="date"
//               name="startValue"
//               onChange={this.handleChange}
//             />
//           </label>
//           <label htmlFor="start-date">
//             Enter Ending Date:
//             <input
//               value={endValue}
//               type="date"
//               name="endValue"
//               onChange={this.handleChange}
//             />
//           </label>

//           <input type="submit" value="submit" />
//         </form>
//       </div>
//     );
//   }
// }

export default DatesForms;
