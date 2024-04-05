import * as React from 'react';
import {Typography} from "@mui/material";

export default function Home() {
  return (
    <main>
      <Typography variant="h3" gutterBottom>
          Hi there!
      </Typography>
      <Typography gutterBottom>
          This is a simple project.
      </Typography>
      <Typography>
        This project is a simple example of how to use React/Next.js with TypeScript and Material-UI.
      </Typography>
      <Typography>
          You can find the source code at <a href="https://github.com/mirmousaviii/sample-company">GitHub</a>.
      </Typography>
    </main>
  );
}
