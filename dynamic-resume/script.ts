let perName : any = document.getElementById(`name`);
let desig : any = document.getElementById(`desig`);
let phone : any = document.getElementById(`phone`);
let email : any = document.getElementById(`email`);
let addr : any = document.getElementById(`addr`);
let pic : any = document.getElementById(`pic`);
let pass1 : any = document.getElementById(`pass1`);
let deg1 : any = document.getElementById(`deg1`);
let inst1 : any = document.getElementById(`inst1`);
let pass2 : any = document.getElementById(`pass2`);
let deg2 : any = document.getElementById(`deg2`);
let inst2 : any = document.getElementById(`inst2`);
let skill1 : any = document.getElementById(`skill1`);
let skill2 : any = document.getElementById(`skill2`);
let skill3 : any = document.getElementById(`skill3`);
let lang1 : any = document.getElementById(`lang1`);
let lang2 : any = document.getElementById(`lang2`); 
let stYear : any = document.getElementById(`stYear`);
let endYear : any = document.getElementById(`endYear`);
let company : any = document.getElementById(`company`);
let compLocation : any = document.getElementById(`compLocation`);
let jobTitle : any = document.getElementById(`jobTitle`);
let achv1 : any = document.getElementById(`achv1`);
let achv2 : any = document.getElementById(`achv2`);
let achv3 : any = document.getElementById(`achv3`);
let submitBtn = document.getElementById(`submitBtn`);
let form = document.getElementById(`form`);


form?.addEventListener(`submit`, (event)=>{
    event.preventDefault()

    localStorage.setItem(`name`, perName.value);
    localStorage.setItem(`desig`, desig.value);
    localStorage.setItem(`phone`, phone.value);
    localStorage.setItem(`email`, email.value);
    localStorage.setItem(`addr`, addr.value);
    localStorage.setItem(`pass1`, pass1.value);
    localStorage.setItem(`deg1`, deg1.value);
    localStorage.setItem(`inst1`, inst1.value);
    localStorage.setItem(`pass2`, pass2.value);
    localStorage.setItem(`deg2`, deg2.value);
    localStorage.setItem(`inst2`, inst2.value);
    localStorage.setItem(`skill1`, skill1.value);
    localStorage.setItem(`skill2`, skill2.value);
    localStorage.setItem(`skill3`, skill3.value);
    localStorage.setItem(`lang1`, lang1.value);
    localStorage.setItem(`lang2`, lang2.value);
    localStorage.setItem(`stYear`, stYear.value);
    localStorage.setItem(`endYear`, endYear.value);
    localStorage.setItem(`company`, company.value);
    localStorage.setItem(`compLocation`, compLocation.value);
    localStorage.setItem(`jobTitle`, jobTitle.value);
    localStorage.setItem(`achv1`, achv1.value);
    localStorage.setItem(`achv2`, achv2.value);
    localStorage.setItem(`achv3`, achv3.value);

    if(pic.files && pic.files[0]){
      let reader = new FileReader();
      reader.addEventListener(`load`, ()=>{
        let textImg : any = reader.result
        localStorage.setItem(`pic`, textImg)
      })
      reader.readAsDataURL(pic.files[0]); 
    }
    
    window.location.href = `./resume/resume.html`;
})







