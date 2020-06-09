const statuses = [
  {
    name: 'Completed',
    class: 'success'
  },
  {
    name: 'In progress',
    class: 'info'
  },
  {
    name: 'Delayed',
    class: 'warning'
  },
  {
    name: 'Rejected',
    class: 'danger'
  }
]

const tasks = [
  {
    id: 0,
    name: 'RSTM01',
    status: statuses[0],
    progress: 100,
    endTime: '2017-06-02'
  },
  {
    id: 1,
    name: 'RSTM02',
    status: statuses[1],
    progress: 75,
    endTime: '2017-06-02'
  },
  {
    id: 2,
    name: 'RSTM03',
    status: statuses[1],
    progress: 59,
    endTime: '2017-06-02'
  },
  {
    id: 3,
    name: 'RSTM04',
    status: statuses[2],
    progress: 52,
    endTime: '2017-06-02'
  },
  {
    id: 4,
    name: 'RSTM05',
    status: statuses[3],
    progress: 12,
    endTime: '2017-06-02'
  },
  {
    id: 5,
    name: 'RSTM06',
    status: statuses[1],
    progress: 58,
    endTime: '2017-06-03'
  },
  {
    id: 6,
    name: 'RSTM07',
    status: statuses[2],
    progress: 42,
    endTime: '2017-06-04'
  }
]

export default tasks
