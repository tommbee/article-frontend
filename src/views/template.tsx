const html = ({ body }: { body: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        a:visited {
          color: #777474 !important;
        }
        a:hover {
          color: #393939 !important;
          text-decoration: underline !important;
        }
        a:hover time {
          text-decoration: underline !important;
        }
        a:before {
          content: "→";
          display: inline-block;
          position: absolute;
          left: -30px;
          width: 15px;
          height: 15px;
          bottom: 15px;
          opacity: 0;
          transition: all .2s linear;
        }
        a:hover:before {
          content: "→";
          display: inline-block;
          position: absolute;
          left: -21px;
          width: 15px;
          height: 15px;
          bottom: 15px;
          opacity: 1;
        }
        .clearfix::after {
          content: "";
          clear: both;
          display: table;
        }
      </style>
      <title>The Daily Crossword Archive | The most comprehensive collection of online crossword puzzles</title>
      <link href="https://fonts.googleapis.com/css?family=DM+Sans|DM+Serif+Display|DM+Serif+Text&display=swap" rel="stylesheet">
      <meta name="description" content="A complete archive of selected daily crossword puzzles">
    </head>
    ${body}
  </html>
`;

export default html;
