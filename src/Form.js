import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";

function Form() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_1kqhovw",
      "template_av8lwcp",
      toSend,
      "user_VaNHyRIwibcv6cHKNJpal"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="from name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="to_name"
          placeholder="to name"
          value={toSend.to_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

// import React from "react";

// export default class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { feedback: "test", name: "Name", email: "email@example.com" };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <form className="test-mailing">
//         <h1>Let's see if it works</h1>
//         <div>
//           <textarea
//             id="feedback"
//             name="feedback"
//             onChange={this.handleChange}
//             placeholder="Post some lorem ipsum here"
//             required
//             value={this.state.feedback}
//             style={{ width: "100%", height: "150px" }}
//           />
//         </div>

//         <input
//           type="button"
//           value="Submit"
//           className="btn btn--submit"
//           onClick={this.handleSubmit}
//         />
//       </form>
//     );
//   }

//   handleChange(event) {
//     this.setState({ feedback: event.target.value });
//   }

//   handleSubmit(event) {
//     const templateId = "template_av8lwcp";

//     this.sendFeedback(templateId, {
//       message_html: this.state.feedback,
//       from_name: this.state.name,
//       reply_to: this.state.email,
//     });
//   }

//   sendFeedback(templateId, variables) {
//     window.emailjs
//       .send("service_1kqhovw", templateId, variables)
//       .then((res) => {
//         console.log("Email successfully sent!");
//       })
//       // Handle errors here however you like, or use a React error boundary
//       .catch((err) =>
//         console.error(
//           "Oh well, you failed. Here some thoughts on the error that occured:",
//           err
//         )
//       );
//   }
// }
