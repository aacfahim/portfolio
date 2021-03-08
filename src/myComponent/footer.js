import React, { Component } from "react";
import { Typography } from "@material-ui/core";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <Typography
            variant="body1"
            gutterBottom
            align="center"
            display="inline"
          >
            <i class="far fa-copyright">
              {/* lower part of website showing the author name and current year */}
              Copyright Ashfaq Afzal Chowdhury. All Rights Reserved{" "}
              {new Date().getFullYear()}
            </i>
          </Typography>
        </div>
        <div className="footer-a">
          <a href="https://www.facebook.com/aacfahim">
            <i class="fab fa-facebook-f " />
          </a>
          <a href="https://twitter.com/aacfahim">
            <i class="fab fa-twitter" />
          </a>
          <a href="https://www.instagram.com/aacfahim/">
            <i class="fab fa-instagram" />
          </a>
          <a href="mailto: aacfahim@gmail.com">
            <i class="fas fa-envelope" />
          </a>
        </div>
      </div>
    );
  }
}
