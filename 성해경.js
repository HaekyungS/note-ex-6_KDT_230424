let basicData = {
  header: {
    id: "header",
    type: "div",
    children: null,
  },
  main: {
    id: "main",
    type: "div",
    children: null,
  },
  footer: {
    id: "footer",
    type: "div",
    children: null,
  }
}

let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];

function exampleOne(object, array) {
  // let value;
  Object.keys(object).forEach((e) => {
    if (object[e].children === null) {
      // console.log(object[e])
      // console.dir(element)
      const element = document.createElement(e);
      document.body.appendChild(element);
      // Object.assign(element, object[e]);
      // assign 은 오류가 발생한다. 그건 저 class 에 셋팅 문제.
      for(let key in object[e]){
        element.setAttribute(key,object[e].key)
      }
    }
  })
  // return value;
  // 도저히.. 배열과 value 가 어디에 쓰이는 것인지 오늘의 생각으론 어려워서 머리를 비우고 다시 재도전 해보겠습니다!
}

// document.body.innerHTML=exampleOne(basicData,elementData);
// exampleOne(basicData, elementData)

console.log(exampleOne(basicData, elementData));


// 몽땅 문자열로 만든 거
// let attri = ""
// for(let key in object[e]){
//   attri += `${key}='${object[e][key]}' `
// }
// return value += `<${e} ${attri}></${e}> `