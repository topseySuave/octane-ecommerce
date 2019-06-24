import { notification } from "antd";
import queryString from 'query-string';
import { isWindows } from "lib/constants";

export const slugify = (val: string): string => {
  const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;'
  const b = 'aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------'
  const p = new RegExp(a.split('').join('|'), 'g')
  return val.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with ‘and’
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
};

export const urlencode = (str: string): string => {
  str = (str + '').toString();
  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A')
    .replace(/%20/g, '+');
};

export const openNotificationWithIcon = (type: string | number, message: string, description?: string) => notification[type]({
  message,
  description,
});

export const getCurrentPageURL = () => {
  return isWindows && queryString.parse(location.search);
};

export const setCurrentURL = (url: string) => {
  location.search = url;
};
