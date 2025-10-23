/**
 * 将Hex格式的颜色字符串扩展为7位
 * @param hexColor 传入有效的 hex格式的color字符串(4位 或 7位) 如"#ccc" "#adcadc"
 * @returns 返回 7位长度的 hex格式字符串
 */

function expandHexColor(hexColor: string): string {
  if (hexColor.length === 4) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const result = hexColor.replace(shorthandRegex, function (_, r, g, b) {
      return '#' + r + r + g + g + b + b;
    });
    return result;
  }
  return hexColor;
}

/**
 * 对十六进制的颜色设置透明度，对于十六进制的颜色，前六位可以表示rgb三个颜色，还有后两位用来表示0-255的透明度
 * 用透明度百分比 * 255得到十进制的透明度，再通过toString转成16进制
 * 最后添加到原本的颜色后面，即可为十六进制颜色设置透明度
 * @param {String} color
 * @param {Number} percent
 * @returns {String}
 * */
export const getHexOpacityColor = (color: string, percent: number): string => {
  if (!/^#?([a-f\d]{3}|[a-f\d]{6}|[a-f\d]{8})$/i.test(color)) {
    console.error('Invalid hex color format');
    return '#000000FF'; // 返回默认黑色
  }

  if (percent < 0 || percent > 1) {
    console.error('Invalid percent');
    return '#000000FF'; // 返回默认黑色
  }

  const nonAbbreviationHexColor = expandHexColor(color);
  const colorUpperCase = nonAbbreviationHexColor.toUpperCase();
  let alpha = Math.round(percent * 255)
    .toString(16)
    .toUpperCase();
  if (alpha.length < 2) {
    alpha = `0${alpha}`;
  }
  return `${colorUpperCase}${alpha}`;
};
