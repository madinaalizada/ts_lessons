import './style.css'

const form: HTMLFormElement = document.querySelector('#application-form')!;
const btn = document.querySelector('#btn-add');
let student_id = 1;

let students: {id: string, fullname: string, age: number, academic_year: string, group: string, search_topic: string, prices: {lesson: string, price: number}[]}[] = [];

const checkAllData = (data: {fullname: string,
  age: number,
  academic_year: string,
  group: string,
  search_topic: string,
  prices: {lesson: string, price: number}[]}): boolean => {
  let answer = true;
  if(!Boolean(data.fullname) || !Boolean(data.academic_year) || !Boolean(data.search_topic) || !Boolean(data.group)) {
    answer = false;
    return answer;
  }
  if(isNaN(data.age)) {
    let answer = false;
    return answer;
  }
  data.prices.map(v => {
    if(v.price < 0 || v.price > 100 || !Boolean(v.price)) {
    answer = false;
    console.log(!Boolean(v.price));
    }
  });
  return answer;
};

const ageIsNumber = (age: number):boolean => {
  return !isNaN(age);
}

const getChildById = (id: string) => {
  return students.filter(v => v.id === id).length > 0 ?
  students.filter(v => v.id === id)[0] :
  'Telebe tapilmadi';
}

const calcUomg = (id: string) => {
  const student = students.filter(v => v.id === id);
  if(student.length > 0) {
    let sum = 0;
    student[0].prices.map(v => sum+= v.price);
    return sum/student[0].prices.length;
  }
  else {
    return 'Bele bir telebe yoxdu';
  }
}

const getTopStudent = () => {
  const topStudent = {name: "", price: 0};
  students.map(v => {
    if(Number(calcUomg(v.id)) > topStudent.price) {
      topStudent.name = v.fullname;
      topStudent.price = Number(calcUomg(v.id));
    }
  });
  return topStudent;
};

btn?.addEventListener('click', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const student = {
    id: "",
    fullname: "",
    age: 0,
    academic_year: "",
    group: "",
    search_topic: "",
    prices: [{lesson: "sa_price", price: 0},
    {lesson: "rs_price", price: 0},
    {lesson: "m_price", price: 0}
  ]
  };
  student.fullname = String(data.get('fullname'));
  student.age = Number(data.get('age'));
  student.academic_year = String(data.get('academic_year'));
  student.group = String(data.get('group'));
  student.search_topic = String(data.get('search_section'));
  student.prices.filter(v => v.lesson == 'sa_price')[0].price = Number(data.get('sa_price'));
  student.prices.filter(v => v.lesson == 'rs_price')[0].price = Number(data.get('rs_price'));
  student.prices.filter(v => v.lesson == 'm_price')[0].price = Number(data.get('m_price'));
  if(checkAllData(student)){
    student.id = String(student_id);
    student_id++;
    students = [...students, student];
  }
  else {
    alert('We have a problem');
  }
  console.log(students);
  getChildById("1");
  console.log(getTopStudent());
});



