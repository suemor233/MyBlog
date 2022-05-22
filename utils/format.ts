import moment from "moment"

export const formatTime = (time: string) => {
  return moment(time).format("YYYY-MM-DD HH:mm:ss")
}

export const formatYearMonth = (time: string) => {
  return moment(time).format("YYYY-MM-DD")
}


export const formatYear= (time: string) => {
  return moment(time).format("YYYY")
}

export const formatMonth = (time: string) => {
  return moment(time).format("MM-DD")
}

// 从当前时间开始计算 天数
export const formatTimeFromNow = (time: string) => {
  return moment(time).fromNow()
}