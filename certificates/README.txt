To add your real certificates to the website:

1. Place your certificate files (like images .png/.jpg or documents .pdf) in this folder (public/certificates).
2. Open src/App.jsx.
3. Scroll down to the "Certifications Section" (around line 163).
4. Update the "link" property for each certificate to match the name of the file you placed in this folder.

For example, if you place a file named "my-java-cert.pdf" here, update the code to:
{ name: 'Programming in Java', issuer: 'NPTEL', link: '/certificates/my-java-cert.pdf' }
