function createResume() {
  const name = document.getElementById('name').value;
  const education = document.getElementById('education').value;
  const experience = document.getElementById('experience').value;
  const skills = document.getElementById('skills').value;

  const resumeContainer = document.getElementById('resumeContainer');
  resumeContainer.innerHTML = `
      <div class="resume">
          <div class="resume-section" contenteditable="true">
              <h3>Name</h3>
              <p>${name}</p>
          </div>
          <div class="resume-section" contenteditable="true">
              <h3>Education</h3>
              <p>${education}</p>
          </div>
          <div class="resume-section" contenteditable="true">
              <h3>Experience</h3>
              <p>${experience}</p>
          </div>
          <div class="resume-section" contenteditable="true">
              <h3>Skills</h3>
              <p>${skills}</p>
          </div>
      </div>
  `;
}
