const arrSkills = ["HTML5", "CSS", "JAVASCRIPT", "BOOTSTRAP", "TAILWIND", "GIT", "GITHUB", "SCRUM", "SQL", "ANGULAR", "TYPESCRIPT", "JAVA"]
const btnskills = document.querySelector("#skills");
const anclaArr = document.querySelector("#anclaArr");

const createSpans = (e) => {
    arrSkills.forEach((skill, index) => {
        setTimeout(()=>{
            const skillElement = document.createElement('span');
            skillElement.innerHTML = skill;
            skillElement.classList.add("skill", "max-lg:flex");
            anclaArr.appendChild(skillElement);
        },index * 500);
    });
    
    e.target.removeEventListener(e.type, createSpans);
};
btnskills.addEventListener("click", createSpans);