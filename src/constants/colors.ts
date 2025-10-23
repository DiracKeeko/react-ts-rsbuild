const baseColors = [
  '#3d77ce',
  '#e26d51',
  '#6da46f',
  '#eeb558',
  '#ff8b47',
  '#8e6fab',
  '#55a0d3',
  '#c86f96',
  '#59bbbb',
  '#6a7a97'
];

// 画图 使用baseColors颜色+不透明度生成 (baseColors, [0, 0.32, 0.64, 0.72, 0.86])
const chartColors = [
  '#3D77CE',
  '#E26D51',
  '#6DA46F',
  '#EEB558',
  '#FF8B47',
  '#8E6FAB',
  '#55A0D3',
  '#C86F96',
  '#59BBBB',
  '#6A7A97',
  '#7BA3DE',
  '#EB9C89',
  '#9CC19D',
  '#F3CD8D',
  '#FFB082',
  '#B29DC6',
  '#8BBEE1',
  '#DA9DB8',
  '#8ED1D1',
  '#9AA5B8',
  '#B9CEED',
  '#F5CAC0',
  '#CADECB',
  '#F9E4C3',
  '#FFD5BD',
  '#D6CBE1',
  '#C2DDEF',
  '#EBCBD9',
  '#C3E7E7',
  '#C9CFDA',
  '#C9D9F1',
  '#F7D6CE',
  '#D6E6D7',
  '#FAEAD0',
  '#FFDFCB',
  '#DFD7E7',
  '#CFE4F3',
  '#F0D7E2',
  '#D1ECEC',
  '#D5DAE2',
  '#E4ECF8',
  '#FBEBE7',
  '#EBF2EB',
  '#FDF5E8',
  '#FFEFE5',
  '#EFEBF3',
  '#E7F2F9',
  '#F7EBF0',
  '#E8F5F5',
  '#EAECF0'
];

// 指数涨跌色
const INDEX_UP_DOWN_COLORS = {
  '#003B05': [null, -0.06],
  '#015208': [-0.06, -0.04],
  '#05780E': [-0.04, -0.02],
  '#2CAB2D': [-0.02, 0],
  '#E6705A': [0, 0.02],
  '#BF3022': [0.02, 0.04],
  '#AB240A': [0.04, 0.06],
  '#801009': [0.06, null]
};

// 相关性分析涨跌色
const RELATION_UP_DOWN_COLORS = {
  '#328034': [-1, -0.9],
  '#3A8A3C': [-0.9, -0.8],
  '#439445': [-0.8, -0.7],
  '#4C9E4E': [-0.7, -0.6],
  '#56A858': [-0.6, -0.5],
  '#60B362': [-0.5, -0.4],
  '#6CBD6D': [-0.4, -0.3],
  '#77C779': [-0.3, -0.2],
  '#83D185': [-0.2, -0.1],
  '#91DB93': [-0.1, 0],
  '#FBB0A3': [0, 0.1],
  '#F59686': [0.1, 0.2],
  '#F48A77': [0.2, 0.3],
  '#EA7561': [0.3, 0.4],
  '#E16A56': [0.4, 0.5],
  '#DE5E48': [0.5, 0.6],
  '#DF5138': [0.6, 0.7],
  '#D34229': [0.7, 0.8],
  '#D33A1F': [0.8, 0.9],
  '#C5290C': [0.9, 1]
};

// const chartColorsOther = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'];

export { baseColors, chartColors, INDEX_UP_DOWN_COLORS, RELATION_UP_DOWN_COLORS };
