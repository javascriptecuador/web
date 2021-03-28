import { card } from "../../../constants/card.config";

const loop = (states, pos, cb) => states[pos].map(cb);

const getDistribution = (cardsLength) => {
  const states = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 0],
    [1, 1, 1],
  ];
  const jumpRelation = [1, 2, 1];
  const statePosition = cardsLength % states.length;
  const stateMultiplier = Math.trunc(cardsLength / states.length);

  return {
    inLength: () =>
      loop(states, statePosition, (column, pos) => {
        return column + jumpRelation[pos] * stateMultiplier;
      }),
    inRange: () => {
      let endRange = 0;
      let maxColumnSize = 0;
      return loop(states, statePosition, (column, pos) => {
        maxColumnSize = column + jumpRelation[pos] * stateMultiplier;
        endRange += maxColumnSize;
        return [endRange - maxColumnSize, endRange];
      });
    },
  };
};

class BlogCardStyle {
  constructor({
    gridRow,
    widthImg,
    gridColumn,
    flexDirection,
    paddingLeftContent,
    paddingTopContent,
    paddingBottomTitle,
    paddingBlockFooter,
  }) {
    this.gridRow = gridRow;
    this.widthImg = widthImg;
    this.gridColumn = gridColumn;
    this.flexDirection = flexDirection;
    this.paddingLeftContent = paddingLeftContent;
    this.paddingTopContent = paddingTopContent;
    this.paddingBottomTitle = paddingBottomTitle;
    this.paddingBlockFooter = paddingBlockFooter;
  }
}

const getStyles = (dataLength) => {
  let styles = [];
  const distribution = getDistribution(dataLength).inLength();

  distribution.forEach((maxColumnSize, pos) => {
    const columnStart = pos + 1;
    const columnEnd = pos + 2;
    const isMiddle = pos !== 0 && pos !== distribution.length - 1;

    for (let index = 0; index < maxColumnSize; index++) {
      const rowStart = isMiddle ? index + 1 : 2 * index + 1;
      const rowEnd = isMiddle ? index + 2 : rowStart + 2;

      styles = [
        ...styles,
        new BlogCardStyle({
          gridRow: `${rowStart} / ${rowEnd}`,
          widthImg: isMiddle ? `${card.blog.viewport_img_height}em` : "initial",
          gridColumn: `${columnStart} / ${columnEnd}`,
          flexDirection: isMiddle ? "row" : "column",
          paddingLeftContent: Number(isMiddle),
          paddingTopContent: isMiddle ? "initial" : 1,
          paddingBottomTitle: isMiddle ? 0.5 : 1,
          paddingBlockFooter: isMiddle ? 0.5 : 1,
        }),
      ];
    }
  });

  return styles;
};

export { getStyles };
