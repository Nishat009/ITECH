import React from "react";
import { TextField, Button, TextareaAutosize, Paper } from "@material-ui/core";
import useStyles from "./styles";

const About = () => {
  const classes = useStyles();
  return (
    <section>
      <div className="container p-5">
        <div className="text-center mb-5">
          <h1 className="text-center mb-5">Get in Touch</h1>
          <p style={{ color: "#93C4CD", fontWeight: "700" }}>
            Contact us for any further questions, possible business partnerships
          </p>
        </div>
        <div className="row m-0 p-5">
          <div className="col-md-4 text-center">
            <p>
              <i class="fas fa-comments fs-1"></i>
            </p>
            <h4 className="p-3">Let’s talk</h4>
            <p>Phone: +880-1712-538034</p>
            <p>Email: info@sweetitech.com1</p>
            <p>
              <u>http://www.sweetitech.com</u>
            </p>
          </div>
          <div className="col-md-4 text-center">
            <p>
              <i class="fas fa-store fs-1"></i>
            </p>
            <h4 className="p-3">Visit our Bangladesh Branch</h4>
            <p>Suite: 6B, Rahbar Tower 77-78,</p>
            <p>Ring Road, Mohammadpur,</p>
            <p>
              <u>Dhaka-1207, Bangladesh</u>
            </p>
          </div>
          <div className="col-md-4 text-center">
            <p>
              <i class="fas fa-users fs-1"></i>
            </p>
            <h4 className="p-3">Our other branch</h4>
            <p>Sweet IT UK Limited 22 Cavell Street London E1 2HP, England</p>
            <p>phone:+44 7716 296 115</p>
            <p>
              <u>Email:info@sweetitech.com</u>
            </p>
          </div>
        </div>
      </div>
      <div className="row m-0 px-5">
        <div className="col-md-4 p-5">
          <h3 className="mt-5">
            Get in contact with us by filling out our contact form.
          </h3>
        </div>
        <div className="col-md-8 px-5">
          <h1 className="text-center mb-3">Contact</h1>
          <Paper className={classes.paper}>
            <form
              autoComplete="off"
              noValidate
              className={`${classes.root} ${classes.form}`}
              action=""
            >
              <TextField name="Name*" label="Your review*" fullWidth />
              <TextField name="Email*" label="name*" fullWidth />
              <TextField name="Subject" label="email*" fullWidth />
              <TextField
                label="Message*"
                multiline
                rows={5}
                rowsMax={7}
                fullWidth
              />
              <Button
                variant="contained"
                className={classes.buttonSubmit}
                color="primary"
                size="large"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Paper>
        </div>
      </div>
    </section>
  );
};

export default About;
