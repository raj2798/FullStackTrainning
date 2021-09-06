const hamBurger = document.querySelector("#ham-btn");
const listLeft = document.querySelector(".list-left");
hamBurger.addEventListener("click", show);

function show() {
  listLeft.style.left = 0;
  listLeft.style.display = "block";
}
const hamBurgerClose = document.querySelector("#cancel");

hamBurgerClose.addEventListener("click", hide);

function hide() {
  listLeft.style.left = "-100%";
  listLeft.style.display = "none";
}
// Meeting page form toggle
const btnSearchMeeting = document.querySelector(".btnFilterMeetings");
const btnAddMeeting = document.querySelector(".btnAddMeetings");

const meetingForm_1 = document.querySelector(".meetingPageForm-1");
const meetingForm_2 = document.querySelector(".addMeetingForm");

btnAddMeeting.addEventListener("click", () => {
  meetingForm_1.style.display = "none";
  meetingForm_2.style.display = "block";
});

btnSearchMeeting.addEventListener("click", () => {
  meetingForm_1.style.display = "block";
  meetingForm_2.style.display = "none";
});

// addTeam form
function test() {
  document.querySelector(".team-add-form").style.display = "block";
}
//cancel form
function cancel() {
  document.querySelector(".team-add-form").style.display = "none";
}
