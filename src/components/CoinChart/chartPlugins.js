//Create tooltip line
export const toolTipLine = {
  id: "toolTipLine",
  beforeDraw: (chart) => {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const ctx = chart.ctx;
      ctx.save();
      const activePoint = chart.tooltip._active[0];
      ctx.beginPath();
      ctx.setLineDash([5, 7]);
      ctx.moveTo(activePoint.element.x, chart.chartArea.top);
      ctx.lineTo(activePoint.element.x, activePoint.element.y);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#fff";
      ctx.stroke();
      ctx.restore();
    }
  },
};
