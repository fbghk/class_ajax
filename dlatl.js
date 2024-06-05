const a = `https://apis.data.go.kr/6300000/eventDataService/eventDataListJson
?
serviceKey
=
cI4AXgrTB0ysM8Rn01vy6q2u1edtzrl1b1aeyqtRsBtBIu3QJHsibkHBpe4MkJE%2FmMy%2B0veonIC65ssZPaERLA%3D%3D&`

const b = "endpoint 주소" + "주소값";
const endPoint = `http://apis.data.go.kr/6300000/eventDataService`
const keyName = `cI4AXgrTB0ysM8Rn01vy6q2u1edtzrl1b1aeyqtRsBtBIu3QJHsibkHBpe4MkJE%2FmMy%2B0veonIC65ssZPaERLA%3D%3D`


const example = `http://apis.data.go.kr/6300000/eventDataService/eventDataListJson?
serviceKey=${keyName}&numOfRows=10&pageNo=1`
console.log(example)

// `http://apis.data.go.kr/6300000/eventDataService/eventDataItemJson
// 
// serviceKey=인증키(URL-Encode)
// &
// eventSeq=10423`