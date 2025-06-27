const form = document.getElementById('job-form');
const jobList = document.getElementById('job-list');

let jobs = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const company = document.getElementById('company').value;
  const position = document.getElementById('position').value;
  const date = document.getElementById('date').value;
  const status = document.getElementById('status').value;

  const job = { company, position, date, status };
  jobs.push(job);
  renderJobs();

  form.reset();
});

function renderJobs() {
  jobList.innerHTML = '';
  jobs.forEach((job, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${job.company}</td>
      <td>${job.position}</td>
      <td>${job.date}</td>
      <td>${job.status}</td>
      <td><button onclick="deleteJob(${index})">Delete</button></td>
    `;
    jobList.appendChild(row);
  });
}

function deleteJob(index) {
  jobs.splice(index, 1);
  renderJobs();
}
