import React, { useEffect } from "react";

const GoogleBooking = () => {
  useEffect(() => {
    const scriptId = "google-calendar-script";
    const linkId = "google-calendar-css";

    // Check if the script and link already exist
    if (!document.getElementById(scriptId)) {
      // Load the CSS for the scheduling button if it's not already loaded
      if (!document.getElementById(linkId)) {
        const link = document.createElement("link");
        link.id = linkId;
        link.href =
          "https://calendar.google.com/calendar/scheduling-button-script.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
      }

      // Load the Google scheduling button script if it's not already loaded
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://calendar.google.com/calendar/scheduling-button-script.js";
      script.async = true;
      script.onload = () => {
        if (window.calendar && window.calendar.schedulingButton) {
          window.calendar.schedulingButton.load({
            url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3mD-i-tifq1GHE_d86GF8YfbCizdikX4irTzOOBafXdMvL3OK-GmGZW40WbJ4vElCP-xtSxov9?gv=true",
            color: "#039BE5",
            label: "Book Now",
            target: document.getElementById("scheduling-button"), // Targeting the div to replace
          });
        }
      };
      document.body.appendChild(script);
    }

    // Remove the existing button if there is one
    return () => {
      const existingButton = document.getElementById("scheduling-button");
      if (existingButton) {
        existingButton.innerHTML = ""; // Clear the inner HTML
      }
    };
  }, []);

  return (
    <div className="mt-5">
      {/* This div will be replaced by the Google scheduling button */}
      <div id="scheduling-button"></div>
    </div>
  );
};

export default GoogleBooking;
