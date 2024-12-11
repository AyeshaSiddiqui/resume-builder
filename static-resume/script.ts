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

let print_btn = document.getElementById(`print-btn`);

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

print_btn?.addEventListener(`click`,()=>{
    window.print();
});
