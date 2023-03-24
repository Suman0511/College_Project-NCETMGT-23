import Global from "./Global";
import "./Submit.css";

function Submit() {
  return (
    // <div className="submit">
    //     <h1>RESEARCH PAPER SUBMISSION GUIDELINES</h1>
    //     <p>Submitted Paper must be original and unpublished. <br/>Similarity Index(Plagiarism of the paper should not exceed above 15%.) <br/>Research paper submission format:</p>
    //     <li>Length of full Paper 4 to 5 Pages (as per IEEE format).</li>
    //     <li>Maximum number of Co-authors:3</li>
    //     <li>Font Style-Times New Roman.</li>
    //     <li>Font-size-Heading: 12,
    //     </li>
    //     <ul>Sub Heading: 11,</ul>
    //     <ul>Text: 10,</ul>
    //     <ul>line Spacing: 1.0</ul>

    //     <p>Download MS-Word Template for sample Details <a href="https://docs.google.com/document/d/1rZ_-yegorr1NGkXZNQfCg401wVH2nC44/edit#">click here</a> <br/>Paper must be submitted at ncetcse23@gmail.com on or before 8 April,2023</p>
    // </div>
    <div>
      <div className="submission-container">
        <div className="row">
          <div className="structure_paper">
            <h4>STRUCTURE OF PAPER</h4>
            <ul>
              <div className="list-item">
                <div className="dot"></div>
                <li>Title</li>
              </div>
              <div className="list-item">
                <div className="dot dot-res"></div>

                <li>Author name with affiliations</li>
              </div>
              <div className="list-item">
                <div className="dot"></div>

                <li>Abstract</li>
              </div>
              <div className="list-item">
                <div className="dot"></div>
                <li>Keywords</li>
              </div>
              <div className="list-item">
                <div className="dot"></div>
                <li>Introduction</li>
              </div>
              <div className="list-item">
                <div className="dot"></div>
                <li>Review of literature</li>
              </div>
              <div className="list-item">
                <div className="dot"></div>
                <li>Methodology</li>
              </div>
              <div className="list-item">
                <div className="dot"></div>
                <li>Results</li>
              </div>
              <div className="list-item">
                <div className="dot"></div>
                <li>Discussions</li>
              </div>
              <div className="list-item">
                <div className="dot"></div>
                <li>Implications of study</li>
              </div>
              <div className="list-item">
                <div className="dot dot-res"></div>
                <li>Limitations and future research directions</li>
              </div>
              <div className="list-item">
                <div className="dot"></div>
                <li>References (APA format)</li>
              </div>
              <p>
                Download MS-WORD template for sample:{" "}
                <a href="https://docs.google.com/document/d/1rZ_-yegorr1NGkXZNQfCg401wVH2nC44/edit#">click here</a>
              </p>
            </ul>
          </div>
          <div className="research_paper_format">
            <h4>RESEARCH PAPER SUBMISSION FORMAT</h4>
            <p>
              <b>Format:</b> MS-Word (.doc/.dicx)
            </p>
            <p>
              <b>Language:</b> English
            </p>
            <p>
              <b>Font Style:</b> Times New Roman
            </p>
            <p>
              <b>Length:</b> 5000 - 8000 words/4-5 pages
            </p>
            <p>
              <b>Font Size:</b> 14 for title, 12 for heading, sub-heading, and
              paragraph
            </p>
            <p>
              <b>Spacing:</b> 1.0 line spacing
            </p>
            <p>
              <b>Margin:</b> 1.27 top, bottom, left, right
            </p>
            <p>
              <b>Maximum number of Co-author:</b> 4
            </p>
            <p>Paper must of A4 size with double column in MS-Word.</p>
          </div>
        </div>
      </div>
      <div className="submission-container-2">
        <div className="row">
          <div className="conference-processing">
            <h4 className="heading">CONFERENCE PROCESSING</h4>
            <p>
              All the submitted papers will be passed through double <br></br>
              reviewed process followed by plagiarism check.
            </p>
          </div>
          <div className="submission-guidelines">
            <h4 className="heading">RESEARCH PAPER SUBMISSION GUIDELINES</h4>
            <p>
              Submitted papers must be original and unpublished.
              <br></br>
                Authors must ensure the Similarity index (plagiarism) of paper
                should not exceed 15%.
            </p>
          </div>
        </div>
      </div>
      <div className="submission-container-3">
        <div className="row">
          <div className="award">
            <h5>REST PAPER/POSTER AWARD</h5>
            <p>
              The authors of selected papers as recommended by committee after review will be awarded with best paper certificate.
            </p>
          </div>
        </div>
      </div>
      <Global/>
      <div className="submission-container-4">
        <div className="row">
          <div className="award">
            <h5>PAPER IN ABSENTIA</h5>
            <p>
              Papers on conference theme and sub-themes contributed in absentia are eligible to be included in conference proceedings post review, <br></br>only if one of the authors has completed registration process for conference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Submit;
