const tmi = [
    {
        title: "이 페이지는...",
        contents: "로스트 아크를 하다가 삘받아서 만들었습니다.",
    },//1
    {
        title: "필자의 서버는...",
        contents: "아브렐슈드 입니다.",
    },//2
    {
        title: "지금 키우는 클래스는...",
        contents: "홀리나이트 입니다.",
    },//3
    {
        title: "필자의 나이는...",
        contents: "2003년생 올해로 고3입니다. 아가에요.",
    },//4
    {
        title: "저를 소개하자면...",
        contents: "특성화고 학생입니다. 취업도 했어영 ㅎ",
    },//5
    {
        title: "사실 지금 후회하고 있는건...",
        contents: "ㅎㅎ 하루남기고 하는중 ㅋㅎㅋㅎㅋ 미리할걸...",
    },//6
    {
        title: "만들면서 가장 어려웠던건...",
        contents: "tmi 10개 적는게 빡세네요 ㄷㄷ",
    },//7
    {
        title: "지금 하고있는 이 챌린지가...",
        contents: "저의 첫 챌린지입니다. ㅎㅎ",
    },//8
    {
        title: "제 로스트아크 닉네임은...",
        contents: "반달커피로 맞춰놨어요. ex)반달커피말차우유",
    },//9
    {
        title: "필자가 존경하는 사람은...",
        contents: "-그저 빛강선-",
    },//10
];

const tmiTitle = tmiSelector.querySelector("span:first-child");
const tmiContents = tmiSelector.querySelector("span:last-child");

const randomIndex = Math.floor(Math.random() * tmi.length);
tmiTitle.innerText = tmi[randomIndex].title;
tmiContents.innerText = tmi[randomIndex].contents;