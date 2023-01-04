import './style.css'

let p_id = 1;
let ph_id = 1;
let pharmacies: {id: string, pills: {id: string, name: string, count: number, price: number, pharmacy: string}[], name: string}[] = [];
const pills : {id: string, name: string, count: number, price: number, pharmacy: string}[]= [];
// const pill = {
//   id: "",
//   name: "",
//   count: 0,
//   price: 0,
//   pharmacy: ""
// };
const ph_datas = document.querySelector('#pharmacy');


const btn_find_pill = document.querySelector('#btn-find-pill');
const btn_find_pharmacy = document.querySelector('#btn-find-pharmacy');
const btn_add_pharmacy = document.querySelector('#btn-add-pharmacy');
const btn_add_pill = document.querySelector('#btn-add-pill');
const ph_name = document.querySelector('.pharmacy-name');
const ph_tbody = document.querySelector('#ph-tbody');
const tbody = document.querySelector('#tbody')


btn_find_pill?.addEventListener('click', () => {
  const demo = String(prompt('Add pill name: ')).toLowerCase();
  console.log(demo);
  tbody!.innerHTML = '';
  if (pills.filter(v => v.name.toLowerCase() === demo).length) {
    pills.filter(v => v.name === demo).map(p => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<tr>
      <td>${p.name}</td>
      <td>${p.count}</td>
      <td>${p.price}</td>
      <td>${p.pharmacy}</td>
      </tr>`;
      tbody?.append(tr);
    });
  }
  else {
    alert('This pill didnt find');
  }
});

btn_find_pharmacy?.addEventListener('click', () =>{
  const demo = String(prompt('Add pharmacy name: ')).toLowerCase();
  console.log(demo);
  ph_tbody!.innerHTML = "";
  if(pharmacies.filter(v => v.name.toLowerCase() === demo).length) {
    ph_name!.innerHTML = demo;    
    pharmacies.filter(v => v.name === demo).map(p => 
      p.pills.map(ph => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<tr>
        <td>${ph.name}</td>
        <td>${ph.count}</td>
        <td>${ph.price}</td>
        </tr>`;
        ph_tbody?.append(tr);
      })
    );
  }
  else {
    alert('This pharmacy not find!');
  }
});

btn_add_pharmacy?.addEventListener('click', ()=> {
  const demo = String(prompt('Add pill name: ')).toLowerCase();
  ph_tbody!.innerHTML = "";
  if (pharmacies.filter(v => v.name === demo).length > 0) {
    alert('This pharmacy is already have(');
  }
  else {
    const pharmacy: {id: string, pills: { id: string, name: string, count: number, price: number, pharmacy: string }[], name: string} = {id: "",
      pills: [],
      name: ""};
    pharmacy.id = String(ph_id);
    ph_id++;
    pharmacy.pills = pills.filter(v => v.pharmacy === demo);
    pharmacy.name = demo;
    console.log(pharmacies);
    pharmacies = [...pharmacies, pharmacy];
    console.log(pharmacies);
    ph_name!.innerHTML = demo;
    pharmacies.filter(v => v.name === demo).map(p => 
      p.pills.map(ph => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<tr>
        <td>${ph.name}</td>
        <td>${ph.count}</td>
        <td>${ph.price}</td>
        </tr>`;
        ph_tbody?.append(tr);
      })
    );
  }
});

btn_add_pill?.addEventListener('click', ()=> {
  p_id++;
  const demo = String(prompt('Add pharmacy name: ')).toLowerCase();
  tbody!.innerHTML = '';
  if(pharmacies.filter(v => v.name === demo).length > 0) {
    const pill = {
      id: "",
      name: "",
      count: 0,
      price: 0,
      pharmacy: ""
    };
    pill.id = String(p_id);
    pill.pharmacy = demo;
    pill.name = String(prompt('Add pill name: '));
    pill.count = Number(prompt('Add number: '));
    pill.price = Number(prompt('Add price: 0.00'));
    console.log(pill);
    pills.push(pill);
    pharmacies.filter(ph => ph.name === demo)[0].pills = pills.filter(v => v.pharmacy === demo);
    pills.filter(v => v.name === pill.name).map(p => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<tr>
      <td>${p.name}</td>
      <td>${p.count}</td>
      <td>${p.price}</td>
      <td>${p.pharmacy}</td>
      </tr>`;
      tbody?.append(tr);
    });
  }
  else{
    alert('This pharmacy did not find');
  }
});