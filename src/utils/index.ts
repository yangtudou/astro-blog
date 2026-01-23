// 工具函数导出
export function formatDate(date: Date | string) {
  const d = new Date(date)
  const currentYear = new Date().getFullYear()
  const postYear = d.getFullYear()
  
  // 如果是当前年份，只显示月份和日期 (MM-DD)
  if (postYear === currentYear) {
    return `${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
  }
  
  // 对于往年文章，显示完整日期 (YYYY-MM-DD)
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
}

export function getYear(date: Date | string) {
  return new Date(date).getFullYear()
}

export function isFuture(date?: Date | string) {
  return date && new Date(date) > new Date()
}

export function isSameYear(a?: Date | string, b?: Date | string) {
  return (a && b) ? getYear(a) === getYear(b) : false
}

export function isSameGroup(a: any, b?: any) {
  return (isFuture(a.date) === isFuture(b?.date)) && isSameYear(a.date, b?.date)
}

export function getGroupName(post: any) {
  if (isFuture(post.date)) return '即将推出...'
  return getYear(post.date).toString()
}