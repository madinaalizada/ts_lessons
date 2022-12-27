import './style.css'

const _person : {_fname: string, _lname: string, age: number, genetic: number, pass: string , isEligible: boolean} = {
  _fname: '',
  _lname: '',
  age: 0,
  genetic: 0,
  pass: '',
  isEligible: false
};

_person._fname = String(prompt('Adinizi daxil edin: '));
_person._lname = String(prompt('Soyadinizi daxil edin: '));
const bday = String(prompt('Dogum tarixinizi daxil edin: yyyy-mm-dd'));
_person.genetic = Number(prompt('Cinsinizi daxil edin: 1.Kişi 2.Qadın 3.Digər'));
_person.pass = String(prompt('Şifrənizi daxil edin: '));

function getDayDiff(startDate: Date, endDate: Date): number {
  return Math.round(Math.abs(Number(endDate) - Number(startDate)) / (24 * 60 * 60 * 1000));
}

_person.age = Math.floor(getDayDiff(new Date(bday), new Date())/365);
_person.isEligible = _person.age > 14 ? true : false;
console.log(_person);
