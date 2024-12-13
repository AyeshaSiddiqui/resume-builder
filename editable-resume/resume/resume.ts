window.addEventListener(`load`, () => {
  let perName = localStorage.getItem(`name`);
  let desig = localStorage.getItem(`desig`);
  let phone = localStorage.getItem(`phone`);
  let email = localStorage.getItem(`email`);
  let addr = localStorage.getItem(`addr`);
  let pic = localStorage.getItem(`pic`);
  let pass1 = localStorage.getItem(`pass1`);
  let deg1 = localStorage.getItem(`deg1`);
  let inst1 = localStorage.getItem(`inst1`);
  let pass2 = localStorage.getItem(`pass2`);
  let deg2 = localStorage.getItem(`deg2`);
  let inst2 = localStorage.getItem(`inst2`);
  let skill1 = localStorage.getItem(`skill1`);
  let skill2 = localStorage.getItem(`skill2`);
  let skill3 = localStorage.getItem(`skill3`);
  let lang1 = localStorage.getItem(`lang1`);
  let lang2 = localStorage.getItem(`lang2`);
  let stYear = localStorage.getItem(`stYear`);
  let endYear = localStorage.getItem(`endYear`);
  let company = localStorage.getItem(`company`);
  let compLocation = localStorage.getItem(`compLocation`);
  let jobTitle = localStorage.getItem(`jobTitle`);
  let achv1 = localStorage.getItem(`achv1`);
  let achv2 = localStorage.getItem(`achv2`);
  let achv3 = localStorage.getItem(`achv3`);


  let resName : any = document.getElementById(`resName`);
  let resDesig : any = document.getElementById(`resDesig`);
  let resPhone : any = document.getElementById(`resPhone`);
  let resEmail : any = document.getElementById(`resEmail`);
  let resAddr : any = document.getElementById(`resAddr`);
  let resImg : any = document.getElementById(`resImg`);
  let resPass1 : any = document.getElementById(`resPass1`);
  let resDeg1 : any = document.getElementById(`resDeg1`);
  let resInst1 : any = document.getElementById(`resInst1`);
  let resPass2 : any = document.getElementById(`resPass2`);
  let resDeg2 : any = document.getElementById(`resDeg2`);
  let resInst2 : any = document.getElementById(`resInst2`);
  let resSkill1 : any = document.getElementById(`resSkill1`);
  let resSkill2 : any = document.getElementById(`resSkill2`);
  let resSkill3 : any = document.getElementById(`resSkill3`);
  let resLang1 : any = document.getElementById(`resLang1`);
  let resLang2 : any = document.getElementById(`resLang2`);
  let resStYear : any = document.getElementById(`resStYear`);
  let resEndYear : any = document.getElementById(`resEndYear`);
  let resCompany : any = document.getElementById(`resCompany`);
  let resCompLocation : any = document.getElementById(`resCompLocation`);
  let resJobTitle : any = document.getElementById(`resJobTitle`);
  let resAchv1 : any = document.getElementById(`resAchv1`);
  let resAchv2 : any = document.getElementById(`resAchv2`);
  let resAchv3 : any = document.getElementById(`resAchv3`);

  
  resName.textContent = perName;
  resDesig.textContent = desig;
  resPhone.textContent = phone;
  resEmail.textContent = email;
  resAddr.textContent = addr;
  resPass1.textContent = pass1;
  resDeg1.textContent = deg1;
  resInst1.textContent = inst1;
  resPass2.textContent = pass2;
  resDeg2.textContent = deg2;
  resInst2.textContent = inst2;
  resSkill1.textContent = skill1;
  resSkill2.textContent = skill2;
  resSkill3.textContent = skill3;
  resLang1.textContent = lang1;
  resLang2.textContent = lang2;
  resStYear.textContent = stYear;
  resEndYear.textContent = endYear;
  resCompany.textContent = company;
  resCompLocation.textContent = compLocation;
  resJobTitle.textContent = jobTitle;
  resAchv1.textContent = achv1;
  resAchv2.textContent = achv2;
  resAchv3.textContent = achv3;
  resImg.src = pic;
});

let contact = document.getElementById(`contact`);
let edu = document.getElementById(`edu`);
let skill = document.getElementById(`skill`);
let lang = document.getElementById(`lang`);
let exp = document.getElementById(`exp`);
let ref = document.getElementById(`ref`);

let contact_btn = document.getElementById(`contact-btn`);
let edu_btn = document.getElementById(`edu-btn`);
let skill_btn = document.getElementById(`skill-btn`);
let lang_btn = document.getElementById(`lang-btn`);
let exp_btn = document.getElementById(`exp-btn`);
let ref_btn = document.getElementById(`ref-btn`);

contact_btn?.addEventListener(`click`,()=>{
  contact!.classList.toggle(`hide`);
});

edu_btn?.addEventListener(`click`,()=>{
  edu!.classList.toggle(`hide`);
});

skill_btn?.addEventListener(`click`,()=>{
  skill!.classList.toggle(`hide`);
});

lang_btn?.addEventListener(`click`,()=>{
  lang!.classList.toggle(`hide`);
});

exp_btn?.addEventListener(`click`,()=>{
  exp?.classList.toggle(`hide`);
});

ref_btn?.addEventListener(`click`,()=>{
  ref!.classList.toggle(`hide`);
});

// Print Button
let print_btn = document.getElementById(`print-btn`);

print_btn?.addEventListener(`click`, () => {
  window.print();
});

// Edit Button
let edit_btn = document.getElementById(`edit-btn`);

edit_btn?.addEventListener(`click`, ()=>{
  window.history.back();
})