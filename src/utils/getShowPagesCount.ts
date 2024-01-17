export default function getShowPagesCount(count){
  const res = []
  let currentCount = count

  for(let i = 1; i <= count / 10; i++) {
    if(currentCount - 10 > 0) {
      res.push(10 * i)
    } else {
      res.push(count)
    }
    currentCount = currentCount - 10
  }
  return res
}