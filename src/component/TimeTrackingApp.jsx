// import React from 'react';

// class TimerDashboard extends React.Component {

//     render() {
//         return (
//             <div className="dashboard">
//                 <EditableTimerList />
//                 <ToggleableTimerForm 
//                     isOpen = {true}
//                 />
//             </div>
//         );
//     }
// }

// class EditableTimerList extends React.Component {
//     render() {
//         return (
//             <div id="timers">
//                 <EditableTimer 
//                     title = 'Learn React'
//                     project = 'Web domination'
//                     elapsed = '8986300'
//                     runningSince = {null}
//                     editFormOpen = {false}
//                 />
//                 <EditableTimer 
//                     title = 'Learn extreme ironing'
//                     project = 'World domination'
//                     elapsed = '3890985'
//                     runningSince = {null}
//                     editFormOpen = {true}
//                 />
//             </div>
//         );
//     }
// }

// class EditableTimer extends React.Component {
//     render () {
//         if (this.props.editFormOpen) {
//             return (
//                 <TimerForm 
//                     title = {this.props.title}
//                     project = {this.props.project}
//                 />
//             );
//         } else {
//             return (
//                 <Timer 
//                 title = {this.props.title}
//                 project = {this.props.project}
//                 elapsed = {this.props.elapsed}
//                 runningSince = {this.props.runningSince}
//                 />
//             );
//         }
//     }
// }

// export default TimerDashboard;