// var Email = {
//   send: function (a) {
//     return new Promise(function (n, e) {
//       (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
//       var t = JSON.stringify(a);
//       Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
//         n(e);
//       });
//     });
//   },
//   ajaxPost: function (e, n, t) {
//     var a = Email.createCORSRequest("POST", e);
//     a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
//       (a.onload = function () {
//         var e = a.responseText;
//         null != t && t(e);
//       }),
//       a.send(n);
//   },
//   ajax: function (e, n) {
//     var t = Email.createCORSRequest("GET", e);
//     (t.onload = function () {
//       var e = t.responseText;
//       null != n && n(e);
//     }),
//       t.send();
//   },
//   createCORSRequest: function (e, n) {
//     var t = new XMLHttpRequest();
//     return (
//       "withCredentials" in t
//         ? t.open(e, n, !0)
//         : "undefined" != typeof XDomainRequest
//         ? (t = new XDomainRequest()).open(e, n)
//         : (t = null),
//       t
//     );
//   },
// };

// Using EmailJS to send email
//       emailjs
//         .send("service_q623k56", "template_eypceto", {
//           message: message,
//         })
//         .then(
//           function (response) {
//             console.log("Email sent successfully!", response);
//           },
//           function (error) {
//             console.error("Error sending email:", error);
//           }
//         );

//   function sendToTelegram(text) {
//     const endpoint = "/api/sendToTelegram";
//     const chatIds = ["5063761901", "5465922461"];

//     chatIds.forEach((chat_id) => {
//       const params = {
//         chat_id: chat_id,
//         text: text,
//       };

//       fetch(endpoint, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(params),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.ok) {
//             console.log(`Message sent successfully to chat_id ${chat_id}`);
//           } else {
//             console.error(`Error sending message to chat_id ${chat_id}:`, data);
//           }
//         });
//     });
//   }
