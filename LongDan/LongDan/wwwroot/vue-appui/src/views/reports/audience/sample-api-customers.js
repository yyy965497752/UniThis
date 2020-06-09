const data = {
  columns: ['Screen class', 'Total engagement', 'Avg. engagement'],
  rows: [
    {
      id: 0,
      'Screen class': 'game_board',
      'Total engagement': '1.6%',
      'Avg. engagement': '50s'
    },
    {
      id: 1,
      'Screen class': 'game_over',
      'Total engagement': '1.6%',
      'Avg. engagement': '52s'
    },
    {
      id: 2,
      'Screen class': 'main_menu',
      'Total engagement': '1.6%',
      'Avg. engagement': '57s'
    }
  ],
  options: {
    filterable: false,
    skin: 'table-responsive table-inset',
    sortable: ['Screen class', 'Total engagement', 'Avg. engagement']
  }
}

export default data
