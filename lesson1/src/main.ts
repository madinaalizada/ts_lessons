import './style.css';

const user : {name: string, surname: string, age: number, genetic: string, pass: string , isEligible: boolean} = {
  name: '',
  surname: '',
  age: 0,
  genetic: '',
  pass: '',
  isEligible: false
};

// user.name = String(prompt('Adinizi daxil edin: '));
// user.surname = String(prompt('Soyadinizi daxil edin: '));
// const bday = String(prompt('Dogum tarixinizi daxil edin: yyyy-mm-dd'));
// user.genetic = Number(prompt('Cinsinizi daxil edin: 1.Kişi 2.Qadın 3.Digər'));
// user.pass = String(prompt('Şifrənizi daxil edin: '));

function getDayDiff(startDate: Date, endDate: Date): number {
  return Math.round(Math.abs(Number(endDate) - Number(startDate)) / (24 * 60 * 60 * 1000));
}

enum Genders  {
  Male,
  Female,
  Others
};

// user.age = Math.floor(getDayDiff(new Date(bday), new Date())/365);
// user.isEligible = user.age > 14 ? true : false;
// console.log(user);

const form = document.getElementById('form') as HTMLFormElement | undefined;
const btn = document.getElementById('btn-submit') as HTMLButtonElement | null;


btn?.addEventListener('click', (e)=> {
  e.preventDefault();
  const data = new FormData(form);

  user.age = Math.floor(getDayDiff(new Date(String(data.get('birthdate'))), new Date())/365);
  if(user.age > 14) {
    user.name = String(data.get('name'));
    user.surname = String(data.get('surname'));
    user.pass = String(data.get('password'));
    user.genetic = Genders[Number(data.get('gender'))]
    user.isEligible = user.age > 14 ? true : false;
    alertify.alert(`User added. Welcome ${user.name}!`);
  }
  else {
    user.age = 0;
    alertify.alert('User denied!');
  }
  form?.reset();
  console.log(user);
});

