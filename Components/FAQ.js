import * as React from "react";
import "../style/review.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
    marginTop: theme.spacing(2),
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(to right, rgb(175, 189, 190) , rgb(76, 138, 231))"
      : "linear-gradient(to right,  rgb(93, 137, 209) , rgb(207, 215, 226))",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(10),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(5),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundImage: "linear-gradient(to right, rgb(175, 189, 190) , rgb(76, 138, 231))"
}));

export default function FAQ() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="Review">
      <h2 className="head-style">Some Reviews</h2>
      <span className="sub-head-style">OF OUR CLIENTS</span>
      <div className="reviews">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}

        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              <div className="topo">
                <h3>What services does ProHealth offer?</h3>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesent voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>
              <div className="topo">
                <h3>How do I schedule an appointment with ProHealth?</h3>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesent voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              <div className="topo">
                <h3>Do you accept insurance?</h3>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesent voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>
              <div className="topo">
                <h3>What should I bring to my appointment?</h3>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesent voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>
              <div className="topo">
                <h3>How do I request a prescription refill?</h3>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesent voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
