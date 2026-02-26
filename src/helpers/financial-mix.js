export const generateFinancialMix = (data) => {
  const newData = Object.entries(data).map(([key, value]) => {
    if (key != 'earnings' && key != 'investments' && key != 'expenses') {
      delete data[key];
    }

    return {
      type: key,
      value: Number(value) || 0,
    };
  });

  const total = newData.reduce((acc, item) => acc + item.value, 0);

  const colors = [
    'hsl(var(--chart-2))',
    'hsl(var(--chart-5))',
    'hsl(var(--chart-1))',
  ];

  const percentageData = newData.map((item, i) => {
    if (total > 0) {
      const percentage = ((item.value / total) * 100).toFixed(2);
      return {
        type: item.type,
        percentage: Number(percentage),
        fill: colors[i],
      };
    }
    return {
      type: item.type,
      percentage: 0,
      fill: colors[i],
    };
  });
  return percentageData;
};
