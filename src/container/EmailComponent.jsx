import React, { useEffect, useState } from "react";
import EmailForm from "app1/App";

export default function EmailComponent() {
  const [allEmail, setAllEmail] = useState([
    {
      emailTo: "amit@gmail.com",
      subject: "Job Application",
      emailBody: "I am a frontend developer",
    },
  ]);

  useEffect(() => {
    const handleEvent = (e) => {
      console.log("Event Received: ", e.detail);

      setAllEmail((prev) => [...prev, e.detail]);
    };

    window.addEventListener("emails", handleEvent);

    return () => {
      window.removeEventListener("emails", handleEvent);
    };
  }, []);
  return (
    <div>
      <EmailForm></EmailForm>
      <h3 className="text-center fw-light mt-4">Recent Emails</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Email To</th>
            <th scope="col">Subject</th>
            <th scope="col">Email Body</th>
          </tr>
        </thead>
        <tbody>
          {allEmail.map((email, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{email.emailTo}</td>
                <td>{email.subject}</td>
                <td>{email.emailBody}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
